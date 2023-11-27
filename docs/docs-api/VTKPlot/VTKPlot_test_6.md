---
title: VTKPlot example 6
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKPlot/Plot
---

# VTKPlot example 6

This example shows how to use plot function from [[VTKPlot_]] class. We plot a 3D cartesian grid. The cartesian grid is given by the mesh grid.

## Use association

- [[VTKPlot_]]

## Usage

```fortran
PROGRAM MAIN
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( VTKPlot_ ) :: obj
  REAL( DFP ), ALLOCATABLE :: x( :, :, : ), y( :, :, : ), z( :, :, : )
```

!!! note ""
    Plotting a two dimensional structured grid.

```fortran
  CALL MeshGrid( x=x, y = y, z = z, &
    & xgv=linspace( 0.0_DFP, 1.0_DFP, 100), &
    & ygv=linspace( 0.0_DFP, 1.0_DFP, 100), &
    & zgv=[1.0_DFP] &
    & )
```

!!! note ""
    Now we replace z by f(x,y). In this way we get a 3D surface representing
    f(x,y).

```fortran
  z = x*(x-1) + y*(y-1)
```

```fortran
  CALL obj%initiate( )
  CALL obj%plot( x, y, z, "./test_6.vts")
  CALL obj%deallocate()
```

```fortran
end program
```