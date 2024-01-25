# GetFileExt

Get the extension of the file.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION aFile_GetFileExt(obj) RESULT(Ext)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    TYPE(String) :: Ext
  END FUNCTION aFile_GetFileExt
END INTERFACE
```
