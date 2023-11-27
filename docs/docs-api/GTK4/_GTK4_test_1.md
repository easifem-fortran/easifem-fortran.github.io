# Introduction

This example is taken from [My first gtk-fortran application](https://github.com/vmagnin/gtk-fortran/wiki/Tutorial-1).

[TOC]

## Objectives

At the end of this tutorial, you will know how to write a GTK application with a window, some widgets and how to draw a bitmap image, using around 110 lines of Fortran code.

!!! note This tutorial is for GTK 4.

## Compilation instruction

```bash
gfortran -Wall -Wextra -std=f2008 -pedantic -g my_first_gtk_app7.f90 $(pkg-config --cflags --libs gtk-4-fortran)
```

## Create math module

```fortran
module math
  use, intrinsic :: iso_c_binding, only: dp=>c_double
  implicit none

  contains
```

### iterate

The objective of the next steps is to study the chaotic behaviour of the [Logistic Map](https://en.wikipedia.org/wiki/Logistic_map), a seemingly simple recurrence relation. We add in our program the following module, with a function that will compute a great number of terms of that sequence, starting from x0 between 0 and 1 and with r in the [0, 4] range:

```fortran
  pure real(dp) function iterate(x0, r) result(x)
    real(dp), intent(in) :: x0, r
    integer  :: i

    x = x0

    do i = 0, 20000
      x = r * x * (1_dp - x)
    end do

  end function iterate
```

!!! note "Note that we use a real type interoperable with the C double type."

```fortran
end module math
```

## Create handlers module

A module named `handlers` which will contain the functions that will handle the events and global variables like pointers toward widgets.

!!! note
You should always add to your use statements the only: option and list only what you need, because the gtk and g modules contain thousands of functions. The compilation will be 10 to 20 times faster if you follow that advice!

```fortran
module handlers
  use, intrinsic :: iso_c_binding
  !!
```

### from `gtk` import

```fortran
  use gtk, only: &
    & gtk_application_new, &
    & G_APPLICATION_FLAGS_NONE, &
    & gtk_application_window_new, &
    & gtk_widget_show, &
    & gtk_window_set_child, &
    & gtk_box_append, &
    & gtk_window_set_title, &
    & g_signal_connect, &
    & gtk_box_new, &
    & gtk_button_new_with_label, &
    & GTK_ORIENTATION_VERTICAL, &
    & FALSE, &
    & gtk_label_new, &
    & gtk_spin_button_new, &
    & gtk_adjustment_new, &
    & gtk_spin_button_get_value, &
    & gtk_drawing_area_new, &
    & gtk_widget_queue_draw, &
    & GDK_COLORSPACE_RGB, &
    & gtk_widget_set_vexpand, &
    & TRUE, &
    & gtk_widget_set_size_request, &
    & gtk_drawing_area_set_draw_func
```

### from `g` import

```fortran
  use g, only: g_application_run, g_object_unref
```

### from `cairo` import

```fortran
  use cairo, only: cairo_paint
```

### from `gdk` import

```fortran
  use gdk, only: gdk_cairo_set_source_pixbuf
```

```fortran
  use gdk_pixbuf, only: &
    & gdk_pixbuf_new, &
    & gdk_pixbuf_get_rowstride, &
    & gdk_pixbuf_get_pixels, &
    & gdk_pixbuf_get_n_channels
```

### use other modules

```fortran
  use math
```

### module variables

```fortran
  implicit none
  type(c_ptr) :: r_spin_button, my_drawing_area, my_pixbuf
  integer(kind=c_int) :: nch, rowstride, width, height, pixwidth, pixheight
  character(kind=c_char), dimension(:), pointer :: pixel
  contains
```

### my_button_clicked

The algorithm to draw the bifurcation diagram of the logistic map, also called the Feigenbaum fractal, being short, we will put it directly into the `my_button_clicked` callback function:

```fortran
  subroutine my_button_clicked(widget, gdata) bind(c)
    type(c_ptr), value, intent(in) :: widget, gdata
    real(dp) :: r, x0
    real(dp) :: rmin, rmax
    integer :: p, n, xp, yp, xpmax, ypmax
```

We choose randomly x0, get r from the `GtkSpinButton` and print the results in the terminal:

```fortran
    call random_seed()
    rmin = gtk_spin_button_get_value(r_spin_button)
    rmax = 4_dp
    xpmax = pixwidth-1
    ypmax = pixheight-1
    pixel = char(0)

    do xp = 0, xpmax
      r = rmin + xp * (rmax - rmin) / xpmax

      do n = 1, 100
        call random_number(x0)
        yp = ypmax - nint(iterate(x0, r) * ypmax)

        p = 1 + xp*nch + yp*rowstride
        pixel(p)   = char(255)
        pixel(p+1) = char(150)
        pixel(p+2) = char(120)
      end do
    end do

    call gtk_widget_queue_draw(my_drawing_area)
```

The `GtkSpinButton` will now correspond to the minimal `r` value, the maximum being 4. For each `r` value, we compute the iterations starting from 100 `x0` random values. The position of the (xp,yp) pixel in the one dimensional array is given by `p = 1 + xp*nch + yp*rowstride` (in Fortran arrays, indexing starts at 1). The red, green, blue values are 255, 150, 120.

!!! note ""
Note also that the graphical coordinate system has the origin (0,0) at the top left and the ordinate axis is oriented downward.

The `gtk_widget_queue_draw()` function tells the main loop that the area needs redrawing. The main loop will manage it as soon as possible.

```fortran
  end subroutine my_button_clicked
```

### draw

```fortran
  subroutine draw(widget, my_cairo_context, width, height, gdata) bind(c)
    type(c_ptr), value, intent(in)    :: widget, my_cairo_context, gdata
    integer(c_int), value, intent(in) :: width, height

    call gdk_cairo_set_source_pixbuf(my_cairo_context, my_pixbuf, 0d0, 0d0)
    call cairo_paint(my_cairo_context)
  end subroutine draw
```

The drawing will be made via the Cairo library. Our pixbuf is placed at the top left (0,0) of what is called a Cairo context, which is then painted by `cairo_paint`.

### activate

This subroutine `activate()` will be called by the GTK main loop when we launch our application.

```fortran
  subroutine activate(app, gdata) bind(c)
    type(c_ptr), value, intent(in) :: app, gdata
```

The input arguments are two C pointers:

- `app` is our application
- `gdata` towards data defined in the [`g_signal_connect()`](#g_signal_connect) function (i.e. `c_null_ptr` in our case).

!!! note
Note firstly the `bind(c)` statement (this Fortran subroutine will be called by a C function from the GTK main loop) and secondly that the C pointers are passed by value (memory addresses).

```fortran
    type(c_ptr) :: window
    type(c_ptr) :: box, my_button
    type(c_ptr) :: label_r
```

### `gtk_application_window_new`

Our first widget in our app is a window, which is declared by using a C pointer toward that object. We create the window by calling `gtk_application_window_new(app)`.

!!! warning Don't forget to call the `gtk_widget_show()` in the end, if you want your window to appear on screen

!!! info ""
In GTK 4, the widgets inside a window are all shown by default. It was the contrary in GTK 3, where the `gtk_widget_show_all()` function should be used instead.

!!! warning ""
Don't forget to add used function names in the `use gtk, only:` statement of the module.

```fortran
    window = gtk_application_window_new(app)
```

Now we add title to our window.

```fortran
    call gtk_window_set_title( &
      & window, &
      & "Hello world!"//c_null_char)
```

### `gtk_box_new`

At this point we have created a window. We need to add more information (i.e., widgets) to window (which is also a widget).

To place our widgets in the window, we need a widget that will manage the layout, for example a `GtkBox` where the widgets will be arranged into column (vertically) or row (horizontally).

Here, we have chosen to arrange them vertically and separated by 10 pixels.

Our box is then added to the parent window as a "child". A `GtkBox` is indeed what it called a container.

```fortran
    box = gtk_box_new(GTK_ORIENTATION_VERTICAL, 10_c_int)
    call gtk_window_set_child(window, box)
```

!!! note `label_r` is `C` pointer.

Now, we define our button and add it to the box: the button is therefore contained in a box which is in the window. We connect that button to the [🔘 `my_button_clicked`](#my_button_clicked) subroutine that we want to be called when it is clicked:

### `gtk_spin_button_new`

```fortran
    label_r = gtk_label_new("r parameter"//c_null_char)
    call gtk_box_append(box, label_r)
    r_spin_button = gtk_spin_button_new( &
      & gtk_adjustment_new(3._dp, 0._dp, 4._dp, &
      & 0.1_dp, 0._dp, 0._dp), &
      & 0.0_dp, 3_c_int)
    !!
    call gtk_box_append(box, r_spin_button)
```

!!! note "Spint button"
[GtkSpinButton](https://docs.gtk.org/gtk4/class.SpinButton.html) as an entry field. The last argument of the spin button is the number of decimals to display. The first argument is a [GtkAdjustment](https://docs.gtk.org/gtk4/class.Adjustment.html) object: the default value is 3.0, the min is 0.0 and the max 4.0, the step is 0.1.

### `gtk_button_new_with_label`

```fortran
    my_button = gtk_button_new_with_label("Compute"//c_null_char)
    call gtk_box_append(box, my_button)
    call g_signal_connect( &
      & my_button, &
      & "clicked"//c_null_char, &
      & c_funloc(my_button_clicked))
```

!!! note "clicked"
Note that here `clicked` is an event.

!!! info "Interface of callback functions"
The interface of callback function can be found by looking in the GTK documentation for the "clicked" signal of a button. When we see a star `*` in a C function, don't bother with the type of the object. We generally just need to know it's a pointer and declare it as `type(c_ptr)` in our Fortran code.

### `gtk_drawing_area_new`

```fortran
    my_drawing_area = gtk_drawing_area_new()
    pixwidth  = 1000
    pixheight = 600
    call gtk_widget_set_size_request(my_drawing_area, pixwidth, pixheight)
    call gtk_drawing_area_set_draw_func(my_drawing_area, &
                  & c_funloc(draw), c_null_ptr, c_null_funptr)
    call gtk_box_append(box, my_drawing_area)
```

The variables `my_drawing_area` and `pixwidth` and `pixheight` will be declared at the top of the `handlers` module, respectively with `type(c_ptr)` and `integer(c_int)`. We will later write the callback `draw` function which will be called each time the drawing area is drawn.

Following the previous code, we use the [GdkPibuf library](https://docs.gtk.org/gdk-pixbuf/class.Pixbuf.html):

### `gdk_pixbuf_new`

A pixbuf is a representation of an image in the memory. The `FALSE` value means there will be no transparency (no alpha channel). And `8` is the number of bits per colour.

The `gdk_pixbuf_get_n_channels()` function should return 3 (Red, Green, Blue).

The `gdk_pixbuf_get_rowstride` will generally return pixwidth nch, but it can be greater: it is the "number of bytes between the start of a row and the start of the next row".

`my_pixbuf`, `nch` and `rowstride` will be declared at the top of the module.

`pixel`, which is declared as

`character(kind=c_char), dimension(:), pointer :: pixel`

It is a pointer toward the C array containing the pixel data. We use the C `char` type which is stored in one byte.

The pointer is obtained by `gdk_pixbuf_get_pixels` and transformed into a Fortran pointer with `c_f_pointer()`.

That array is initialized with zeros and the image will therefore be black (red=0, green=0, blue=0 for each pixel). It is a one dimensional array: the three first bytes are the intensities of the three colours of the first pixel (0,0) at the top left, the three following bytes are for the pixel (1,0), etc.

Each time the `GtkDrawingArea` will need to be redrawn (for example if another window was on top), the `draw` signal will be automatically emitted and the callback function called:

```fortran
    my_pixbuf = gdk_pixbuf_new(GDK_COLORSPACE_RGB, FALSE, 8_c_int, &
              & pixwidth, pixheight)
    nch = gdk_pixbuf_get_n_channels(my_pixbuf)
    rowstride = gdk_pixbuf_get_rowstride(my_pixbuf)
    call c_f_pointer(gdk_pixbuf_get_pixels(my_pixbuf), pixel, &
                   & (/pixwidth*pixheight*nch/))
    pixel = char(0)
```

```fortran
    call gtk_widget_show(window)
  end subroutine activate
```

### end of module `handlers`

```fortran
end module handlers

```

## `my_first_gtk_app`

```fortran
program my_first_gtk_app
  use handlers

  implicit none
  type(c_ptr)    :: app
  integer(c_int) :: status
```

### `gtk_application_new()`

The `gtk_application_new()` function is returning a C pointer to our app variable using the `c_ptr` constant defined in the `iso_c_binding` module. The first argument to pass is the application (unique) identifier: a string composed of alphanumerical characters containing at least one dot.

```fortran
  app = gtk_application_new( &
    & "gtk-fortran.my_first_gtk_app"//c_null_char, &
    & G_APPLICATION_FLAGS_NONE)
```

### `g_signal_connect`

Most of the time, out GTK program will be based on a Window widget. And that window must be created when our GTK application is activated (i.e., when we open the window). Therefore, we need to add this line in the main program before running the main app:

```fortran
  call g_signal_connect( &
    & app, &
    & "activate"//c_null_char, &
    & c_funloc(activate), &
    & c_null_ptr)
```

Let's understand what is going on here.

!!! summary In summary what function should be trigerred when there is an event called `activate`.

So when we activate (open) the `app`, we want to call [activate](#activate) function (that is why it is called the callback function). In this way, we connect our app to a function named activate that will be called by the main loop when the "activate" signal is emitted.

!!! warning Don't forget to append the `c_null_char` to the signal name.

The `c_funloc()` function of the `iso_c_binding` module returns a C pointer toward our Fortran callback function.

The `c_null_ptr` means that no data will be passed to the callback function.

### `g_application_run`

```fortran
  status = g_application_run(app, 0_c_int, [c_null_ptr])
```

- `g_application_run()`: GTK is based on GLib and a GTK application is therefore a GLib application. We launch our application using the `g_application_run()` function. Here we don't manage the command line arguments: the `0_c_int, [c_null_ptr]` arguments are the classical `int argc, char **argv` used in C language. Calling that function causes your program to enter the main loop of the GUI. That loop is idle most of the time, and waits for something to happen: an event. When quitting the application, the function will return the exit status in the status variable, whose type must be interoperable with the C int type.

!!! info
When you read the GTK documentation, be conscious that GTK is using the GLib types instead of using directly the C types: for example, gint just stands for int, gdouble for double, etc.

!!! warning ""
Note that the Fortran interfaces of the functions `g_signal_connect*`, although belonging to `GLib`, are in the gtk module (they can not be parsed by gtk-4-fortran wrapper because they are defined by C macros).

```fortran
  call g_object_unref(app)
```

- `g_object_unref(app)` line will free the memory

```fortran
end program
```

## Summary

We have learned a lot: we can now create our own `GtkApplication` in Fortran. We know how to add widgets, you have understood what is a callback function, and you can even draw a bitmap image in Fortran!

Of course, this is just a first step. We could improve our app:

- The GtkSpinButton and Button widths are identical to the width of the image. For the layout we have used the simple GtkBox container. But we could have used a more complex one like [GtkGrid](https://docs.gtk.org/gtk4/class.Grid.html).
- Another problem is that the image content appears only at the end of the computation, when we return to the main loop of the GUI. One solution could be to manage directly that main loop (see the `examples/mandelbrot_pixbuf.f90` example) to update the image during the computation.
- We have not saved our image. See, the `examples/pixbuf_without_gui.f90` example: it is easy to save a pixbuf as a PNG file.
