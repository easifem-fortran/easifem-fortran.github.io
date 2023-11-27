```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: xxx(:, :, :), yyy(:, :, :), zzz(:, :, :), &
& x(:), y(:), z(:), basisValue(:, :), val(:, :, :)
TYPE(VTKPlot_) :: avtk
TYPE(string) :: label(8)
INTEGER(I4B) :: ii

x = linspace(-1.0_DFP, 1.0_DFP, 11)
y = linspace(-1.0_DFP, 1.0_DFP, 11)
z = linspace(-1.0_DFP, 1.0_DFP, 11)
CALL MeshGrid(xxx, yyy, zzz, x, y, z)
x = RESHAPE(xxx, [SIZE(xxx)])
y = RESHAPE(yyy, [SIZE(yyy)])
z = RESHAPE(zzz, [SIZE(zzz)])

basisValue = VertexBasis_Hexahedron(x, y, z)

DO ii = 1, SIZE(label)
  label(ii) = tostring(ii)
END DO

CALL avtk%Plot(xxx, yyy, zzz, basisValue, label, "vertexBasis.vts")

END PROGRAM main
```
