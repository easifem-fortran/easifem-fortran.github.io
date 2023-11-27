# Structure

## ConstructorMethods

### Initiate

### Deallocate

### Display

## StructuredGridMethods

### Plot

There are several interfaces as described below:

Interface-1

```fortran
INTERFACE
MODULE SUBROUTINE vts_plot_x1y1( obj, x, y, filename )
  CLASS( VTKPlot_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x( : )
  REAL( DFP ), INTENT( IN ) :: y( : )
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE vts_plot_x1y1
END INTERFACE
```

You can learn about the interface from [[VTKPlot_test_1]]

Interface-2

```fortran
INTERFACE
MODULE SUBROUTINE vts_plot_x1y1z1( obj, x, y, z, filename )
  CLASS( VTKPlot_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x( : )
  REAL( DFP ), INTENT( IN ) :: y( : )
  REAL( DFP ), INTENT( IN ) :: z( : )
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE vts_plot_x1y1z1
END INTERFACE
```

You can learn about interface-2 from [[VTKPlot_test_3]].

Interface-3

```fortran
INTERFACE
MODULE SUBROUTINE vts_plot_x2y2( obj, x, y, filename )
  CLASS( VTKPlot_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x( :, : )
  REAL( DFP ), INTENT( IN ) :: y( :, : )
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE vts_plot_x2y2
END INTERFACE
```

You can learn about interface-3 from [[VTKPlot_test_4]]

Interface-4

```fortran
INTERFACE
MODULE SUBROUTINE vts_plot_x3y3z3( obj, x, y, z, filename )
  CLASS( VTKPlot_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x( :, :, : )
  REAL( DFP ), INTENT( IN ) :: y( :, :, : )
  REAL( DFP ), INTENT( IN ) :: z( :, :, : )
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE vts_plot_x3y3z3
END INTERFACE
```

You can learn about interface-4 from [[VTKPlot_test_6]]

Interface-5

```fortran
SUBROUTINE vts_plot_x1y1f( obj, x, y, f, filename )
  CLASS( VTKPlot_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x( : )
  REAL( DFP ), INTENT( IN ) :: y( : )
  PROCEDURE( iface_SpaceFunction ), POINTER :: f
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE
```

You can learn about interface-5 from [[VTKPlot_test_2]]

Interface-6

```fortran
SUBROUTINE vts_plot_x2y2f( obj, x, y, f, filename )
  CLASS( VTKPlot_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x( :, : )
  REAL( DFP ), INTENT( IN ) :: y( :, : )
  PROCEDURE( iface_SpaceFunction ), POINTER :: f
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE
```

You can learn about interface-6 from [[VTKPlot_test_5]].

Interface-7

```fortran
SUBROUTINE vts_plot_x3y3z3f( obj, x, y, z, f, filename )
  CLASS( VTKPlot_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x( :, :, : )
  REAL( DFP ), INTENT( IN ) :: y( :, :, : )
  REAL( DFP ), INTENT( IN ) :: z( :, :, : )
  PROCEDURE( iface_SpaceFunction ), POINTER :: f
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE
```

You can learn about interface-7 from [[VTKPlot_test_7]]
