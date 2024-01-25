# Delete

Delete the fortran file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE delete(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE delete
END INTERFACE
```
