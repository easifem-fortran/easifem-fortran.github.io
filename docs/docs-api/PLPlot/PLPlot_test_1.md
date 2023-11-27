---
title: PLPlot example 1
---

# PLPlot example 1

!!! note ""
    This example shows how to plot a graph by using plplot.

## Modules and classes

## Usage

IMPORT modules and declare variables

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  INTEGER, PARAMETER :: NSIZE = 101
  REAL( DFP ), DIMENSION(NSIZE) :: x, y
  REAL( DFP ) :: xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 100.0
  INTEGER :: ierr
```

Prepare data to be plotted.

```fortran
  x = arange(0, NSIZE-1) / REAL(NSIZE-1, DFP)
  y = ymax * x**2
```

Parse and process command line arguments

```fortran
  ierr = PLPARSEOPTS( PL_PARSE_FULL )
  IF(ierr .NE. 0) THEN
    CALL Display( "plparseopts error" )
    STOP
  END IF
```

Initiate the PLPLOT enviroment

```fortran
  CALL PLINIT
```

Create a labelled box to hold the plot. We have specified the box dimension

```fortran
  CALL PLENV( xmin, xmax, ymin, ymax, 0, 0 )
  CALL PLLAB( "x", "y=100 x#u2#d", "Simple PLplot demo of a 2D line plot" )
```

Plot the data that was prepared above.

```fortran
  CALL PLLINE( x, y )
```

Close PLplot library

```fortran
  CALL PLEND
END PROGRAM main
```

