# IsEOF

Returns true if the end of file is reached.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION aFile_IsEOF(obj) RESULT(ans)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION aFile_IsEOF
END INTERFACE
```
