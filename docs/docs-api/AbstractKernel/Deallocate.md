# Deallocate

This subroutine deallocates the data stored inside the Kernel

This subroutine should be extended by children.

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

```fortran
INTERFACE KernelDeallocate
  MODULE PROCEDURE Deallocate
END INTERFACE KernelDeallocate
```
