# Set

`SET()` method helps us in setting the values of `CSRMatrix_`.

:::note
You can only use `SET()` method after setting sparsity pattern in sparse matrix.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, nodenum, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    REAL(DFP), INTENT(IN) :: value(:, :)
  END SUBROUTINE Set
END INTERFACE
```

- This subroutine sets the value in `CSRMatrix_`
- `Shape( value ) = [SIZE(nodenum)*tdof, SIZE(nodenum)*tdof]`
- Usually `value` denotes the element matrix
- Symbolic we are performing following task `obj(nodenum, nodenum)=value`

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, nodenum, value, storageFMT)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    REAL(DFP), INTENT(IN) :: value(:, :)
    INTEGER(I4B), INTENT(IN) :: storageFMT
  END SUBROUTINE Set
END INTERFACE
```

Symbolically we are performing following: `obj(Nptrs,Nptrs)=value(:,:)`

- Usually `value(:,:)` represents the element finite element matrix
- The shape of `value` should be the `tdof*size(nodenum), tdof*size(nodenum)`
- `tdof` is the total degree of freedom in `obj%csr%dof`
- `StorageFMT` denotes the storage format of `value`. It can be `Nodes_FMT` or `DOF_FMT`
- Usually, element matrix is stored with `DOF_FMT`

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: value
  END SUBROUTINE Set
END INTERFACE
```

- This routine sets all values of sparse matrix to given scalar value.
- This routine is used to define an ASSIGNMENT operator. Therefore, we can call this routine by `obj=value`.

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, irow, icolumn, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: irow
    INTEGER(I4B), INTENT(IN) :: icolumn
    REAL(DFP), INTENT(IN) :: value
  END SUBROUTINE Set
END INTERFACE
```

- This subroutine sets a single entry of sparse matrix.
- If this routine is called then it is assumed that the user is aware of the storage pattern of degree of freedom.
- However, if total number of degrees of freedom is one then there is no need to worry.

:::caution
This routine should be avoided by general user.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, iDOF, &
    & jDOF, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    !! column node number
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: value
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

- This routine sets the specific row and column entry to a given value.
- The irow and icolumn index in `CSRMatrix_` are calculated by using (iNodeNum, iDOF) and (jNodeNum, jDOF), respectively.
- To do the above task, the routine employs [GetNodeLoc](../DOF/GetNodeLoc.md) method
- After computing the irow and icolumn (internally) this routine calls, `csrMat_set3`.
- General user should prefer this routine over interface 4.
- `rowdof`, `coldof` are continuously numbered, so if there are two or more physical variables, then `rowdof` and `coldof` of the second or later physical variables will not start from 1.

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

- This subroutine sets selected values of the sparse matrix to the scalar value `value`
- This routine corresponds to `obj(nodenum) = value`

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, nodenum, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    REAL(DFP), INTENT(IN) :: value
  END SUBROUTINE Set
END INTERFACE
```

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, &
    & ivar, jvar, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    REAL(DFP), INTENT(IN) :: value(:, :)
  END SUBROUTINE Set
END INTERFACE
```

- This subroutine sets the values in block sparse matrix.
- The storage pattern of both sparse matrix and value (the element matrix) should be in `FMT_DOF`.
- Symbolically we performed: `obj(Nptrs,Nptrs)=value(:,:)`.

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: value
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

- This routine sets the specific row and column entry to a given value.
- The irow and icolumn index in `CSRMatrix_` are calculated by using (iNodeNum, iDOF) and (jNodeNum, jDOF), respectively.
- To do the above task, the routine employs [GetNodeLoc](../DOF/GetNodeLoc) method
- After computing the irow and icolumn (internally) this routine calls, `csrMat_set3`.

:::info
General user should prefer this routine over Interface 4
:::

rowdof, coldof are continuously numbered, so if there are two or more physical variables, then rowdof and coldof of the second or later physical variables will not start from 1.

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: value(:, :)
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 10

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: value
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

- This routine sets the specific row and column entry to a given value.
- The irow and icolumn index in [CSRMatrix](CSRMatrix_.md) are calculated by using (iNodeNum, iDOF) and (jNodeNum, jDOF), respectively.
- To do the above task, the routine employs [GetNodeLoc](../DOF/GetNodeLoc) method
- After computing the irow and icolumn (internally) this routine calls, `csrMat_set3`.
- General user should prefer this routine over.

:::note
rowdof, coldof are continuously numbered, so if there are two or more physical variables, then rowdof and coldof of the second or later physical variables will not start from 1.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 11

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, &
    & ivar, jvar, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    REAL(DFP), INTENT(IN) :: value
  END SUBROUTINE Set
END INTERFACE
```

- This subroutine sets the values in block sparse matrix.
- The storage pattern of both sparse matrix and value (the element matrix) should be in `FMT_DOF`.
- Symbolically, we perform `obj(Nptrs,Nptrs)=value(:,:)`

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 12

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: value
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 13

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: value
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interfac 14

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo(:)
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo(:)
    REAL(DFP), INTENT(IN) :: value
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 15

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Set(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, value)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo(:)
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo(:)
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: value
    !! scalar value to be set
  END SUBROUTINE Set
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
