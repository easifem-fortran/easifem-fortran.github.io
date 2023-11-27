# Get

Get node number and get nodal value.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Get(obj, nodeNum, nodalValue, times)
    CLASS(AbstractBC_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: nodeNum(:)
    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: nodalValue(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: times(:)
  END SUBROUTINE Get
END INTERFACE
```

This routine is inherited from [AbstractBC_](../AbstractBC/AbstractBC_.md).