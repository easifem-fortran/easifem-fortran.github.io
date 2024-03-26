---
title: GetFaceElemType example 1
---

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
INTEGER(I4B) :: faceElemType(4), tFaceNodes(4)

BLOCK
  CALL GetFaceElemType_Tetrahedron(faceElemType=faceElemType,  &
    & tFaceNodes=tFaceNodes, elemType=Tetrahedron4)

  CALL OK(ALL(faceElemType .EQ. Triangle3),  &
    & "GetFaceElemType_Tetrahedron test(1) :")
  CALL OK(ALL(tFaceNodes .EQ. LagrangeDOF_Triangle(order=1)),  &
    & "GetFaceElemType_Tetrahedron test(2) :")
END BLOCK

BLOCK
  CALL GetFaceElemType_Tetrahedron(faceElemType=faceElemType,  &
    & tFaceNodes=tFaceNodes, elemType=Tetrahedron10)

  CALL OK(ALL(faceElemType .EQ. Triangle6),  &
    & "GetFaceElemType_Tetrahedron test(3) :")
  CALL OK(ALL(tFaceNodes .EQ. LagrangeDOF_Triangle(order=2)),  &
    & "GetFaceElemType_Tetrahedron test(4) :")
END BLOCK

BLOCK
  CALL GetFaceElemType_Tetrahedron(faceElemType=faceElemType,  &
    & tFaceNodes=tFaceNodes, elemType=Tetrahedron20)

  CALL OK(ALL(faceElemType .EQ. Triangle10),  &
    & "GetFaceElemType_Tetrahedron test(5) :")
  CALL OK(ALL(tFaceNodes .EQ. LagrangeDOF_Triangle(order=3)),  &
    & "GetFaceElemType_Tetrahedron test(6) :")
END BLOCK

END PROGRAM main
```
