# SetReadStat

Set the read access status of the file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE aFile_SetReadStat(obj, stat)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: stat
  END SUBROUTINE aFile_SetReadStat
END INTERFACE
```
