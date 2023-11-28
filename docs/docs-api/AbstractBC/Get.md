# Get

Get node number and nodal value from the boundary condition.

<span class="badge badge--secondary"> @GetMethods </span>

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

:::info `nodeNum`
:::

`nodeNum(:)` is the global node number of boundary nodes where boundary conditions is prescribed

:::info `nodalValue`
:::

- If present `nodalValue(:,:)` then nodal values of prescribed boundary conditions are returned.
- The row size of `nodalValue` is always equal to the size of `nodeNum`.
- The number of columns in `nodalValue` depends upon the `nodalValueType`. If `nodalValueType` is `Time` or `SpaceTime`, then the column size is equal to the size of `times` (if present) otherwise 1.

:::info
If `IsUserFunction` is true then `func` is used for computing the nodal values at the boundary.
:::

:::note
If `IsUserFunction` is false then `nodalValue` should be allocated. In this case, this function checks the `nodalValueType`, and accordingly returns `nodalValue` .
:::
