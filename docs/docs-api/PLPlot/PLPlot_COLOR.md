---
title: PLPlot Colors
---

# PLPlot Colors

Normally, color is used for all drivers and devices that support it within PLplot subject to the condition that the user has the option of globally turning off the color (and subsequently turning it on again if so desired) using [`plscolor`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscolor.html "plscolor: Used to globally turn color output on/off").

- The PLplot color model allows the user to set the current color from a wide range of colors using two distinct color maps. Color map0 (called cmap0 and discussed in [the section called “Color Map0”](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/color.html#color-map-0 "Color Map0")) has discrete colors arranged in no particular order with regard to color index and is most suited to coloring discrete elements of the plot. 
- Color map1 (called cmap1 and discussed in [the section called “Color Map1”](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/color.html#color-map-1 "Color Map1")) has colors which are a continuous function of color index and is most suited to coloring continuous elements of the plot. 
- The user can change the current color (as opposed to the background color which is a special case that is discussed in [the section called “Color Map0”](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/color.html#color-map-0 "Color Map0")) at any point in the PLplot commands that are used to create a given plot by selecting any of the colors from either cmap0 or cmap1 using calls to [`plcol0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plcol0.html "plcol0: Set color, cmap0") or [`plcol1`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plcol1.html "plcol1: Set color, cmap1"). 

> When the current color is changed all subsequent drawing actions will utilize that new color until it is changed again.

### Color Map0

- Color map0 is most suited to coloring discrete elements of the plot such as the background, axes, lines, and labels. 
- The cmap0 palette colors are stored using [RGBA](https://en.wikipedia.org/wiki/RGBA_color_space) (i.e., red, green, blue, and alpha transparency) components (although some drivers ignore the alpha transparency data and simply render opaque colors corresponding to the semitransparent ones). 
- In the discussion that follows all references to cmap0 API functions with a trailing "a" in their names (e.g., [`plscol0a`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0a.html "plscol0a: Set 8-bit RGB values and PLFLT alpha transparency value for given cmap0 color index")) refers to setting RGBA semitransparent colors while the equivalent function (e.g., [`plscol0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0.html "plscol0: Set 8-bit RGB values for given cmap0 color index")) without the trailing "a" in the name refers to setting RGB colors with an assumed opaque alpha transparency of 1.0.

Page 1 of [our standard example 02](http://plplot.org/examples.php?demo=02) illustrates the default 16 colors in the cmap0 palette. 

![http://plplot.org/examples-data/demo02/x02.01.png](http://plplot.org/examples-data/demo02/x02.01.png)

Here note that

- `plcol0(0)` is black
- `plcol0(1)` is red
- `plcol0(2)` is yellow
-  and so on...


![](http://plplot.org/examples-data/demo02/x02.02.png)


> The background color is a special case to be discussed below, and the current color of discrete elements of the plot other than the background may be specified by cmap0 index (or cmap1 index, see [the section called “Color Map1”](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/color.html#color-map-1 "Color Map1")). 

> The cmap0 index is 1 by default (and corresponds to opaque red for the default cmap0 palette), but during the course of plotting a page, the user can change that current color as often as desired using [`plcol0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plcol0.html "plcol0: Set color, cmap0") to select the desired cmap0 color index from the cmap0 color palette in existence at the time.

```fortran
plscol0 (	icol0 , r , g , b );
```

- icol0 (PLINT, input): Color index. Must be less than the maximum number of colors (which is set by default, by plscmap0n, or even by plscmap0).
- r (PLINT, input): Unsigned 8-bit integer (0-255) representing the degree of red in the color.
- g (PLINT, input): Unsigned 8-bit integer (0-255) representing the degree of green in the color.
- b (PLINT, input): Unsigned 8-bit integer (0-255) representing the degree of blue in the color.

Also see [PLSCMAP0n](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscmap0n.html)

- The advanced cmap0 use case includes a number of methods for changing the cmap0 color palette. It is possible to update one index of the cmap0 palette using [`plscol0a`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0a.html "plscol0a: Set 8-bit RGB values and PLFLT alpha transparency value for given cmap0 color index") or [`plscol0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0.html "plscol0: Set 8-bit RGB values for given cmap0 color index"), 
- define a complete cmap0 palette with an arbitrary number of colors using [`plscmap0a`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscmap0a.html "plscmap0a: Set cmap0 colors by 8-bit RGB values and PLFLT alpha transparency value") or [`plscmap0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscmap0.html "plscmap0: Set cmap0 colors by 8-bit RGB values"), 
- or read in a complete cmap0 palette from a special cmap0 palette file with the command-line `cmap0` parameter or by calling [`plspal0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plspal0.html "plspal0: Set the cmap0 palette using the specified cmap0*.pal format file"). 

- Standard examples [04](http://plplot.org/examples.php?demo=04), [19](http://plplot.org/examples.php?demo=19), [26](http://plplot.org/examples.php?demo=26), [30](http://plplot.org/examples.php?demo=30), [31](http://plplot.org/examples.php?demo=31), and [33](http://plplot.org/examples.php?demo=33) illustrate how to use [`plscol0a`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0a.html "plscol0a: Set 8-bit RGB values and PLFLT alpha transparency value for given cmap0 color index") and [`plscol0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0.html "plscol0: Set 8-bit RGB values for given cmap0 color index"). 
- Standard examples [02](http://plplot.org/examples.php?demo=02), [24](http://plplot.org/examples.php?demo=24), and [30](http://plplot.org/examples.php?demo=30) illustrate how to use [`plscmap0a`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscmap0a.html "plscmap0a: Set cmap0 colors by 8-bit RGB values and PLFLT alpha transparency value") and [`plscmap0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscmap0.html "plscmap0: Set cmap0 colors by 8-bit RGB values"). Although the user can define and use any cmap0 palette file they like, predefined cmap0 palette files are given in `data/cmap0*.pal` within the source tree and installed in `<install-prefix>/share/plplot5.15.0/cmap0*.pal` in the install tree. 
- By default the cmap0 palette is set using the predefined `cmap0_default.pal` file, but [our standard example 16](http://plplot.org/examples.php?demo=16) demonstrates use of a number of our other predefined cmap0 palette files in the various pages of that example. 
- Many of the above commands indirectly set the number of cmap0 colors, but it is also possible for the user to specify that number directly with the command-line `ncol0` parameter or by calling [`plscmap0n`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscmap0n.html "plscmap0n: Set number of colors in cmap0"). 
- For all methods of defining the cmap0 palette any number of colors are allowed in any order, but it is not guaranteed that the individual drivers will actually be able to use more than 16 colors (although most drivers do support more than 16 colors).

### Background color

The background color (which always corresponds to index 0 of the cmap0 palette) is a special case that must be discussed separately. 

The default cmap0 palette index 0 corresponds to opaque black so by default the background is that color. 

However, the user may set that background color to something else by using the command-line `bg` parameter, by calling [`plscolbga`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscolbga.html "plscolbga: Set the background color by 8-bit RGB value and PLFLT alpha transparency value.") or [`plscolbg`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscolbg.html "plscolbg: Set the background color by 8-bit RGB value"), or by calling [`plscol0a`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0a.html "plscol0a: Set 8-bit RGB values and PLFLT alpha transparency value for given cmap0 color index") or [`plscol0`](http://plplot.sourceforge.net/docbook-manual/plplot-html-5.15.0/plscol0.html "plscol0: Set 8-bit RGB values for given cmap0 color index") with a 0 index. 

In addition, the background color is implicitly set when the whole cmap0 color palette (including index 0) is changed with one of the methods above. 

However, since the background is painted at the start of each page any of these methods of changing the background color must be done _before_ that page start. 

Note that although our long-term goal is for each device driver that honors semitransparent colors will also honor semitransparent background requests from users the current status is only a few drivers (e.g., the svg device driver) do that and the rest fall back to replacing the requested semitransparent background with the equivalent opaque background.