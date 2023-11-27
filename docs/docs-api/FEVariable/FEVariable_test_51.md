---
title: FEVariable example 51
author: Vikas Sharma, Ph. D.
date: 04 Jan 2022
update: 04 Jan 2022
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/POWER
---

# FEVariable example 51

!!! note ""
    This example tests POWER `(**)` operator. Scalar, Nodal Variable.

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
  obj = NodalVariable( &
      & 2.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant ) ** 2
  ans = NodalVariable( 4.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant )
  CALL OK( obj .EQ. ans, "constant:" )
```

!!! note "space"

```fortran
  obj = NodalVariable( &
      & arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableSpace ) ** 2
  ans = NodalVariable( &
      & (arange(1.0_DFP, 3.0_DFP))**2, &
      & typeFEVariableScalar,    &
      & typeFEVariableSpace )
  CALL OK( obj .EQ. ans, "space:" )
```

!!! note "time"

```fortran
  obj = NodalVariable( &
      & arange(0.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableTime ) ** 2
  ans = NodalVariable( &
      & (arange(0.0_DFP, 3.0_DFP))**2, &
      & typeFEVariableScalar,    &
      & typeFEVariableTime )
  CALL OK( obj .EQ. ans, "time:" )
```

!!! note "spacetime"

```fortran
  obj = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar, &
      & typeFEVariableSpaceTime ) **2
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP)**2, [3,2]), &
      & typeFEVariableScalar,    &
      & typeFEVariableSpaceTime )
  CALL OK( obj .EQ. ans, "spacetime" )
```

```fortran
END PROGRAM main
```
