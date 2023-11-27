# Set

Set entries in vector field

Calling example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set1(obj, globalNode, VALUE, scale, &
    & addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set1
END INTERFACE
```

- This routine sets the single entry of the vector field.
- Here, `value`  represents the space-time values at a node.
- The shape of `value` should be same as (`obj%spaceCompo`, `obj%timeCompo`).

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_STVectorField_test_3.md";

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
  MODULE SUBROUTINE Set2(obj, VALUE, scale, addContribution)
    CLASS(STVectorField_), TARGET, INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set2
END INTERFACE
```

- This method sets all the nodal values to `value`
- Here, `value`  represents the space-time values at a node.
- The shape of `value` should be same as (`obj%spaceCompo`, `obj%timeCompo`).

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE46 from "./_STVectorField_test_4.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

```fortran
INTERFACE
  MODULE SUBROUTINE Set3(obj, VALUE, spaceCompo, timeCompo, &
    & scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set3
END INTERFACE 
```

- This method sets all the nodal values to `value`
- Here, `value`  represents the value of space-time component.

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set4(obj, VALUE, scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:, :, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set4
END INTERFACE
```

- This routine set all entries of space-time vector field.
- All spatial values of all space-time components are set.
- `value` denotes the space-time nodal vector.
- shape of `value` is `(spaceCompo, timeCompo, tNodes)`.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE101 from "./_STVectorField_test_6.md";

<EXAMPLE101 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set5(obj, VALUE, spaceCompo, timeCompo,  &
    & scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set5
END INTERFACE 
```

- This routine sets all entries
- The entries are selected by specifying `spaceCompo` and `timeCompo`
- Size of value should be equal to the `tNodes`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE136 from "./_STVectorField_test_7.md";

<EXAMPLE136 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set6(obj, VALUE, spaceCompo, timeCompo,  &
    & scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    CLASS(ScalarField_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set6
END INTERFACE
```

- This routine sets all entries
- The entries are selected by specifying `spaceCompo` and `timeCompo`
- Size of value should be equal to the `tNodes`
- Value can be an instance of child of ScalarField.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE176 from "./_STVectorField_test_8.md";

<EXAMPLE176 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set7(obj, VALUE, globalNode, scale,  &
    & addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set7
END INTERFACE
```

- Set multiple entries to constant space-time values
- `value` denotes the space-time value at a node
- shape of `value` should be `(spaceCompo, timeCompo)`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE213 from "./_STVectorField_test_9.md";

<EXAMPLE213 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set8(obj, globalNode, VALUE, scale, &
    & addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:, :, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set8
END INTERFACE
```

This routine sets selected entries of space-time vector field. Here
`globalNode` contains the list of global nodes where values will be changed.

- `value` is a rank-3 array in `iaJ` format.
  - Its first index denotes the space component,
  - second index denotes the time components
  - third component denotes the space node number.

:::note
The size of dimension should be equal to the size of globalNode.
:::

- This routine sets the selected entries.
- Size of globalNode should be same as `size(value, 3)`.
- `value` denotes the spacet-time nodal values of `globalNode`.
- number of rows in `value` should be `spaceCompo`.
- number of columns in `value` should be `timeCompo`.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE252 from "./_STVectorField_test_10.md";

<EXAMPLE252 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set9(obj, VALUE, globalNode, spaceCompo,  &
    & timeCompo, scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set9
END INTERFACE 
```

- This routine sets the multiple values of a space-time component.
- Size of `value` should be equal to size of `globalNode`.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE289 from "./_STVectorField_test_11.md";

<EXAMPLE289 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 10

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set10(obj, VALUE, globalNode, spaceCompo, &
    & timeCompo, scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set10
END INTERFACE 
```

- This routine sets a single entry of space-time component

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE330 from "./_STVectorField_test_12.md";

<EXAMPLE330 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 11

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set11(obj, VALUE, istart, iend, stride,  &
    & scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set11
END INTERFACE 
```

- Sets multiple values using triplets.
- `value` denotes the space-time values at a single node.
- Shape of `value` should be (`spaceCompo, timeCompo`).

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE367 from "./_STVectorField_test_13.md";

<EXAMPLE367 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 12

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set12(obj, VALUE, istart, iend, stride,  &
    & scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:, :, :)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set12
END INTERFACE
```

- Sets multiple values using triplets.
- `value` denotes the space-time values at several nodes.
- `value(:,:,i)` denotes the space-time value at ith node.
- Shape of `value(:,:,i)` should be (`spaceCompo, timeCompo`).

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE406 from "./_STVectorField_test_14.md";

<EXAMPLE406 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 13

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set13(obj, VALUE, globalNode, scale, &
    & addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    TYPE(FEVariable_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set13
END INTERFACE
```

- Set multiple values by using FEVariable.
- FEVariable, `value`, should be of `SpaceTime` type

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE446 from "./_STVectorField_test_15.md";

<EXAMPLE446 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 14

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set14(obj, VALUE, scale, addContribution)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set14
END INTERFACE 
```

- Sets all values to a given scalar value.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE482 from "./_STVectorField_test_16.md";

<EXAMPLE482 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
