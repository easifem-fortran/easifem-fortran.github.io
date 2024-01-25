# SetStatus

Set the status of the file.

- If the status is `OLD` then file should exists
- Otherwise we will create new file and replace any existing file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetStatus(obj, status)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: status
    !! status can be
    !! OLD, NEW, REPLACE, SCRATCH, UNKNOWN
    LOGICAL(LGT) :: ans
  END SUBROUTINE SetStatus
END INTERFACE
```
