# Deallocate

This routine deallocates the data stored inside the kernel.

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_Deallocate(obj)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
  END SUBROUTINE STDBE_Deallocate
END INTERFACE
```

This method can be called by children by using `AbstractSTDBEDeallocate` routine.
