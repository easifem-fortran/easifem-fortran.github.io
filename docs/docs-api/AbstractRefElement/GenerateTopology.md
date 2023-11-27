# GenerateTopology

Returns the topology of reference element.

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE GenerateTopology(obj)
    IMPORT AbstractRefElement_, Topology_
    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj
  END SUBROUTINE GenerateTopology
END INTERFACE
```
