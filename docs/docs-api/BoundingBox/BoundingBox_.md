# Structure

A `BoundingBox_` datatype contains `[x_min, y_min, z_min, x_max, y_max, z_max` and `NSD` to represents a bounding box.

## Structure

```fortran
TYPE :: BoundingBox_
  INTEGER(I4B) :: NSD
    !! Number of spatial dimension
    !! NSD = 1, 2, 3 for 1D, 2D, 3D box
  REAL(DFP) :: Box(2, 3)
    !! Box contains the xmin, ymin, ...
    !! `Box(1:2, 1:3)`  an array containing box coordinates.
    !!- `Box(1:2, 1:3)`  an array containing box coordinates.
    !!- `Box(1, 1)` is x_min
    !!- `Box(2, 1)` is x_max
    !!- `Box(1, 2)` is y_min
    !!- `Box(2, 2)` is y_max
    !!- `Box(1, 3)` is z_min
    !!- `Box(2, 3)` is z_max
END TYPE BoundingBox_
```
