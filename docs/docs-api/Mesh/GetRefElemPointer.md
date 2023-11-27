# GetRefElemPointer

## Interface

```fortran
  MODULE FUNCTION getRefElemPointer(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    CLASS(ReferenceElement_), POINTER :: ans
  END FUNCTION getRefElemPointer
```
