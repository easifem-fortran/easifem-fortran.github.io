# GetFileParts

Get the file name, path, and extension of the file.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE aFile_GetFileParts(obj, path, fileName, ext)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    TYPE(String), INTENT(OUT) :: path
    TYPE(String), INTENT(OUT) :: fileName
    TYPE(String), INTENT(OUT) :: ext
  END SUBROUTINE aFile_GetFileParts
END INTERFACE
```
