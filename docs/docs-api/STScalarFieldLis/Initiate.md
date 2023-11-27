# Initiate

This method constructs an instance of AbstractField.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="1" label="Interface 1" default>

```fortran
INTERFACE
SUBROUTINE Initiate( obj, param, dom )
  CLASS( STScalarField_), INTENT( INOUT ) :: obj
  TYPE( ParameterList_), INTENT( IN ) :: param
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="2" label="Interface 2">

Initiate by copying from other fields

```fortran
INTERFACE
SUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &
  & usePointer )
  CLASS( STScalarField_), INTENT( INOUT ) :: obj
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj2
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="3" label="Interface 3">

Initiate by reading from parameters. This is used for block data structure.

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param, dom)
    CLASS(STScalarField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

</Tabs>
