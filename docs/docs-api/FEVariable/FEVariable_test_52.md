---
title: FEVariable example 52
author: Vikas Sharma, Ph. D.
date: 04 Jan 2022
update: 04 Jan 2022
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/POWER
---

# FEVariable example 52

!!! note ""
    This example tests POWER `(**)` operator. Scalar, Quadrature Variable.

## Use association

- [[FEVariable_]]

## Usage

!!! note "Import modules and declare variable"

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
  TYPE(FEVariable_) :: ans
```

!!! note "constant"

```fortran
  obj = QuadratureVariable( &
      & 2.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant ) ** 2
  ans = QuadratureVariable( 4.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant )
  CALL OK( obj .EQ. ans, "constant:" )
```

!!! note "space"

```fortran
  obj = QuadratureVariable( &
      & arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableSpace ) ** 2
  ans = QuadratureVariable( &
      & (arange(1.0_DFP, 3.0_DFP))**2, &
      & typeFEVariableScalar,    &
      & typeFEVariableSpace )
  CALL OK( obj .EQ. ans, "space:" )
```

!!! note "time"

```fortran
  obj = QuadratureVariable( &
      & arange(0.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableTime ) ** 2
  ans = QuadratureVariable( &
      & (arange(0.0_DFP, 3.0_DFP))**2, &
      & typeFEVariableScalar,    &
      & typeFEVariableTime )
  CALL OK( obj .EQ. ans, "time:" )
```

!!! note "spacetime"

```fortran
  obj = QuadratureVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar, &
      & typeFEVariableSpaceTime ) **2
  ans = QuadratureVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP)**2, [3,2]), &
      & typeFEVariableScalar,    &
      & typeFEVariableSpaceTime )
  CALL OK( obj .EQ. ans, "spacetime" )
```

```fortran
END PROGRAM main
```
