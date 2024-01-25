# GetFileName

Get the name of the file.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION aFile_GetFileName(obj) RESULT(fileName)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    TYPE(String) :: fileName
  END FUNCTION aFile_GetFileName
END INTERFACE
```
