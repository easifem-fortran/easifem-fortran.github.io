# SetFileExt

Set the extension of the file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE aFile_SetFileExt(obj, Ext)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    TYPE(String), INTENT(IN) :: Ext
  END SUBROUTINE aFile_SetFileExt
END INTERFACE
```
