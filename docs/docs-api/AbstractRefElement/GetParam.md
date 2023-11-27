# GetParam

Get the parameters of reference element.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE refelem_SetParam(obj, xij, entityCounts, &
    & xidimension, name, nameStr, nsd, &
    & pointTopology, edgeTopology, faceTopology, cellTopology)
    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: entityCounts(4)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: xidimension
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: name
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: nameStr
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd
    TYPE(Topology_), OPTIONAL, INTENT(IN) :: pointTopology(:)
    TYPE(Topology_), OPTIONAL, INTENT(IN) :: edgeTopology(:)
    TYPE(Topology_), OPTIONAL, INTENT(IN) :: faceTopology(:)
    TYPE(Topology_), OPTIONAL, INTENT(IN) :: cellTopology(:)
  END SUBROUTINE refelem_SetParam
END INTERFACE
```
