# GetColumn

Calling example:

- `GetColumn(obj, globalnode, idof, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, idof, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, spacecompo, timecompo, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode(:), ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode(:), ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getColumn1(obj, globalNode, idof, VALUE, nodeFieldVal, &
    & scale, addContribution)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn1
END INTERFACE
```

This routine returns the column of a sparse matrix. The column index is
calculated using the `globalNode` and `idof`.

- `globalNode` is the global node number
- `idof` is the degree of freedom number

If `value` is present then the vector is returned inside the rank 1 vector

If `nodeFieldVal` is present then the column is returned inside the node
field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getColumn2(obj, globalNode, ivar, idof, &
      & VALUE, nodeFieldVal, scale, addContribution)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn2
END INTERFACE
```

This routine returns the column of a sparse matrix. The column index is
calculated using the `globalNode`, `ivar`, `idof`.

- `globalNode` is the global node number
- `ivar` is the physical variable number
- `idof` is the degree of freedom number of the physical variable

If `value` is present then the vector is returned inside the rank 1 vector

If `nodeFieldVal` is present then the column is returned inside the node
field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getColumn3(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn3
END INTERFACE
```

This routine returns the column of a sparse matrix. The column index is
calculated using the `globalNode`, `ivar`, `spacecompo`, `timecompo`.

- `globalNode` is the global node number
- `ivar` is the physical variable number
- `spacecompo` is the spatial component of the physical variable
- `timecompo` is the temporal component of the physical variable

If `value` is present then the vector is returned inside the rank 1 vector

If `nodeFieldVal` is present then the column is returned inside the node
field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getColumn4(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn4
END INTERFACE
```

This routine returns the column of a sparse matrix. The column index is
calculated using the `globalNode`, `ivar`, `spacecompo`, `timecompo`.

- `globalNode` is the global node number
- `ivar` is the physical variable number
- `spacecompo` is the spatial component of the physical variable
- `timecompo` is the temporal component of the physical variable

If `value` is present then the vector is returned inside the rank 1 vector

If `nodeFieldVal` is present then the column is returned inside the node
field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getColumn5(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn5
END INTERFACE
```

This routine returns the column of a sparse matrix. The column index is
calculated using the `globalNode`, `ivar`, `spacecompo`, `timecompo`.

- `globalNode` is the global node number
- `ivar` is the physical variable number
- `spacecompo` is the spatial component of the physical variable
- `timecompo` is the temporal component of the physical variable

If `value` is present then the vector is returned inside the rank 1 vector

If `nodeFieldVal` is present then the column is returned inside the node
field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getColumn6(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn6
END INTERFACE
```

This routine returns the column of a sparse matrix. The column index is
calculated using the `globalNode`, `ivar`, `spacecompo`, `timecompo`.

- `globalNode` is the global node number
- `ivar` is the physical variable number
- `spacecompo` is the spatial component of the physical variable
- `timecompo` is the temporal component of the physical variable

If `value` is present then the vector is returned inside the rank 1 vector

If `nodeFieldVal` is present then the column is returned inside the node
field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE getColumn7(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn7
END INTERFACE
```

This routine returns the column of a sparse matrix. The column index is
calculated using the `globalNode`, `ivar`, `spacecompo`, `timecompo`.

- `globalNode` is the global node number
- `ivar` is the physical variable number
- `spacecompo` is the spatial component of the physical variable
- `timecompo` is the temporal component of the physical variable

If `value` is present then the vector is returned inside the rank 1 vector

If `nodeFieldVal` is present then the column is returned inside the node
field

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>
