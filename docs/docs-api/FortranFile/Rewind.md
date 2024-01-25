# Rewind

Move to the begining

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE rewind(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE rewind
END INTERFACE
```
