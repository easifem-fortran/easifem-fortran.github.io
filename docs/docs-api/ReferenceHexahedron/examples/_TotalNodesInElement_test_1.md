```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
CALL OK(TotalNodesInElement_Hexahedron(Hexahedron8) .EQ. 8,  &
  & "TotalNodesInElement_Hexahedron: ")
CALL OK(TotalNodesInElement_Hexahedron(Hexahedron20) .EQ. 20,  &
  & "TotalNodesInElement_Hexahedron: ")
CALL OK(TotalNodesInElement_Hexahedron(Hexahedron27) .EQ. 27,  &
  & "TotalNodesInElement_Hexahedron: ")
CALL OK(TotalNodesInElement_Hexahedron(Hexahedron64) .EQ. 64,  &
  & "TotalNodesInElement_Hexahedron: ")
CALL OK(TotalNodesInElement_Hexahedron(Hexahedron125) .EQ. 125,  &
  & "TotalNodesInElement_Hexahedron: ")
END PROGRAM main
```
