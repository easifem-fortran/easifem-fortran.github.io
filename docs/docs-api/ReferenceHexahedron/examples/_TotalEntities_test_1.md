```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK(ALL(TotalEntities_Hexahedron(Hexahedron8) .EQ. [8, 12, 6, 1]),  &
  & "TotalEntities_Hexahedron: ")

CALL OK(ALL(TotalEntities_Hexahedron(Hexahedron20) .EQ. [20, 12, 6, 1]),  &
  & "TotalEntities_Hexahedron: ")

CALL OK(ALL(TotalEntities_Hexahedron(Hexahedron27) .EQ. [27, 12, 6, 1]),  &
  & "TotalEntities_Hexahedron: ")

CALL OK(ALL(TotalEntities_Hexahedron(Hexahedron64) .EQ. [64, 12, 6, 1]),  &
  & "TotalEntities_Hexahedron: ")
END PROGRAM main
```
