# DOFEndIndex

This method returns the ending index of a physical variable.

It actually returns `obj%map( ivar+1, 5 )-1`

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_DOFEndIndex(obj, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B) :: ans
  END FUNCTION dof_DOFEndIndex
END INTERFACE
```
