# Get

Get entries from vector field.

Calling example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get1(obj, VALUE, globalNode, spaceCompo, &
    & timeCompo)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNode
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: spaceCompo
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeCompo
  END SUBROUTINE stvField_get1
END INTERFACE
```

- If `globalnode` is present then this routine returns the space-time values at the `globalnode`. Note that the returned values are stored in `value` in `NODES_FMT` format. You can get the space-time nodal values by reshaping `value`, that is, `reshape(value, [spaceCompo, timeCompo])`.

- If `spaceCompo` and `timeCompo` are present, then this routine returns all the nodal values of specified space-time component. The size of  `value` will be `tNodes`.

- If `spaceCompo` is present and `timeCompo` is not present, then this routine returns nodal values of all time components in `value`. The data is stored in `NODES_FMT`. Therefore, by reshaping `value` as `reshape(value, [timeCompo, tNodes])` you can retrive data.

- If `timeCompo` is present and `spaceCompo` is not present, then this routine returns  nodal values of all space components in `value`. The data is stored in `NODES_FMT`. Therefore, by reshaping `value` as `reshape(value, [spaceCompo, tNodes])` you can retrive data.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_STVectorField_test_17.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get2(obj, VALUE)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :, :)
  END SUBROUTINE stvField_get2
END INTERFACE
```

- This routine returns all nodal values of all space-time components.
- The shape of `value` is (`spaceCompo, timeCompo, tNodes`).

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE53 from "./_STVectorField_test_18.md";

<EXAMPLE53 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get3(obj, VALUE, globalNode)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :, :)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
  END SUBROUTINE stvField_get3
END INTERFACE
```

- This routine returns space-time nodal values of global nodes
- The shape of `value` is (`spaceCompo, timeCompo, size(globalNode)`)

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE85 from "./_STVectorField_test_19.md";

<EXAMPLE85 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get4(obj, VALUE, globalNode, spaceCompo, &
    & timeCompo)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE stvField_get4
END INTERFACE
```

- This method returns the nodal value of a given space-time component.
- The size of `value` is same as the size of `globalNode`.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE118 from "./_STVectorField_test_20.md";

<EXAMPLE118 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get5(obj, VALUE, globalNode, spaceCompo, &
    & timeCompo)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE stvField_get5
END INTERFACE
```

- This method returns a single entry of a space-time component at a given node.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE154 from "./_STVectorField_test_21.md";

<EXAMPLE154 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get6(obj, VALUE, istart, iend, stride)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :, :)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
  END SUBROUTINE stvField_get6
END INTERFACE
```

- This routine returns space-time nodal values at multiple nodes.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE189 from "./_STVectorField_test_22.md";

<EXAMPLE189 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get7(obj, VALUE, istart, iend, stride, &
    & spaceCompo, timeCompo)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE stvField_get7
END INTERFACE
```

- This routine returns the nodal values of specified space-time component
- Node numbers are specified by triplets

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE223 from "./_STVectorField_test_23.md";

<EXAMPLE223 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get8(obj, VALUE, globalNode)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: globalNode
  END SUBROUTINE stvField_get8
END INTERFACE
```

- This method returns the space-time nodal value at a given node.
- The shape of `value` is (`spaceCompo`, `timeCompo`).

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE261 from "./_STVectorField_test_24.md";

<EXAMPLE261 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get9(obj, VALUE, globalNode)
    CLASS(STVectorField_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
  END SUBROUTINE stvField_get9
END INTERFACE
```

- This routine returns space-time nodal value of specified nodes in FEVariable.
- `value` is FEVariable of SpaceTime type.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE294 from "./_STVectorField_test_25.md";

<EXAMPLE294 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 10

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_get10(obj, VALUE, spaceCompo, timeCompo)
    CLASS(STVectorField_), INTENT(IN) :: obj
    CLASS(AbstractNodeField_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: spaceCompo
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeCompo
  END SUBROUTINE stvField_get10
END INTERFACE
```

- This method returns the space component as an instance of AbstractNodeField.
