# TimeComponents

This function returns the TimeComponents in degree of freedom object.

## Interface

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_timecomponents1(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION dof_timecomponents1
END INTERFACE
```

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_timecomponents2(obj, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B) :: ans
  END FUNCTION dof_timecomponents2
END INTERFACE
```
