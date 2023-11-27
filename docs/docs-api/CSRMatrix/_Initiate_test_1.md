```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( CSRMatrix_ ) :: obj
  TYPE( DOF_ ) :: dofobj
```

- First, we initiate [DOF](../DOF/DOF_.md), which contains the structure of Degrees of freedom
- The degrees of freedom has:
  - 1 physical variable
  - 1 space component
  - 1 time component
  - 12 number of spatial nodes are stored in `NODES_FMT`.

```fortran
  CALL Initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT )
```

- Below we create a sparse matrix with 12 number of rows and 12 number of cols.

```fortran
  CALL Initiate( obj, ncol=12, nrow=12, idof=dofobj, jdof=dofobj )
```

```fortran
  CALL Deallocate( obj )
END PROGRAM main
```
