---
author: Vikas Sharma, Ph.D.
date: 14 Aug 2022
tags:
  - PLPlot
---

# PLPlot example 3

This example shows how to plot a graph by using [[PLPlot_]].

## Modules and classes

- [[PLPlot_]]

## Usage

IMPORT modules and declare variables

```fortran
PROGRAM main
  use easifemBase
  use easifemClasses
  implicit none
  real( DFP ), allocatable :: x( : ), y( : )
  type( PLPlot_ ) :: obj
```

!!! note ""
    Prepare data to be plotted.

```fortran
  x = linspace( 0.0_DFP, 1.0_DFP, 101 )
  y = x**2
```

!!! note "svg"
    LinePlot method

```fortran
  CALL obj%LinePlot( x=x, y=y, filename="test_3.svg", &
    &  )
```

```fortran
END PROGRAM main
```
