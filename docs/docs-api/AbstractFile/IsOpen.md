# IsOpen

Returns true if the file is open.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION aFile_IsOpen(obj) RESULT(ans)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION aFile_IsOpen
END INTERFACE
```
