# GetMeshID

This routine returns the mesh-ids of the domain region defined in an instance of MeshSelection.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION getMeshID(obj, dim) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dim
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getMeshID
END INTERFACE
```

- `dim` denotes the dimension of the mesh.
- `dim=0` mesh of points.
- `dim=1`, mesh of lines.
- `dim=2`, mesh of surfaces.
- `dim=3`, mesh of volumes.
