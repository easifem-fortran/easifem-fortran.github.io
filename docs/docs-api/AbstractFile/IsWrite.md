# IsWrite

Returns true if the file has write access.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION aFile_IsWrite(obj) RESULT(ans)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION aFile_IsWrite
END INTERFACE
```
