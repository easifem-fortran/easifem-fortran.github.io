# Deallocate

Deallocate the [AbstractBC_](AbstractBC_.md).

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```
