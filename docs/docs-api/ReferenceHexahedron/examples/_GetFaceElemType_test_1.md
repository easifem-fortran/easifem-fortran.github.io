---
title: GetFaceElemType example 1
---

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

BLOCK
  INTEGER(I4B) :: faceElemType(6), tFaceNodes(6)

  CALL GetFaceElemType_Hexahedron(faceElemType=faceElemType,  &
    & tFaceNodes=tFaceNodes, elemType=Hexahedron8)

  CALL OK(ALL(faceElemType .EQ. Quadrangle4), "faceElemType(1): ")
  CALL OK(ALL(tFaceNodes .EQ. 4), "tFaceNodes(2): ")

END BLOCK
END PROGRAM main
```
