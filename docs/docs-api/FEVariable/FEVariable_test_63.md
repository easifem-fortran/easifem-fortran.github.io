---
title: FEVariable example 63
author: Vikas Sharma, Ph. D.
date: 04 Jan 2021
update: 04 Jan 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/ABS
---

# FEVariable example 63

!!! note ""
    This example tests `ABS` operator. Vector, Nodal

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
      & -arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant ))
  ans = NodalVariable( &
      & arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL OK( obj .EQ. ans, "constant:" )
```

!!! note "space"

```fortran
  obj = ABS(NodalVariable( &
      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace ))
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace )
  CALL OK( obj .EQ. ans, "space:" )
```

!!! note "time"

```fortran
  obj = ABS(NodalVariable( &
      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ))
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime )
  CALL OK( obj .EQ. ans, "time:" )
```

!!! note "spacetime"

```fortran
  obj = ABS(NodalVariable( &
      & reshape(-arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime ))
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime )
  CALL OK( obj .EQ. ans, "spacetime:" )
```

```fortran
END PROGRAM main
```
