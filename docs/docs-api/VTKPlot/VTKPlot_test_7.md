---
title: VTKPlot example 7
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKPlot/Plot
---

# VTKPlot example 7

This example shows how to use plot function from [[VTKPlot_]] class. We plot a 3D cartesian grid. The cartesian grid is given by the mesh grid.

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
    ans = x(1)*(x(1)-1) + x(2)*(x(2)-1) + x(3)*(x(3)-1)
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
  REAL( DFP ), ALLOCATABLE :: x( :, :, : ), y( :, :, : ), z( :, :, : )
  PROCEDURE(f), POINTER :: func => NULL()
```

!!! note ""
    Plotting a three dimensional structured grid.

```fortran
  CALL MeshGrid( x=x, y = y, z = z, &
    & xgv=linspace( 0.0_DFP, 1.0_DFP, 50), &
    & ygv=linspace( 0.0_DFP, 1.0_DFP, 50), &
    & zgv=linspace( 0.0_DFP, 1.0_DFP, 50) &
    & )
```

```fortran
  func => f
  CALL obj%initiate( )
  CALL obj%plot( x, y, z, func, "./test_7.vts")
  CALL obj%deallocate()
  func => NULL()
```

```fortran
end program
```