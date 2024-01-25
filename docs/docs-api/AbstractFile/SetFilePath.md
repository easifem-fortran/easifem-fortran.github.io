# SetFilePath

Set the path of the file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE aFile_SetFilePath(obj, path)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    TYPE(String), INTENT(IN) :: path
  END SUBROUTINE aFile_SetFilePath
END INTERFACE
```
