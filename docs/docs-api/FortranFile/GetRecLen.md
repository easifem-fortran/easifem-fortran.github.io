# GetRecLen

Get the length of the record

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION getRecLen(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION getRecLen
END INTERFACE
```
