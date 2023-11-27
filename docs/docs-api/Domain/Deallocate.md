# Deallocate

This function clears the memory occupied by an instance of domain.

```fortran
INTERFACE
  MODULE SUBROUTINE Domain_Deallocate(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
    !! Domain object
  END SUBROUTINE Domain_Deallocate
END INTERFACE
```
