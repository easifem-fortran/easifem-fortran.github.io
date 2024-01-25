# IsNew

Returns true if the file is new

```fortran
INTERFACE
  MODULE PURE FUNCTION isNew(obj) RESULT(Ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isNew
END INTERFACE
```
