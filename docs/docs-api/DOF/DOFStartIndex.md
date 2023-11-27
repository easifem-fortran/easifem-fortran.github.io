# DOFStartIndex

This method returns the start index of a physical variable.

It actually returns `obj%map( ivar, 5 )`

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_DOFStartIndex(obj, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B) :: ans
  END FUNCTION dof_DOFStartIndex
END INTERFACE
```
