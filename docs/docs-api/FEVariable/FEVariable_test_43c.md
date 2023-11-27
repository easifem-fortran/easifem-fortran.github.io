---
title: FEVariable example 43c
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/QuadratureVariable
  - FEVariable/Display
---

# FEVariable example 43c

!!! note ""
    This example tests / operator. Matrix, Quadrature

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

!!! note "constant / constant"

```fortran
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant ) &
      / QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "constant / constant")
```

```fortran
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant ) &
      / 1.0_DFP
  CALL Display(obj, "constant / constant")
```

!!! note "space / constant"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace ) &
      / QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "space / constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace ) &
      / 1.0_DFP
  CALL Display(obj, "space / constant")
```

!!! note "time / constant"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime ) &
      / QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "time / constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime ) &
      / 1.0_DFP
  CALL Display(obj, "time / constant")
```

!!! note "spacetime / constant"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpaceTime ) &
      / QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "spacetime / constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpaceTime ) &
      / 1.0_DFP
  CALL Display(obj, "spacetime / constant")
```

```fortran
END PROGRAM main
```
