```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
REAL(dfp) :: xij(2, 3)
xij = RefCoord_Triangle("unit")
CALL display(xij, "unit triangle : ")
CALL display(FromUnitTriangle2BiUnitTriangle(xij), "biunit triangle: ")
END PROGRAM main
```
