# DisplayNodeData

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_DisplayNodeData(obj, msg, unitno)
    CLASS(Mesh_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE mesh_DisplayNodeData
END INTERFACE
```
