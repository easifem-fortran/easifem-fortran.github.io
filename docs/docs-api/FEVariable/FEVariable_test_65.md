---
title: FEVariable example 65
author: Vikas Sharma, Ph. D.
date: 04 Jan 2022
update: 04 Jan 2022
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/ABS
---

# FEVariable example 65

!!! note ""
    This example tests `ABS` operator. Matrix, Nodal

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
        & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant ))
  ans = NodalVariable( &
        & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant )
  CALL OK( obj .eq. ans, 'constant' )
```

!!! note "space"

```fortran
  obj = ABS(nodalvariable( &
        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace ))
  ans = nodalvariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace )
  CALL OK( obj .eq. ans, 'space')
```

!!! note "time"

```fortran
  obj = ABS(nodalvariable( &
        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime ))
  ans = nodalvariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime )
  CALL OK( obj .eq. ans, 'time')
```

!!! note "spacetime"

```fortran
  obj = ABS(NodalVariable( &
        & reshape(-arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime ))
  ans = NodalVariable( &
        & reshape(arange(1.0_DFP, 24.0_DFP) , [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime )
  CALL OK( obj .eq. ans, 'spacetime')
```

```fortran
END PROGRAM main
```
