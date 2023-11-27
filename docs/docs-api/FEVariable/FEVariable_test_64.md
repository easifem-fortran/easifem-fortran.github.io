---
title: FEVariable example 64
author: Vikas Sharma, Ph. D.
date: 04 Jan 2021
update: 04 Jan 2021
tags:
  - FEVariable/QuadratureVariable
  - FEVariable/Display
  - FEVariable/ABS
---

# FEVariable example 64

!!! note ""
    This example tests `ABS` operator. Vector, Quadrature

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
  obj = ABS(QuadratureVariable( &
      & -arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant ))
  ans = QuadratureVariable( &
      & arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL OK( obj .EQ. ans, "constant:" )
```

!!! note "space"

```fortran
  obj = ABS(QuadratureVariable( &
      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace ))
  ans = QuadratureVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace )
  CALL OK( obj .EQ. ans, "space:" )
```

!!! note "time"

```fortran
  obj = ABS(QuadratureVariable( &
      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ))
  ans = QuadratureVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime )
  CALL OK( obj .EQ. ans, "time:" )
```

!!! note "spacetime"

```fortran
  obj = ABS(QuadratureVariable( &
      & reshape(-arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime ))
  ans = QuadratureVariable( &
      & reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime )
  CALL OK( obj .EQ. ans, "spacetime:" )
```

```fortran
END PROGRAM main
```
