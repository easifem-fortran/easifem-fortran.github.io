# Set

Set entries in vector field.

Calling example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE set1(obj, globalNode, VALUE, &
    & scale, addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set1
END INTERFACE
```

This routine sets the single entry of the vector field.

Here, `value` should be a vector representing the components of a vector.

The size of `value` should be same as `obj%spaceCompo`.

In simple words it does following.

```txt
vector( 1:spaceCompo, globalNode ) = value( 1:spaceCompo )
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_VectorField_test_3.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE set2(obj, VALUE, scale, addContribution)
    CLASS(VectorFieldLis_), TARGET, INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set2
END INTERFACE
```

- This method sets all the nodal values to `value`
- The size of value should be same as the `obj%spaceCompo`

```txt
vector( 1:spaceCompo, i ) = value( 1:spaceCompo ), for i = 1, tNodes
```

## Interface 3

```fortran
 INTERFACE
 MODULE SUBROUTINE set3(obj, VALUE, spaceCompo, scale, addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set3
END INTERFACE
```

- This routine sets all values of `spaceCompo` component of the vector field to a given scalar value `value`.

```txt
vector( spaceCompo, i ) = value, for i = 1, tNodes
```

## Interface 4

```fortran
 INTERFACE
  MODULE SUBROUTINE set4(obj, VALUE, scale, addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set4
END INTERFACE
```

- This routine set all entries of vector field to given vector
- Here shape of should be `value(1:spaceCompo, tNodes)`.

```txt
vector( :, : ) = value( :, : )
```

## Interface 5

```fortran
 INTERFACE
 MODULE SUBROUTINE set5(obj, VALUE, spaceCompo, scale, addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set5
END INTERFACE
```

- This routine sets all entries of the component `spaceCompo` of VectorFieldLis to a given fortran vector `value`

```txt
vector( spaceCompo, : ) = value( : )
```

- The size of `value` should be equal to the tNodes.

## Interface 6

```fortran
INTERFACE
 MODULE SUBROUTINE set6(obj, VALUE, spaceCompo, scale, addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    TYPE(ScalarField_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set6
END INTERFACE
```

- This routine sets all entries of the component `spaceCompo` of VectorFieldLis to a given ScalarField `value`

```txt
vector( spaceCompo, : ) = value
```

## Interface 7

```fortran
INTERFACE
 MODULE SUBROUTINE set7(obj, VALUE, globalNode, scale, addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set7
END INTERFACE
```

- This soubroutine sets the selected enties to a vector entry `value( : )`
- Size of `value` should be equal to the `obj%spaceCompo`

```txt
Effectively it does the following:
vector( :, globalNode ) = value( : ), for entries in global nodes
```

## Interface 8

```fortran
INTERFACE
  MODULE SUBROUTINE set8(obj, globalNode, VALUE, scale, &
    & addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
  !! value is in value(i,J) format.
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set8
END INTERFACE
```

- This routine sets the selected entries.

```txt
 vector( :, globalNode ) = value( :, : )
```

## Interface 9

```fortran
 INTERFACE
  MODULE SUBROUTINE set9(obj, VALUE, globalNode, spaceCompo, scale, &
    & addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set9
END INTERFACE
```

- This routine sets the multiple values
- Size of `value` should be equal to size of `globalNode`

```txt
vector( spaceCompo, globalNode ) = value( : )
```

## Interface 10

```fortran
 INTERFACE
  MODULE SUBROUTINE set10(obj, VALUE, globalNode, spaceCompo, scale, &
    & addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set10
END INTERFACE
```

- This routine sets a single entry

## Interface 11

```fortran
 INTERFACE
  MODULE SUBROUTINE set13(obj, VALUE, globalNode, scale, &
    & addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    TYPE(FEVariable_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set13
END INTERFACE
```

Sets the multiple values using FEVariable.

## Interface 12

```fortran
INTERFACE
  MODULE SUBROUTINE set12(obj, VALUE, istart, iend, stride, scale, &
    & addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set12
END INTERFACE
```

## Interface 13

```fortran
 INTERFACE
  MODULE SUBROUTINE set13(obj, VALUE, globalNode, scale, &
    & addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    TYPE(FEVariable_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set13
END INTERFACE
```

## Interface 14

```fortran
 INTERFACE
  MODULE SUBROUTINE set14(obj, VALUE, scale, addContribution)
    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set14
END INTERFACE
```

- Sets all values
