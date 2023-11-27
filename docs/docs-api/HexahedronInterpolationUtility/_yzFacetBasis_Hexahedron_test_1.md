```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: xxx(:, :, :), yyy(:, :, :), zzz(:, :, :), &
& x(:), y(:), z(:), basisValue(:, :), val(:, :, :)
TYPE(VTKPlot_) :: avtk
TYPE(string) :: label(2)
INTEGER(I4B) :: ii

x = linspace(-1.0_DFP, 1.0_DFP, 11)
y = linspace(-1.0_DFP, 1.0_DFP, 11)
z = linspace(-1.0_DFP, 1.0_DFP, 11)
CALL MeshGrid(xxx, yyy, zzz, x, y, z)
x = RESHAPE(xxx, [SIZE(xxx)])
y = RESHAPE(yyy, [SIZE(yyy)])
z = RESHAPE(zzz, [SIZE(zzz)])

basisValue = FacetBasis_Hexahedron(2, 2, x, y, z, dim1=2_I4B, dim2=3_I4B)

DO ii = 1, SIZE(label)
  label(ii) = tostring(ii)
END DO

CALL avtk%Plot(xxx, yyy, zzz, basisValue, label, "yzFacetBasis.vts")

END PROGRAM main
```

<!-- <details> -->
<!-- <summary>See results</summary> -->
<!-- <div> -->
<!---->
<!-- ![](./figures/yzFacetBasis.svg) -->
<!---->
<!-- </div> -->
<!-- </details> -->
