# Get

Get entries of field.

Calling example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE get1(obj, VALUE, globalNode, timeCompo)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNode
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeCompo
  END SUBROUTINE get1
END INTERFACE
```

:::note
Both `globalNode` and `timeCompo` cannot be present.
:::

- If `globalNode` is present then temporal value are returned
- If `timeCompo` is present then spatial values are returned

</TabItem>

<TabItem value="example1" label="܀ Example 1">

import EXAMPLE38 from "./_STScalarField_test_14.md";

<EXAMPLE38 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE get2(obj, VALUE)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
  END SUBROUTINE get2
END INTERFACE
```

Get all the values.

- Number of rows in value is equal to the `obj%timecompo`
- Number of col in value is equal to the `obj%domain%tNodes`

</TabItem>

<TabItem value="example1" label="Example 1" default>

import EXAMPLE71 from "./_STScalarField_test_16.md";

<EXAMPLE71 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stsField_get3(obj, VALUE, globalNode)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
  END SUBROUTINE stsField_get3
END INTERFACE
```

Get multiple values.

- Total number of rows in value is `obj%timeCompo`
- Total number of columns in value are `obj%domain%tnodes`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE84 from "./_STScalarField_test_17.md";

<EXAMPLE84 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE stsField_get4(obj, VALUE, globalNode, timeCompo)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE stsField_get4
END INTERFACE
```

Get multiple values of timeCompo.

- size of value is equal to the size of globalNode

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE119 from "./_STScalarField_test_18.md";

<EXAMPLE119 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE stsField_get5(obj, VALUE, globalNode, timeCompo)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE stsField_get5
END INTERFACE
```

Get the single value of timeCompo.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE155 from "./_STScalarField_test_19.md";

<EXAMPLE155 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

```fortran
 INTERFACE
  MODULE SUBROUTINE stsField_get6(obj, VALUE, istart, iend, stride)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
  END SUBROUTINE stsField_get6
END INTERFACE
```

Get multiple values using triplets.

## Interface 7

```fortran
INTERFACE
  MODULE SUBROUTINE stsField_get7(obj, VALUE, istart, iend, stride, timeCompo)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE stsField_get7
END INTERFACE
```

Get multiple values using triplets

## Interface 8

```fortran
INTERFACE
  MODULE SUBROUTINE stsField_get8(obj, VALUE, globalNode)
    CLASS(STScalarField_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: VALUE
  !! Nodal, Vector, SpaceTime
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
  END SUBROUTINE stsField_get8
END INTERFACE
```

Get multiple values in FEVariable.

## Interface 9

```fortran
INTERFACE
  MODULE SUBROUTINE stsField_get9(obj, VALUE, timeCompo)
    CLASS(STScalarField_), INTENT(IN) :: obj
    CLASS(ScalarField_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE stsField_get9
END INTERFACE
```

Get `STScalarField_` in an instance of `ScalarField_`.
