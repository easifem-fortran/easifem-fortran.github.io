# Deallocate

Deallocate the data stored inside reference element.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Deallocate(obj)
    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```
