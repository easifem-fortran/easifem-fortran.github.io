# IsPadded

Returns true if padded

```fortran
INTERFACE
  MODULE PURE FUNCTION isPadded(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isPadded
END INTERFACE
```
