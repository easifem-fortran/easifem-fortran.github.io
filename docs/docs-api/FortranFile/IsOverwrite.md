# IsOverwrite

Returns true if overwrite status is set

```fortran
INTERFACE
  MODULE PURE FUNCTION isOverwrite(obj) RESULT(Ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isOverwrite
END INTERFACE
```
