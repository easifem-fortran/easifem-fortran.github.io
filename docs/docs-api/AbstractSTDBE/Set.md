# Set

This routine is the most **important** one. This routine should be called before starting the main computation. After initiating the kernel, we have all the information to construct the state of the kernel. This routine checks all the options, and produce notify user if some information is missing or incorrect.

This routine calls [](AbstractSTDBE_.md#InitiateFields) method.

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_Set(obj)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
  END SUBROUTINE STDBE_Set
END INTERFACE
```

While extending this method, child can call this routine by calling `AbstractSTDBESet` routine.

