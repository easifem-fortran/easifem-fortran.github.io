# IsDirect

Returns true if direct access

```fortran
INTERFACE
  MODULE PURE FUNCTION isDirect(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isDirect
END INTERFACE
```
