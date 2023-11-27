---
title: FEVariable example 4
author: Vikas Sharma, Ph. D.
date: 30 April 2022
tags:
  - FEVariable/QuadratureVariable
  - FEVariable/Display
---

# FEVariable example 4

!!! note ""
    This example show how to USE QuadratureVariable method to generate Scalar variables at the quadrature nodes of the element.

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

!!! note "QuadratureVariable, scalar, constant"

```fortran
  obj = QuadratureVariable( 1.0_DFP, typeFEVariableScalar, typeFEVariableConstant )
  CALL Display(obj, "QuadratureVariable, Scalar, Constant")
```

!!! note "QuadratureVariable, scalar, space"

```fortran
  obj = QuadratureVariable( arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
      & typeFEVariableSpace )
  CALL Display(obj, "QuadratureVariable, scalar, space")
```

!!! note "QuadratureVariable, scalar, time"

```fortran
  obj = QuadratureVariable( arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
      & typeFEVariableTime )
  CALL Display(obj, "QuadratureVariable, scalar, time")
```

!!! note "QuadratureVariable, scalar, space-time"

```fortran
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar, &
      & typeFEVariableSpaceTime )
  CALL Display(obj, "QuadratureVariable, scalar, space-time")
```

```fortran
END PROGRAM main
```
