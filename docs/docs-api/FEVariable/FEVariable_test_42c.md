---
title: FEVariable example 42c
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/QuadratureVariable
  - FEVariable/Display
---

# FEVariable example 42c

!!! note ""
    This example tests / operator. Vector, Quadrature

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
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant ) &
      / QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "constant / constant")
```

```fortran
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant ) &
      / 1.0_DFP
  CALL Display(obj, "constant / constant")
```

!!! note "space / constant"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace ) &
      / QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "space / constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace ) &
      / 1.0_DFP
  CALL Display(obj, "space / constant")
```

!!! note "time / constant"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ) &
      / QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "time / constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ) &
      / 1.0_DFP
  CALL Display(obj, "time / constant")
```

!!! note "spacetime / constant"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime ) &
      / QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "spacetime / constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime ) &
      / 1.0_DFP
  CALL Display(obj, "spacetime / constant")
```

```fortran
END PROGRAM main
```
