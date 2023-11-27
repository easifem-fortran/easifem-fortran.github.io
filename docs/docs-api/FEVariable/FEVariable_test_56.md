---
title: FEVariable example 56
author: Vikas Sharma, Ph. D.
date: 04 Jan 2022
update: 04 Jan 2022
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
  - FEVariable/POWER
---

# FEVariable example 56

!!! note ""
    This example tests POWER `(**)` operator. Matrix, Quadrature

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
        & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant ) ** 2
  ans = QuadratureVariable( &
        & reshape(arange(1.0_DFP, 6.0_DFP)**2, [3,2]), &
        & typeFEVariableMatrix,    &
        & typeFEVariableConstant )
  CALL OK( obj .eq. ans, 'constant' ) 
```

!!! note "space"

```fortran
  obj = Quadraturevariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace ) **2
  ans = Quadraturevariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp)**2, [3,2,2]), &
        & typefevariablematrix, &
        & typefevariablespace )
  CALL OK( obj .eq. ans, 'space') 
```

!!! note "time"

```fortran
  obj = Quadraturevariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime ) **2
  ans = Quadraturevariable( &
        & reshape(arange(1.0_dfp, 12.0_dfp)**2, [3,2,2]), &
        & typefevariablematrix, &
        & typefevariabletime )
  CALL OK( obj .eq. ans, 'time') 
```

!!! note "spacetime"

```fortran
  obj = QuadratureVariable( &
        & reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime ) **2
  ans = QuadratureVariable( &
        & reshape(arange(1.0_DFP, 24.0_DFP) **2, [3,2,2,2]), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpaceTime )
  CALL OK( obj .eq. ans, 'spacetime') 
```

```fortran
END PROGRAM main
```
