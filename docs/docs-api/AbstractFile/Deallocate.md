# Deallocate

Deallocate the file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE AbstractFileDeallocate(obj, Delete)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: Delete
  END SUBROUTINE AbstractFileDeallocate
END INTERFACE
```
