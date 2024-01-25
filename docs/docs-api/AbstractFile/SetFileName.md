# SetFileName

This method sets the name of the file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE aFile_SetFileName(obj, fileName)
    CLASS(AbstractFile_), INTENT(INOUT) :: obj
    TYPE(String), INTENT(IN) :: fileName
  END SUBROUTINE aFile_SetFileName
END INTERFACE
```
