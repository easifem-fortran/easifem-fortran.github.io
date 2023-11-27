# GetXidimension

Get the xidimension.

## Interface

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION GetXidimension(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetXidimension
END INTERFACE
```
