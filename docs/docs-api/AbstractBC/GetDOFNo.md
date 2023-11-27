# GetDOFNo

Get degree of freedom number.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetDOFNo(obj) RESULT(ans)
    CLASS(AbstractBC_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetDOFNo
END INTERFACE
```
