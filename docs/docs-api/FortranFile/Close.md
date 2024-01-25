# Close

Close the Fortran file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Close(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE Close
END INTERFACE
```
