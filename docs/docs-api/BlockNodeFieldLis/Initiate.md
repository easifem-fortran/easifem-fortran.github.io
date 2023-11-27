# Initiate

This method constructs an instance of BlockNodeField.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>

<TabItem value="1" label="Interface 1" default>

```fortran
ABSTRACT INTERFACE
SUBROUTINE Initiate( obj, param, dom )
  IMPORT :: AbstractField_, ParameterList_, Domain_
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj
  TYPE( ParameterList_), INTENT( IN ) :: param
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>

</Tabs>

## Interface 2

<Tabs>

<TabItem value="2" label="Interface 2">

Initiate by copying from other fields

```fortran
ABSTRACT INTERFACE
SUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &
  & usePointer )
  IMPORT :: AbstractField_, LGT
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj2
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>

</Tabs>

## Interface 3

<Tabs>

<TabItem value="3" label="Interface 3">

Initiate by reading from parameters. This is used for block data structure.

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Initiate(obj, param, dom)
    IMPORT :: AbstractField_, ParameterList_, DomainPointer_
    CLASS(AbstractField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>

</Tabs>
