# GetName

This method returns the integer code of the reference element.

## Interace

```fortran
  PURE FUNCTION GetName(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetName
```
