# Display

This routine displays the content of kernel.

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitNo)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE Display
END INTERFACE
```

```fortran
INTERFACE KernelDisplay
  MODULE PROCEDURE Display
END INTERFACE KernelDisplay
```
