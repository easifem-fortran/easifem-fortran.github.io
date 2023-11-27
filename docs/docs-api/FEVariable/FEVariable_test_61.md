---
title: FEVariable example 61
author: Vikas Sharma, Ph. D.
date: 04 Jan 2022
update: 04 Jan 2022
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/ABS
---

# FEVariable example 61

!!! note ""
    This example tests `ABS` operator. Scalar, Nodal Variable.

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
  obj = ABS(NodalVariable( &
      & -2.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant ))
  ans = NodalVariable( 2.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant )
  CALL OK( obj .EQ. ans, "constant:" )
```

!!! note "space"

```fortran
  obj = ABS(NodalVariable( &
      & -arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableSpace ) )
  ans = NodalVariable( &
      & arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar,    &
      & typeFEVariableSpace )
  CALL OK( obj .EQ. ans, "space:" )
```

!!! note "time"

```fortran
  obj = ABS(NodalVariable( &
      & -arange(0.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableTime ))
  ans = NodalVariable( &
      & arange(0.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar,    &
      & typeFEVariableTime )
  CALL OK( obj .EQ. ans, "time:" )
```

!!! note "spacetime"

```fortran
  obj = ABS(NodalVariable( &
      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar, &
      & typeFEVariableSpaceTime ))
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar,    &
      & typeFEVariableSpaceTime )
  CALL OK( obj .EQ. ans, "spacetime" )
```

```fortran
END PROGRAM main
```
