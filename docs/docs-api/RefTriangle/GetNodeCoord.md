# GetNodeCoord

Get the node coordinates in $x_{iJ}$ format.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeCoord(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION GetNodeCoord
END INTERFACE
```
