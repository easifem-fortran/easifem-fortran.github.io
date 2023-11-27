# Deallocate

Deallocate the memory occupied by an instance of [DOF](DOF_.md)

Calling example:

```fortran
CALL Deallocate(obj)
```

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Deallocate(obj)
    CLASS(DOF_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```
