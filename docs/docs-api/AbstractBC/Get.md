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

-  `nodeNum` is the global node number of boundary nodes where boundary conditions is prescribed
- If present `nodalValue` then nodal values of prescribed boundary conditions are returned. The row size of `nodalValue` is always equal to the size of `nodeNum`. The column size if equal to the size of `times` (if present) otherwise 1.
	-  if `useFunction` is true then `SpaceFunction`, `SpaceTimeFunction`, or `TimeFunction`  is used for computing the nodal values at the boundary
	-  if `useFunction` is false then `NodalValue` should be allocated. In this case, this function checks the `nodalValueType`, and accordingly returns `nodalValue` . 