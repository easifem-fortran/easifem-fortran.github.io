---
title: VTKPlot example 3
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKPlot/Plot
---

# VTKPlot example 3

This example shows how to use plot function from [[VTKPlot_]] class. We plot a 3D cartesian grid using x, y, and z.

## Use association

- [[VTKPlot_]]

## Usage

```fortran
PROGRAM MAIN
  USE easifemBase
  USE easifemClasses
  USE func_module
  IMPLICIT NONE
  TYPE( VTKPlot_ ) :: obj
  REAL( DFP ), ALLOCATABLE :: x( : ), y( : ), z( : )
```

!!! note ""
    Plotting a two dimensional structured grid.

```fortran
  x = linspace( 0.0_DFP, 10.0_DFP, 11)
  y = linspace( 0.0_DFP, 5.0_DFP, 6)
  z = linspace( 0.0_DFP, 5.0_DFP, 6)
  CALL obj%initiate( )
  CALL obj%plot( x, y, z, "./test_3.vts")
  CALL obj%deallocate()
```

```fortran
end program
```