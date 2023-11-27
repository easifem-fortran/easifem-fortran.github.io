# GetTopology

Return the topology of subentities.

- If `xidim=0` then the topology of points is returned
- If `xidim=1` then the topology of edges is returned
- If `xidim=2` then the topology of faces is returned
- If `xidim=3` then the topology of cell is returned

If `xidim` is absent then all topologies will be returned.

## Interace

```fortran
INTERFACE
  MODULE PURE FUNCTION GetTopology(obj, xidim) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: xidim
    TYPE(Topology_), ALLOCATABLE :: ans(:)
  END FUNCTION GetTopology
END INTERFACE
```
