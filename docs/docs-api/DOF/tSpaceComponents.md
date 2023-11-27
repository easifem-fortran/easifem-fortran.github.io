# tSpaceComponents

This function returns the total number of spatial components.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_tspacecomponents(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION dof_tspacecomponents
END INTERFACE
```
