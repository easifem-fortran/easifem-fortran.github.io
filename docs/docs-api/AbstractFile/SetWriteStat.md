# SetWriteStat

Set the write status of the file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE aFile_SetWriteStat(obj, stat)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: stat
  END SUBROUTINE aFile_SetWriteStat
END INTERFACE
```
