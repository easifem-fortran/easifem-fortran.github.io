# GetValue

Get the entries from fortran vector or realvector using DOf object.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE dof_getvalue1(v, val, obj, idof, storageFMT, &
    & nodenum)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: v(:)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B), INTENT(IN) :: storageFMT
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
  END SUBROUTINE dof_getvalue1
END INTERFACE
```

- This subroutine extracts the values from `val` corresponding to degrees of freedom specified by `idof(:)` and return it in `V`

- `StorageFMT` can be `Nodes_FMT` or `DOF_FMT`, which specifies the storage format of returned vector.

## Interface 2

```fortran
INTERFACE
  MODULE PURE SUBROUTINE dof_getvalue2(v, val, obj, idof, force3D)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: v(:, :)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D
  END SUBROUTINE dof_getvalue2
END INTERFACE
```

This subroutine extracts all the values from `val` corresponding to degrees of freedom specified by `idof(:)` and return it in `V(:,:)` values in `v(:,:)` are stored in xiJ format.

:::note
Force3D will return a vector in 3D. if there are only two components then it will set the third component to 0.
:::

## Interface 3

```fortran
 INTERFACE
  MODULE PURE SUBROUTINE dof_getvalue3(v, val, obj, idof, storageFMT)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: v(:)
    REAL(DFP), INTENT(IN) :: val(:)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B), INTENT(IN) :: storageFMT
  END SUBROUTINE dof_getvalue3
END INTERFACE
```

This subroutine extracts the values of from `val` corresponding to degrees of freedom specified by `idof(:)` and return it in `V`

- `StorageFMT` can be `Nodes_FMT` or `DOF_FMT`, which specifies the storage format of returned vector.
