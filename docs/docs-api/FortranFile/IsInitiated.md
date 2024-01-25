# IsInitiated

Returns true if the file is initiated

```fortran
INTERFACE
  MODULE PURE FUNCTION isInitiated(obj) RESULT(Ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isInitiated
END INTERFACE
```
