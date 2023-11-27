---
title: VTKPlot example 5
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKPlot/Plot
---

# VTKPlot example 5

This example shows how to use plot function from [[VTKPlot_]] class. We plot a cartesian grid and function over it. The cartesian grid is given by the mesh grid.

## Use association

- [[VTKPlot_]]

## Usage

```fortran
MODULE func_module
  USE easifemBase
  CONTAINS
  PURE FUNCTION f( x ) RESULT( ans )
    REAL(DFP), INTENT( IN ) :: x( : )
    REAL(DFP) :: ans
    ans = x(1)*(x(1)-1) + x(2)*(x(2)-1)
  END FUNCTION
END MODULE func_module
```

```fortran
PROGRAM MAIN
  USE easifemBase
  USE easifemClasses
  USE func_module
  IMPLICIT NONE
  TYPE( VTKPlot_ ) :: obj
  REAL( DFP ), ALLOCATABLE :: x( :, : ), y( :, : )
  PROCEDURE(f), POINTER :: func => NULL()
```

!!! note ""
    Plotting a two dimensional structured grid.

```fortran
  CALL MeshGrid( x=x, y = y, &
    & xgv=linspace( 0.0_DFP, 1.0_DFP, 5), &
    & ygv=linspace( 0.0_DFP, 1.0_DFP, 5) &
    & )
  CALL obj%initiate( )
  func => f
  CALL obj%plot( x, y, func, "./test_5.vts")
  CALL obj%deallocate()
  func => NULL()
```

```fortran
end program
```