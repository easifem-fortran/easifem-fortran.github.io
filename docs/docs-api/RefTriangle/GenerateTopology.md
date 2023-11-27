# GenerateTopology

Generate topolgies of a reference element.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE refelem_GenerateTopology(obj)
    CLASS(RefLine_), INTENT(INOUT) :: obj
  END SUBROUTINE refelem_GenerateTopology
END INTERFACE
```
