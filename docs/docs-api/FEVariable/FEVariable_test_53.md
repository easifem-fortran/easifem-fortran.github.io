---
title: FEVariable example 53
author: Vikas Sharma, Ph. D.
date: 04 Jan 2021
update: 04 Jan 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/POWER
---

# FEVariable example 53

!!! note ""
    This example tests POWER `(**)` operator. Vector, Nodal

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
      & arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant ) **2
  ans = NodalVariable( &
      & arange(1.0_DFP, 3.0_DFP)**2, &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL OK( obj .EQ. ans, "constant:" )
```

!!! note "space"

```fortran
  obj = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace )**2
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP)**2, [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace )
  CALL OK( obj .EQ. ans, "space:" )
```

!!! note "time"

```fortran
  obj = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ) **2
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 6.0_DFP)**2, [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime )
  CALL OK( obj .EQ. ans, "time:" )
```

!!! note "spacetime"

```fortran
  obj = NodalVariable( &
      & reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime ) **2
  ans = NodalVariable( &
      & reshape(arange(1.0_DFP, 12.0_DFP)**2, [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime )
  CALL OK( obj .EQ. ans, "spacetime:" )
```

```fortran
END PROGRAM main
```
