# Get

Get the entries from scalar field.

Calling examples:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE get1(obj, VALUE, globalNode)
    CLASS(ScalarField_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
  END SUBROUTINE get1
END INTERFACE
```

Get a single entry.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE12 from "./_ScalarField_test_11.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE get2(obj, VALUE)
    CLASS(ScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
  END SUBROUTINE get2
END INTERFACE
```

Get all entries in a vector of reals.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE48 from "./_ScalarField_test_12.md";

<EXAMPLE48 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE get3(obj, VALUE, globalNode)
    CLASS(ScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
  END SUBROUTINE get3
END INTERFACE
```

Get all multiple entries.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE75 from "./_ScalarField_test_13.md";

<EXAMPLE75 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE get4(obj, VALUE, istart, iend, stride)
    CLASS(ScalarField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
  END SUBROUTINE get4
END INTERFACE
```

Get multiple entries by using triplets.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE107 from "./_ScalarField_test_14.md";

<EXAMPLE107 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE get5(obj, VALUE, globalNode)
    CLASS(ScalarField_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: VALUE
  !! Scalar Nodal FEVariable
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
  END SUBROUTINE get5
END INTERFACE
```

Get multiple entries in [FEVariable](../FEVariable/FEVariable_.md)

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE141 from "./_ScalarField_test_15.md";

<EXAMPLE141 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

```fortran
INTERFACE
  MODULE SUBROUTINE get6(obj, VALUE)
    CLASS(ScalarField_), INTENT(IN) :: obj
    CLASS(ScalarField_), INTENT(INOUT) :: VALUE
  END SUBROUTINE get6
END INTERFACE
```

Get a scalarfield in an instance of scalar field.
