# Initiate

This method constructs an instance of AbstractField.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>

<TabItem value="1" label="Initiate" default>

```fortran
INTERFACE
SUBROUTINE Initiate( obj, param, dom )
  CLASS( ScalarField_), INTENT( INOUT ) :: obj
  TYPE( ParameterList_), INTENT( IN ) :: param
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE45 from "./_ScalarField_test_1.md";

<EXAMPLE45 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>

## Interface 2

<Tabs>

<TabItem value="2" label="Initiate" default>

Initiate by copying from other fields

```fortran
INTERFACE
SUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &
  & usePointer )
  CLASS( ScalarField_ ), INTENT( INOUT ) :: obj
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj2
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

</Tabs>

## Interface 3

<Tabs>

<TabItem value="3" label="Initiate">

Initiate by reading from parameters. This is used for block data structure.

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param, dom)
    CLASS(ScalarField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

</Tabs>
