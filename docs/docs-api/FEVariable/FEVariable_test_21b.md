---
title: FEVariable example 21b
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
---

# FEVariable example 21b

!!! note ""
    This example tests substraction operator. Scalar Nodal Values

## Use association

- [[FEVariable_]]

## Usage

!!! note "Import modules and declare variable"
    

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

!!! note "constant - space"

```fortran
  call display("=================================")
  obj = NodalVariable( 1.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    - NodalVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableSpace )
  CALL Display(obj, "constnat-space")
```

!!! note "space-space"

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace ) &
      - NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace )
  CALL Display(obj, "space-space")
```

!!! note "constant-time"

```fortran
  call display("=================================")
  obj = NodalVariable( 1.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    - NodalVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableTime )
  CALL Display(obj, "constant-time")
```

!!! note "time-time"

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime ) &
      - NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime )
  CALL Display(obj, "time-time")
```

!!! note "constant-spacetime"

```fortran
  call display("=================================")
  obj = NodalVariable( 1.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    - NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant-spacetime")
```

!!! note "spacetime-spacetime"

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime ) &
    - NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime-spacetime")
```


```fortran
END PROGRAM main
```
