# Deallocate

Deallocate the data stored in the `UserFunction`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE auf_Deallocate(obj)
    CLASS(UserFunction_), INTENT(INOUT) :: obj
  END SUBROUTINE auf_Deallocate
END INTERFACE
```
