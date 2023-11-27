---
title: FEVariable example 21d
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
---

# FEVariable example 21d

!!! note ""
    This example tests substraction operator. Scalar Quadrature

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
  obj = QuadratureVariable( 1.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableSpace )
  CALL Display(obj, "constnat-space")
```

!!! note "space-space"

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableSpace ) &
      - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableSpace )
  CALL Display(obj, "space-space")
```

!!! note "constant-time"

```fortran
  call display("=================================")
  obj = QuadratureVariable( 1.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableTime )
  CALL Display(obj, "constant-time")
```

!!! note "time-time"

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableTime ) &
      - QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableTime )
  CALL Display(obj, "time-time")
```

!!! note "constant-spacetime"

```fortran
  call display("=================================")
  obj = QuadratureVariable( 1.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    - QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant-spacetime")
```

!!! note "spacetime-spacetime"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime ) &
    - QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime-spacetime")
```


```fortran
END PROGRAM main
```
