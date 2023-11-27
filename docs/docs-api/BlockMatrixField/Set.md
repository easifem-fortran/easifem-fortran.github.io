# Set

Set entries of MatrixField.

Calling example:

```fortran {2,4,5}
CALL Set(
MatrixField_::obj
real::value 
<int::scale >
<bool::addContribution>
)
```

```fortran {8,9}
Set( 
  MatrixField_ :: obj
  int :: iNodeNum(:)
  int ::  jNodeNum(:)
  int ::  ivar
  int :: jvar
  real::  value(:,:)
  <real:: scale>
  <bool:: addContribution>
)
```

```fortran {10,11}
CALL Set( 
  MatrixField_ :: obj
  int :: iNodeNum(:)
  int :: jNodeNum(:)
  int :: ivar
  int :: jvar
  int :: idof
  int :: jdof
  real:: value(:,:)
  <real:: scale>
  <bool:: addContribution>
)
```

```fortran {10,11}
CALL Set( 
  MatrixField_:: obj
  int :: iNodeNum(:)
  int :: jNodeNum(:)
  int :: ivar
  int :: jvar
  int :: idof
  int :: jdof
  real :: value(:,:)
  <real :: scale>
  <bool :: addContribution>
  )
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>

<TabItem value="interface-2" label="𑗍 Set" >

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, value, scale, &
  & addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

IF `addContribution` and `scale` are ABSENT then:

- This subroutine sets a scalar value `value` to all the entries of the matrix.
- Symbolically, we peform `obj=value`

</TabItem>

</Tabs>

## Interface 2

<Tabs>

<TabItem value="interface-4" label="𑗍 Set" >

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, &
  & jvar, value, scale, addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: ivar
  INTEGER( I4B ), INTENT( IN ) :: jvar
  REAL( DFP ), INTENT( IN ) :: value(:,:)
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

- If addContribution and scale are NOT present then:
  - This subroutine sets a block of data to matrix.
  - This block data is contained in `value(:,:)`.
  - The number of rows in `value` should be `SIZE( iNodeNum ) * itdof`, where `itdof` is the total degrees of freedom in row dimension.
  - The number of columns in `value` should be `SIZE( jNodeNum ) * jtdof`, where `jtdof` is the total degrees of freedom in column dimension.
  - globalNode contains the global node number
  - This entry is specified by the `iNodeNum` and `jNodeNum`, which are global node number.
  - The exact location of the entry is computed using `iNodeNum`, `ivar`, `jNodeNum` and `jvar`.
- If addContribution and scale present then we add contribution to matrix, instead of setting the value.

:::info
Storage format of `value` should be `FMT_DOF` because the storage format of MatrixField_ is `FMT_DOF`.
:::

</TabItem>

</Tabs>

## Interface 3

<Tabs>

<TabItem value="interface-5" label="𑗍 Set" >

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, &
  & jvar, idof, jdof, value, scale, addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: ivar
  INTEGER( I4B ), INTENT( IN ) :: jvar
  INTEGER( I4B ), INTENT( IN ) :: idof
  INTEGER( I4B ), INTENT( IN ) :: jdof
  REAL( DFP ), INTENT( IN ) :: value(:,:)
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

- If addContribution and scale are NOT present then:
  - This subroutine sets a block of data to matrix.
  - This block data is contained in `value(:,:)`
  - The size of `value` should be `SIZE(iNodeNum)`, `SIZE(jNodeNum)`
  - globalNode contains the global node number
  - This entry is specified by the `iNodeNum` and `jNodeNum`, which are global node number.
  - The exact location of the entry is computed using `iNodeNum`, `ivar`, `idof`, `jNodeNum` and `jvar`, `jdof`.
- If addContribution and scale present then we add contribution to matrix, instead of setting the value.

</TabItem>

</Tabs>

## Interface 4

<Tabs>

<TabItem value="interface-6" label="𑗍 Set" >

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &
  & idof, jdof, value, scale, addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum
  INTEGER( I4B ), INTENT( IN ) :: ivar
  INTEGER( I4B ), INTENT( IN ) :: jvar
  INTEGER( I4B ), INTENT( IN ) :: idof
  INTEGER( I4B ), INTENT( IN ) :: jdof
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

If `addContribution` and `scale` are NOT PRESENT, then:

- This subroutine sets a scalar value `value` to a single entry of the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using `iNodeNum`, `idof`, `ivar`, and `jNodeNum`, `jdof`, `jvar`.

- If addContribution and scale present then we add contribution to matrix, instead of setting the value.

</TabItem>

</Tabs>

## Interface 5

<Tabs>

<TabItem value="interface-7" label="𑗍 Set">

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &
  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &
  & addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum
  INTEGER( I4B ), INTENT( IN ) :: ivar
  INTEGER( I4B ), INTENT( IN ) :: jvar
  INTEGER( I4B ), INTENT( IN ) :: ispacecompo
  INTEGER( I4B ), INTENT( IN ) :: itimecompo
  INTEGER( I4B ), INTENT( IN ) :: jspacecompo
  INTEGER( I4B ), INTENT( IN ) :: jtimecompo
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

If addContribution and scale are NOT present then:

- This subroutine sets a scalar value `value` to a single entry of the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using (`iNodeNum`, `ivar`, `ispacecompo`, `itimecompo`) and (`jNodeNum`, `jvar`, `jspacecompo`, `jtimecompo`).

If addContribution and scale present, then this subroutine adds a scalar value `value` to a single entry of the matrix.

</TabItem>

</Tabs>

## Interface 6

<Tabs>

<TabItem value="interface-8" label="𑗍 Set">

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &
  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &
  & addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: ivar
  INTEGER( I4B ), INTENT( IN ) :: jvar
  INTEGER( I4B ), INTENT( IN ) :: ispacecompo
  INTEGER( I4B ), INTENT( IN ) :: itimecompo
  INTEGER( I4B ), INTENT( IN ) :: jspacecompo
  INTEGER( I4B ), INTENT( IN ) :: jtimecompo
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

If addContribution and scale are NOT present then:

- This subroutine sets `value` to the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using (`iNodeNum`, `ivar`, `ispacecompo`, `itimecompo`) and (`jNodeNum`, `jvar`, `jspacecompo`, `jtimecompo`).

If addContribution and scale present, then this subroutine adds `value` to the matrix.

</TabItem>

</Tabs>

## Interface 7

<Tabs>

<TabItem value="interface-9" label="𑗍 Set">

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &
  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &
  & addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: ivar
  INTEGER( I4B ), INTENT( IN ) :: jvar
  INTEGER( I4B ), INTENT( IN ) :: ispacecompo
  INTEGER( I4B ), INTENT( IN ) :: itimecompo(:)
  INTEGER( I4B ), INTENT( IN ) :: jspacecompo
  INTEGER( I4B ), INTENT( IN ) :: jtimecompo(:)
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

If addContribution and scale are not present then:

- This subroutine sets `value` to the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using (`iNodeNum`, `ivar`, `ispacecompo`, `itimecompo`) and (`jNodeNum`, `jvar`, `jspacecompo`, `jtimecompo`).

If addContribution and scale present, then this subroutine adds `value` to the matrix.

</TabItem>

</Tabs>

## Interface 8

<Tabs>

<TabItem value="interface-10" label="𑗍 Set" default>

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, ivar, jvar, &
  & ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale, &
  & addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum(:)
  INTEGER( I4B ), INTENT( IN ) :: ivar
  INTEGER( I4B ), INTENT( IN ) :: jvar
  INTEGER( I4B ), INTENT( IN ) :: ispacecompo(:)
  INTEGER( I4B ), INTENT( IN ) :: itimecompo
  INTEGER( I4B ), INTENT( IN ) :: jspacecompo(:)
  INTEGER( I4B ), INTENT( IN ) :: jtimecompo
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

If addContribution and scale are not present then:

- This subroutine sets `value` to the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using (`iNodeNum`, `ivar`, `ispacecompo`, `itimecompo`) and (`jNodeNum`, `jvar`, `jspacecompo`, `jtimecompo`).

If addContribution and scale present, then this subroutine adds `value` to the matrix.

</TabItem>

</Tabs>
