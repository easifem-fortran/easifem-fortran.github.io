# GetNNE

Get the number of node inside the element.

## Interface

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION GetNNE(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetNNE
END INTERFACE
```
