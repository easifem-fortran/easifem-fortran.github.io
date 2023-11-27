```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
REAL(dfp) :: xij(2, 3)
xij = RefCoord_Triangle("BiUnit")
CALL display(xij, "biunit triangle : ")
CALL display(FromBiUnitTriangle2UnitTriangle(xij), "unit triangle: ")
END PROGRAM main
```
