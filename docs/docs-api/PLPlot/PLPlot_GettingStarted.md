---
title: PLPlot Getting Started
---

# PLPlot Getting Started

## A Simple Example

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  INTEGER, PARAMETER :: NSIZE = 101
  REAL( DFP ), DIMENSION(NSIZE) :: x, y
  REAL( DFP ) :: xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 100.0
  INTEGER :: ierr
  ! Prepare data to be plotted.
  x = arange(0, NSIZE-1) / REAL(NSIZE-1, DFP)
  y = ymax * x**2
  ! Parse and process command line arguments
  ierr = PLPARSEOPTS( PL_PARSE_FULL )
  IF(ierr .NE. 0) THEN
    CALL Display( "plparseopts error" )
    STOP
  END IF
  !> Initiate the PLPLOT enviroment
  CALL PLINIT
  ! Create a labelled box to hold the plot.
  ! we have specified the box dimension
  CALL PLENV( xmin, xmax, ymin, ymax, 0, 0 )
  CALL PLLAB( "x", "y=100 x#u2#d", "Simple PLplot demo of a 2D line plot" )
  ! Plot the data that was prepared above.
  CALL PLLINE( x, y )
  ! Close PLplot library
  CALL PLEND
END PROGRAM main
```

## [PLINIT](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/initializing.html)

This routine should be called before doing anything with PLPLOT. It is the main initialization routine for PLPLOT.

There are several routines affecting the initialization that must be called _before_ [`plinit`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plinit.html "plinit: Initialize PLplot"), if they are used. The function [`plsdev`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsdev.html "plsdev: Set the device (keyword) name") allows you to set the device explicitly. The function [`plsetopt`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsetopt.html "plsetopt: Set any command-line option") allows you to set any command-line option internally in your code. The function [`plssub`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plssub.html "plssub: Set the number of subpages in x and y") may be called to divide the output device plotting area into several subpages of equal size, each of which can be used separately.

# [PLEND](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/finishing.html)
 Always call [`plend`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plend.html "plend: End plotting session") to close any output plot files and to free up resources.

## [PLSDEV](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsdev.html)
The output device can be a terminal, disk file, window system, pipe, or socket.  If the output device has not already been specified when [`plinit`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plinit.html "plinit: Initialize PLplot") is called, the output device will be taken from the value of the `PLPLOT_DEV` environment variable. If this variable is not set (or is empty), a list of valid output devices is given and the user is prompted for a choice.

> The device can be specified BEFORE calling [`plinit`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plinit.html "plinit: Initialize PLplot") by:

```fortran
CALL PLSDEV(STRING::devname)
```

> An ASCII character string containing the device name keyword of the required output device. If _`devname`_ is NULL or if the first character of the string is a ``?'', the normal (prompted) start up is used.

Following is the list of device name.

```txt
  Plotting Options:
	  < 1> xwin       X-Window (Xlib)
	  < 2> tk         Tcl/TK Window
	  < 3> ps         PostScript File (monochrome)
	  < 4> psc        PostScript File (color)
	  < 5> xfig       Fig file
	  < 6> null       Null device
	  < 7> ntk        New tk driver
	  < 8> tkwin      New tk driver
	  < 9> mem        User-supplied memory device
	  <10> wxwidgets  wxWidgets Driver
	  <11> psttf      PostScript File (monochrome)
	  <12> psttfc     PostScript File (color)
	  <13> svg        Scalable Vector Graphics (SVG 1.1)
	  <14> pdf        Portable Document Format PDF
	  <15> bmpqt      Qt Windows bitmap driver
	  <16> jpgqt      Qt jpg driver
	  <17> pngqt      Qt png driver
	  <18> ppmqt      Qt ppm driver
	  <19> tiffqt     Qt tiff driver
	  <20> svgqt      Qt SVG driver
	  <21> qtwidget   Qt Widget
	  <22> epsqt      Qt EPS driver
	  <23> pdfqt      Qt PDF driver
	  <24> extqt      External Qt driver
	  <25> memqt      Memory Qt driver
	  <26> xcairo     Cairo X Windows Driver
	  <27> pdfcairo   Cairo PDF Driver
	  <28> pscairo    Cairo PS Driver
	  <29> epscairo   Cairo EPS Driver
	  <30> svgcairo   Cairo SVG Driver
	  <31> pngcairo   Cairo PNG Driver
	  <32> memcairo   Cairo Memory Driver
	  <33> extcairo   Cairo External Context Driver
```

I prefer one of the following

```fortran
CALL PLSDEV("qtwidget")
CALL PLSDEV("xwin")
CALL PLSDEV("wxwidgets")
```

## [PLENV](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html)

The function [`plenv`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html "plenv: Set up standard window and draw box") is used to define the scales and axes for simple graphs. [`plenv`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html "plenv: Set up standard window and draw box") starts a new picture on the next subpage (or a new page if necessary), and defines the ranges of the variables required. The routine will also draw a box, axes, and numeric labels if requested.

```fortran
plenv (xmin, xmax, ymin, ymax, just, axis)
```

## [PLBOX](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plbox.html)

```fortran
plbox (xopt, xtick, nxsub, yopt, ytick, nysub)
```

## [PLLAB](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/labelling.html)

The function [`pllab`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/pllab.html "pllab: Simple routine to write labels") may be called after [`plenv`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plenv.html "plenv: Set up standard window and draw box") to write labels on the x and y axes, and at the top of the graph.  

## [PLPOIN](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plpoin.html)

```fortran
CALL PLPOIN(REAL::X(:),REAL::Y(:),INT::CODE)
```

 > If `0 < code < 32`, then Hershey symbols is plotted. If `32 <= code <= 127` the corresponding printable ASCII character is plotted.

![](http://plplot.sourceforge.net/examples-data/demo06/x06.01.png)

## [PLSTRING](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plstring.html)

```fortran
CALL PLSTRING(REAL::X(:),REAL::Y(:),STRING::STRING)
```

 Plot a glyph at the specified points. The glyph is specified with a PLplot user string.  [`plstring`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plstring.html "plstring: Plot a glyph at the specified points") is now the preferred way of drawing points for unicode-aware devices because it gives users full access via a UTF-8 string to any unicode glyph they prefer for the symbol that is is available via system fonts.

See the following  [example 7](http://plplot.org/examples.php?demo=07)

 ## [PLSYM](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plsym.html)

 TO BE ADDED LATER.

## [PLLINE](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plline.html)

[`plline`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plline.html "plline: Draw a line") draws a line or curve. The curve consists of `n-1` line segments joining the `n` points in the input arrays. For single line segments, [`pljoin`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/pljoin.html "pljoin: Draw a line between two points") is used to join two points.

 ## COLORS

 - PLCOL0
 - PLSCOL0
 - PLCOLBG

 ![](http://plplot.sourceforge.net/examples-data/demo02/x02.01.png)

 Following example will print black on white

 ```fortran
 PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  INTEGER, PARAMETER :: NSIZE = 101
  REAL( DFP ), DIMENSION(NSIZE) :: x, y
  REAL( DFP ) :: xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 100.0
  INTEGER :: ierr
  ! Prepare data to be plotted.
  x = arange(0, NSIZE-1) / REAL(NSIZE-1, DFP)
  y = ymax * x**2
  ! Parse and process command line arguments
  ierr = PLPARSEOPTS( PL_PARSE_FULL )
  IF(ierr .NE. 0) THEN
    CALL Display( "plparseopts error" )
    STOP
  END IF
  !> Initiate the PLPLOT enviroment
  CALL PLSDEV("qtwidget")
  CALL PLSCOLBG(255,255,255)
  CALL PLINIT
  CALL PLSCOL0(0, 0,0,0)
  CALL PLCOL0(0)
  ! COLOR
  ! Create a labelled box to hold the plot.
  ! we have specified the box dimension
  CALL PLENV( xmin, xmax, ymin, ymax, 0, 0 )
  CALL PLLAB( "x", "y=100 x#u2#d", "Simple PLplot demo of a 2D line plot" )
  ! Plot the data that was prepared above.
  CALL PLPOIN( x, y, 4 )
  ! Close PLplot library
  CALL PLEND
END PROGRAM main
 ```
