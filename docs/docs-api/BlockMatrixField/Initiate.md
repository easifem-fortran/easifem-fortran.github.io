# Initiate

This method constructs an instance of BlockMatrixField.

Calling examples:

```fortran
CALL Initiate( BlockMatrixField_ :: obj, ParameterList_ :: param, Domain_ :: dom )
```

```fortran
CALL Initiate( &
  & BlockMatrixField_ :: obj, &
  & BlockMatrixField_ :: obj2 &
  <& , Bool::copyFull> &
  <& , Bool::copyStructure> &
  <& , Bool :: usePointer> )
```

```fortran
CALL Initiate( &
  & BlockMatrixField_ :: obj, &
  & ParameterList_ :: param, &
  & DomainPointer_ :: dom)
```

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="1" label="Interface 1" default>

```fortran
INTERFACE
SUBROUTINE Initiate( obj, param, dom )
  CLASS( BlockMatrixField_ ), INTENT( INOUT ) :: obj
  TYPE( ParameterList_), INTENT( IN ) :: param
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Initiate
END INTERFACE
```

This routine creates a square sparse matrix.

This routine initiates an instance of [BlockMatrixField_](BlockMatrixField_.md).
The options/arguments to initiate the matrix field are
contained inside param, which is an instance of [ParameterList_](../ParameterList/ParameterList_.md).
In addition, [Domain_](../Domain/Domain_.md) `dom` is target to the pointer `obj%domain`.

- Param contains both essential and optional parameters which are used in
constructing the matrix field
- dom is a pointer to a domain, where we are interested in constructing the
matrix

ESSENTIAL PARAMETERS are

- `name` This is name of field (char)
- `matrixProp`, UNSYM, SYM (char)
- `engine`

OPTIONAL PARAMETERS

- `spaceCompo`, INT, default is 1
- `timeCompo`, INT, default is 1
- `fieldType`, INT, default is FIELD_TYPE_NORMAL

</TabItem>

<TabItem value="example" label="܀ Examples" default>

import EXAMPLE74 from "./BlockMatrixField_test_2.md";

<EXAMPLE74 />

</TabItem>

</Tabs>

## Interface 2

<Tabs>

<TabItem value="2" label="Interface 2" default>

```fortran
INTERFACE
SUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &
  & usePointer )
  CLASS( BlockMatrixField_ ), INTENT( INOUT ) :: obj
  CLASS( BlockMatrixField_ ), INTENT( INOUT ) :: obj2
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer
END SUBROUTINE Initiate
END INTERFACE
```

:::info
This method is inherited from [MatrixField](../MatrixField/Initiate.md)
:::

Initiate by copying from other fields. This routine initiates the `obj` [MatrixField_](../MatrixField/MatrixField_.md) by copying contents from `obj2`, an instance of child class of [AbstractField_](../AbstractField/AbstractField_.md).

If `copyFull, copyStructure, usePointer` are absent then this subroutine,
copies the value of the matrix from obj2 to obj.

At present, the routine works for `copyFull=.TRUE., copyStructure=.TRUE.,
usePointer=.TRUE.`, which equivalent to the default behavior.

- [ ] TODO Add functionality for other options too.

:::note
`obj2` should be an instance of `MatrixField_`
:::

</TabItem>

<TabItem value="example" label="܀ Examples">

import EXAMPLE121 from "./BlockMatrixField_test_3.md";

<EXAMPLE121 />

</TabItem>

</Tabs>

## Interface 3

<Tabs>

<TabItem value="3" label="Interface 3" default>

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param, dom)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)
  END SUBROUTINE Initiate
END INTERFACE
```

- The matrix has a block struture, wherein, col and rows corresponds to the different physical variables.

The rectan

</TabItem>

<TabItem value="example" label="܀ Examples">

</TabItem>

</Tabs>
