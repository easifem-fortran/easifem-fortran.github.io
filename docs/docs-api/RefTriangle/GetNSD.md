# GetNSD

Get the number of spatial dimension.

## Interface

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION GetNSD(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetNSD
END INTERFACE
```
