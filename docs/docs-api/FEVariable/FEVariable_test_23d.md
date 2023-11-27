---
title: FEVariable example 23d
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
---

# FEVariable example 23d

!!! note ""
    This example tests additional operator. Matrix, Quadrature

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

!!! note "constant-space"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    - QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpace )
  CALL Display(obj, "constant-space")
```

!!! note "space-space"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace ) &
      - QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace )
  CALL Display(obj, "space-space")
```

!!! note "constant-time"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    - QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableTime )
  CALL Display(obj, "constant-time")
```

!!! note "time-time"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime ) &
      - QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime )
  CALL Display(obj, "time-time")
```

!!! note "constant-spacetime"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    - QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant-spacetime")
```

!!! note "spacetime-spacetime"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime ) &
    - QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime-spacetime")
```


```fortran
END PROGRAM main
```
