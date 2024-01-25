# SetOpenStat

Set the status of file being opened or not.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE aFile_SetOpenStat(obj, stat)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: stat
  END SUBROUTINE aFile_SetOpenStat
END INTERFACE
```
