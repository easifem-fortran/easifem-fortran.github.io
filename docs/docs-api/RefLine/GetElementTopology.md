# GetElementTopology

Get the element topology.

## Interface

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION GetElementTopology(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetElementTopology
END INTERFACE
```
