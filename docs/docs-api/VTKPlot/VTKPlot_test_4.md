---
title: VTKPlot example 4
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKPlot/Plot
---

# VTKPlot example 4

This example shows how to use plot function from [[VTKPlot_]] class. We plot a cartesian grid. We use x and y created by meshgrid.

## Use association

- [[VTKPlot_]]

## Usage

```fortran
PROGRAM MAIN
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( VTKPlot_ ) :: obj
  REAL( DFP ), ALLOCATABLE :: x( :, : ), y( :, : )
```

!!! note ""
    Plotting a two dimensional structured grid.

```fortran
  CALL MeshGrid( x=x, y = y, &
    & xgv=linspace( 0.0_DFP, 1.0_DFP, 5), &
    & ygv=linspace( 0.0_DFP, 1.0_DFP, 5) &
    & )
  CALL obj%initiate( )
  CALL obj%plot( x, y, "./test_4.vts")
  CALL obj%deallocate()
```

```fortran
end program
```