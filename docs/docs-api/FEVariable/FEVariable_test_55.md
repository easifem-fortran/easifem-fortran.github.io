---
title: FEVariable example 55
author: Vikas Sharma, Ph. D.
date: 04 Jan 2022
update: 04 Jan 2022
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/POWER
---

# FEVariable example 55

!!! note ""
    This example tests POWER `(**)` operator. Matrix, Nodal

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
        & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant ) ** 2
  ans = NodalVariable( &
        & reshape(arange(1.0_DFP, 6.0_DFP)**2, [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant )
  CALL OK( obj .eq. ans, 'constant' ) 
```

!!! note "space"

```fortran
  obj = nodalvariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace ) **2
  ans = nodalvariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp)**2, [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace )
  CALL OK( obj .eq. ans, 'space') 
```

!!! note "time"

```fortran
  obj = nodalvariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime ) **2
  ans = nodalvariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp)**2, [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime )
  CALL OK( obj .eq. ans, 'time') 
```

!!! note "spacetime"

```fortran
  obj = NodalVariable( &
        & reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime ) **2
  ans = NodalVariable( &
        & reshape(arange(1.0_DFP, 24.0_DFP) **2, [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime )
  CALL OK( obj .eq. ans, 'spacetime') 
```

```fortran
END PROGRAM main
```
