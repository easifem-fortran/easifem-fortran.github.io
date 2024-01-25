# IsRead

Returns true if the file has read access.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION aFile_IsRead(obj) RESULT(ans)
    CLASS(AbstractFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION aFile_IsRead
END INTERFACE
```
