# GetUnitNo

Get the unit number of the fortran file

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION getUnitNo(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION getUnitNo
END INTERFACE
```
