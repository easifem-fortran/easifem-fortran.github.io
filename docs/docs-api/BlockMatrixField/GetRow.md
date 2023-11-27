# GetRow

Get row entries of matrix field.

Calling example:

- `GetRow(obj, globalnode, ivar, idof, value(:), nodefieldval, scale, addcontribution`
- `GetRow(obj, globalnode, ivar, spacecompo, timecompo, value(:), nodefieldval, scale, addcontribution`
- `GetRow(obj, globalnode, ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution`
- `GetRow(obj, globalnode, ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution`
- `GetRow(obj, globalnode(:), ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution`
- `GetRow(obj, globalnode(:), ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getRow(obj, globalNode, ivar, idof, VALUE, &
    & nodeFieldVal, scale, addContribution)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getRow
END INTERFACE
```

This routine returns the row of a sparse matrix. The row index is
calculated using the `globalNode`, `idof`, and `ivar`.

- `globalNode` is the global node number of mesh
- `idof` is the degree of freedom number

- If `value` is present then the vector is returned inside the rank 1 vector
- If `nodeFieldVal` is present then the row is returned inside the
node field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & VALUE, nodeFieldVal, scale, addContribution)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getRow
END INTERFACE
```

This routine returns the row of a sparse matrix. The row index is
calculated using the (`globalNode`, `ivar`, `spacecompo`, `timecompo`).

- `globalNode` is the global node number of mesh
- `idof` is the degree of freedom number

- If `value` is present then the vector is returned inside the rank 1 vector
- If `nodeFieldVal` is present then the row is returned inside the
node field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & VALUE, nodeFieldVal, scale, addContribution)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getRow
END INTERFACE
```

This routine returns the row of a sparse matrix. The row index is
calculated using the (`globalNode`, `ivar`, `spacecompo`, `timecompo`).

- `globalNode` is the global node number of mesh
- `idof` is the degree of freedom number

- If `value` is present then the vector is returned inside the rank 1 vector
- If `nodeFieldVal` is present then the row is returned inside the
node field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & VALUE, nodeFieldVal, scale, addContribution)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getRow
END INTERFACE
```

This routine returns the row of a sparse matrix. The row index is
calculated using the (`globalNode`, `ivar`, `spacecompo`, `timecompo`).

- `globalNode` is the global node number of mesh
- `idof` is the degree of freedom number

- If `value` is present then the vector is returned inside the rank 1 vector
- If `nodeFieldVal` is present then the row is returned inside the
node field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & VALUE, nodeFieldVal, scale, addContribution)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getRow
END INTERFACE
```

This routine returns the row of a sparse matrix. The row index is
calculated using the (`globalNode`, `ivar`, `spacecompo`, `timecompo`).

- `globalNode` is the global node number of mesh
- `idof` is the degree of freedom number

- If `value` is present then the vector is returned inside the rank 1 vector
- If `nodeFieldVal` is present then the row is returned inside the
node field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & VALUE, nodeFieldVal, scale, addContribution)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getRow
END INTERFACE
```

This routine returns the row of a sparse matrix. The row index is
calculated using the (`globalNode`, `ivar`, `spacecompo`, `timecompo`).

- `globalNode` is the global node number of mesh
- `idof` is the degree of freedom number

- If `value` is present then the vector is returned inside the rank 1 vector
- If `nodeFieldVal` is present then the row is returned inside the
node field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>
