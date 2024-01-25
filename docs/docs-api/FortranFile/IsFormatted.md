# IsFormatted

Returns true if the file is formatted

```fortran
INTERFACE
  MODULE PURE FUNCTION isFormatted(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isFormatted
END INTERFACE
```
