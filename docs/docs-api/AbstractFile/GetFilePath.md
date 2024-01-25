# GetFilePath

Get the path of the file.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION aFile_GetFilePath(obj) RESULT(path)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    TYPE(String) :: path
  END FUNCTION aFile_GetFilePath
END INTERFACE
```
