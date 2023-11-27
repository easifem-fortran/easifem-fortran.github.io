# EQ

This method returns true if two instances of DOF are same.

## Interface

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_isEqual(obj1, obj2) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj1
    TYPE(DOF_), INTENT(IN) :: obj2
    LOGICAL(LGT) :: ans
  END FUNCTION dof_isEqual
END INTERFACE
```
