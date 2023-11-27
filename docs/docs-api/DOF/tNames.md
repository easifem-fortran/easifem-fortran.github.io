# tNames

This method returns the total number of physical variables in DOF object.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_tNames(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION dof_tNames
END INTERFACE
```
