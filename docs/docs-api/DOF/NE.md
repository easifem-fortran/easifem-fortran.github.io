# NE

This method returns true if two instance of DOF are not same.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_isNE(obj1, obj2) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj1
    TYPE(DOF_), INTENT(IN) :: obj2
    LOGICAL(LGT) :: ans
  END FUNCTION dof_isNE
END INTERFACE
```
