# Set

Set entries in `STScalarField`.

Calling example:

<span class="badge badge--primary"> Set single entry </span>

```fortran
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B):: globalNode
    REAL(DFP):: VALUE(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set all entries </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    REAL(DFP):: VALUE(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set all enties of timecompo</span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    REAL(DFP):: VALUE
    INTEGER(I4B):: timeCompo
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set all entries </span>

```fortran
    REAL(DFP):: VALUE(:, :)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set all entries of timeCompo </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    REAL(DFP):: VALUE(:)
    INTEGER(I4B):: timeCompo
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set single entries of timeCompo</span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    TYPE(ScalarField_):: VALUE
    INTEGER(I4B):: timeCompo
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set the multiple entries </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    INTEGER(I4B):: globalNode(:)
    REAL(DFP):: VALUE(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set multiple entries </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    INTEGER(I4B):: globalNode(:)
    REAL(DFP):: VALUE(:, :)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set multiple entries of timeCompo </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    REAL(DFP):: VALUE(:)
    INTEGER(I4B):: globalNode(:)
    INTEGER(I4B):: timeCompo
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set single entry of a timeCompo </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    REAL(DFP):: VALUE
    INTEGER(I4B):: globalNode
    INTEGER(I4B):: timeCompo
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set multiple entries using triplets</span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    INTEGER(I4B):: istart
    INTEGER(I4B):: iend
    INTEGER(I4B):: stride
    REAL(DFP):: VALUE(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set multiple entries using triplets</span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    REAL(DFP):: VALUE(:, :)
    INTEGER(I4B):: istart
    INTEGER(I4B):: iend
    INTEGER(I4B):: stride
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set multiple entries using FEVariable </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    TYPE(FEVariable_):: VALUE
    INTEGER(I4B):: globalNode(:)
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

<span class="badge badge--primary"> Set all values </span>

```fortran
    CLASS(STScalarFieldLis_):: obj
    REAL(DFP):: VALUE
    REAL(DFP):: scale
    LOGICAL(LGT):: addContribution
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set1(obj, globalNode, VALUE, scale, &
      & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set1
END INTERFACE
```

- This routine sets the single entry of the STScalarField.
- Here, `value` should be a space-time scalar representing the components of a STScalar.
- The size of `value` should be same as `obj%timeCompo`.

```txt
In simple words it does following.
STScalar( :, globalNode ) = value( : )
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE151 from "./_STScalarField_test_3.md";

<EXAMPLE151 />

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
    CLASS(STScalarFieldLis_), TARGET, INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set2
END INTERFACE
```

This routine work as follows.

- The size of `value` should be same as `obj%timeCompo`, then this value is set for all the nodal values.

```txt
STScalar( 1:timeCompo, i ) = value( 1:timeCompo ), for i = 1, tNodes
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE196 from "./_STScalarField_test_4.md";

<EXAMPLE196 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Set3(obj, VALUE, timeCompo, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set3
END INTERFACE
```

- This routine sets all values of `timeCompo` component of the STScalarField to given scalar value `value`

```txt
STScalar( timeCompo, i ) = value, for i = 1, tNodes
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE235 from "./_STScalarField_test_5.md";

<EXAMPLE235 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Set4(obj, VALUE, scale, addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set4
END INTERFACE
```

- This routine sets all entries of STScalar field to a given `STScalarFieldLis_`
- Here, shape of `value` should be `value(1:timeCompo, tNodes)`.
- Rows of `value` denotes the time components
- Columns of `value` represents the spatial nodes.

```fortran
STScalar( :, : ) = value( :, : )
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE274 from "./_STScalarField_test_6.md";

<EXAMPLE274 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Set5(obj, VALUE, timeCompo, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set5
END INTERFACE
```

- This routine sets all entries of the component `timeCompo` of STScalarField to `value`

```txt
STScalar( timeCompo, 1:tNodes ) = value( 1:tNodes )
```

:::note
The size of `value` should be equal to the total number of spatial nodes.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE314 from "./_STScalarField_test_7.md";

<EXAMPLE314 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Set6(obj, VALUE, timeCompo, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    TYPE(ScalarField_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set6
END INTERFACE
```

- This routine sets all entries of the component `timeCompo` of STScalarField to given ScalarField `value`

```txt
STScalar( timeCompo, 1:tNodes ) = value(1:tNodes)
```

- The size of value should be same as the total number of nodes in `obj`.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE357 from "./_STScalarField_test_8.md";

<EXAMPLE357 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Set7(obj, VALUE, globalNode, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set7
END INTERFACE
```

This method sets the selected enties of a STScalarField to `value( : )`

```txt
Effectively it does the following:
STScalar( 1:timeCompo, globalNode ) = value( 1:timeCompo ), for entries in global nodes
```

:::note
size of `value` should be equal to the `obj%timeCompo`
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE398 from "./_STScalarField_test_9.md";

<EXAMPLE398 />

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
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set8
END INTERFACE
```

- This routine sets selected entries of STScalarField.

```txt
STScalar( 1:timeCompo, globalNode ) = value( 1:timeCompo, 1:size(globalNode) )
```

- `SIZE(value, 1)` should be equal to `obj%timeCompo`
- `SIZE(value, 2)` should be equal to `SIZE(globalNode)`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE442 from "./_STScalarField_test_10.md";

<EXAMPLE442 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Set9(obj, VALUE, globalNode, timeCompo, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set9
END INTERFACE
```

This routine sets the selected components of selected nodes to given value.

```txt
STScalar( timeCompo, globalNode ) = value( 1:SIZE(globalNode) )
```

:::note
size of globalNode should be equal to the size of value.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE484 from "./_STScalarField_test_11.md";

<EXAMPLE484 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 10

```fortran
 INTERFACE
  MODULE SUBROUTINE Set10(obj, VALUE, globalNode, timeCompo, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set10
END INTERFACE
```

- This routine sets the single entry of a given time components.

## Interface 11

```fortran
 INTERFACE
  MODULE SUBROUTINE Set11(obj, VALUE, istart, iend, stride, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set11
END INTERFACE
```

- Set multiple entries using triad

:::note
The size of value should be equal to `obj%timeCompo`
:::

## Interface 12

```fortran
INTERFACE
  MODULE SUBROUTINE Set12(obj, VALUE, istart, iend, stride, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set12
END INTERFACE
```

- Set multiple entries using triad

:::note
The number of rows in value should be equal to `obj%timeCompo`
:::

:::note
The number of cols in value should be equal to size of `istart:iend:stride`
:::

## Interface 13

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Set13(obj, VALUE, globalNode, scale, &
    & addContribution)
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    TYPE(FEVariable_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set13
END INTERFACE
```

- Set the value by using FEVariable

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE596 from "./_STScalarField_test_12.md";

<EXAMPLE596 />

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
    CLASS(STScalarFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE Set14
END INTERFACE
```

- Set all the values of STScalarField to a scalar value `Value`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE631 from "./_STScalarField_test_13.md";

<EXAMPLE631 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
