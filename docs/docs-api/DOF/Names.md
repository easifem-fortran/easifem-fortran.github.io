# Names

This method returns the names all physical variables in the degree of freedom object.

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_names1(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    CHARACTER(1), ALLOCATABLE :: ans(:)
  END FUNCTION dof_names1
END INTERFACE
```

## Inteface 2

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_names2(obj, ii) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ii
    CHARACTER(1), ALLOCATABLE :: ans
  END FUNCTION dof_names2
END INTERFACE
```

This function returns the name of a physical variable.
The physical variable is given by its number `ii`.
In this way, this function converts the number of physical variable to its name.
