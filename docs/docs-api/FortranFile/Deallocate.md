# Deallocate

Deallocate the content of Fortran file, you can delete the file if you want. Note that we have overridden the deallocate method defined for `AbstractFile_`.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj, delete)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: delete
  END SUBROUTINE Deallocate
END INTERFACE
```
