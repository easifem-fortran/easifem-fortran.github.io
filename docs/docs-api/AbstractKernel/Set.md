# Set

This subroutine sets the option of the kernel and build the kernel.  

We can start the main computation after calling `Set`. In this way, the call to this subroutine indicates that all the options have been set to the kernel, and it is ready to be used.

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE Set
END INTERFACE
```
