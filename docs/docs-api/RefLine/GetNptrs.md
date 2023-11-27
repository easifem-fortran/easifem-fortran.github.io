# GetNptrs

Get the node numbers of reference element.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNptrs(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetNptrs
END INTERFACE
```
