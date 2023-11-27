# SetRow

Set the row of matrix field.

Calling example

- `SetRow(obj, globalnode, ivar, idof, scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode, ivar, spacecompo, timecompo, scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode, ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode, ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode(:), ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode(:), ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE setRow(obj, globalNode, ivar, idof, scalarVal, vecVal, &
    & nodeFieldVal)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow
END INTERFACE
```

This routine sets the row of a sparse matrix. The row index is calculated by using the `globalNode`, `ivar` and `idof`.

- `globalNode` is global node number.
- `ivar` is the physical variable number.
- `idof` is the degree of freedom number.
- `scalarVal` is the scalar value, if present then the row will be Set to
this scalar value
- `vectorVal` is the vector value, if present then the row will be Set to
this vector value
- `nodeFieldVal` is the field of nodal values.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow
END INTERFACE
```

This routine sets the row of a sparse matrix. The row index is calculated by using the `globalNode`, `ivar` and `spacecompo`, `timecompo`.

- `globalNode` is global node number.
- `ivar` is the physical variable number.
- `spacecompo` is the space component number.
- `timecompo` is the time component number.
- `scalarVal` is the scalar value, if present then the row will be Set to
this scalar value
- `vectorVal` is the vector value, if present then the row will be Set to
this vector value
- `nodeFieldVal` is the field of nodal values.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow
END INTERFACE
```

This routine sets the row of a sparse matrix. The row index is calculated by using the `globalNode`, `ivar` and `spacecompo`, `timecompo`.

- `globalNode` is global node number.
- `ivar` is the physical variable number.
- `spacecompo` is the space component number.
- `timecompo` is the time component number.
- `scalarVal` is the scalar value, if present then the row will be Set to
this scalar value
- `vectorVal` is the vector value, if present then the row will be Set to
this vector value
- `nodeFieldVal` is the field of nodal values.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow
END INTERFACE
```

This routine sets the row of a sparse matrix. The row index is calculated by using the `globalNode`, `ivar` and `spacecompo`, `timecompo`.

- `globalNode` is global node number.
- `ivar` is the physical variable number.
- `spacecompo` is the space component number.
- `timecompo` is the time component number.
- `scalarVal` is the scalar value, if present then the row will be Set to
this scalar value
- `vectorVal` is the vector value, if present then the row will be Set to
this vector value
- `nodeFieldVal` is the field of nodal values.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow
END INTERFACE
```

This routine sets the row of a sparse matrix. The row index is calculated by using the `globalNode`, `ivar` and `spacecompo`, `timecompo`.

- `globalNode` is global node number.
- `ivar` is the physical variable number.
- `spacecompo` is the space component number.
- `timecompo` is the time component number.
- `scalarVal` is the scalar value, if present then the row will be Set to
this scalar value
- `vectorVal` is the vector value, if present then the row will be Set to
this vector value
- `nodeFieldVal` is the field of nodal values.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow
END INTERFACE
```

This routine sets the row of a sparse matrix. The row index is calculated by using the `globalNode`, `ivar` and `spacecompo`, `timecompo`.

- `globalNode` is global node number.
- `ivar` is the physical variable number.
- `spacecompo` is the space component number.
- `timecompo` is the time component number.
- `scalarVal` is the scalar value, if present then the row will be Set to
this scalar value
- `vectorVal` is the vector value, if present then the row will be Set to
this vector value
- `nodeFieldVal` is the field of nodal values.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>
