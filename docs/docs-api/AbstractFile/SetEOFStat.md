# SetEOFStat

Set the end of file status of the file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE aFile_SetEOFstat(obj, stat)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: stat
  END SUBROUTINE aFile_SetEOFstat
END INTERFACE
```
