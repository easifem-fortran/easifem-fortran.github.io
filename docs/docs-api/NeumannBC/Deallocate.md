# Deallocate

Deallocate the [NeumannBC_](NeumannBC_.md).

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(NeumannBC_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```
