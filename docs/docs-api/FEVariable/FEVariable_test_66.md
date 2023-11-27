---
title: FEVariable example 66
author: Vikas Sharma, Ph. D.
date: 04 Jan 2022
update: 04 Jan 2022
tags:
  - FEVariable/QuadratureVariable
  - FEVariable/Display
  - FEVariable/ABS
---

# FEVariable example 66

!!! note ""
    This example tests `ABS` operator. Matrix, Quadrature

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
        & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant ))
  ans = QuadratureVariable( &
        & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant )
  CALL OK( obj .eq. ans, 'constant' )
```

!!! note "space"

```fortran
  obj = ABS(Quadraturevariable( &
        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace ))
  ans = Quadraturevariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace )
  CALL OK( obj .eq. ans, 'space')
```

!!! note "time"

```fortran
  obj = ABS(Quadraturevariable( &
        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime ))
  ans = Quadraturevariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime )
  CALL OK( obj .eq. ans, 'time')
```

!!! note "spacetime"

```fortran
  obj = ABS(QuadratureVariable( &
        & reshape(-arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime ))
  ans = QuadratureVariable( &
        & reshape(arange(1.0_DFP, 24.0_DFP) , [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime )
  CALL OK( obj .eq. ans, 'spacetime')
```

```fortran
END PROGRAM main
```
