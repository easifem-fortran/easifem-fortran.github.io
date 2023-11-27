---
title: VTKPlot example 1
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKPlot/Plot
---

# VTKPlot example 1

This example shows how to use plot function from [[VTKPlot_]] class. We plot a cartesian grid.

## Use association

- [[VTKPlot_]]

## Usage

```fortran
PROGRAM MAIN
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( VTKPlot_ ) :: obj
  REAL( DFP ), ALLOCATABLE :: x( : ), y( : )
```

!!! note ""
    Plotting a two dimensional structured grid.

```fortran
  x = linspace( 0.0_DFP, 1.0_DFP, 5)
  y = linspace( 0.0_DFP, 1.0_DFP, 5)
  CALL obj%initiate( )
  CALL obj%plot( x, y, "./test_1.vts")
  CALL obj%deallocate()
```

```fortran
end program
```