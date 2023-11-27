# Set

Set entries of MatrixField.

Calling example:

```fortran {6,7}
Set( 
  MatrixField_::obj
  int::globalNode(:)
  real::value(:,:)
  int::storageFMT
  <real::scale>
  <bool::addContribution> 
)
```

```fortran {2,4,5}
CALL Set(
MatrixField_::obj
<int::globalNode(:)>
real::value 
<int::scale >
<bool::addContribution>
)
```

```fortran {8,9}
CALL Set(
  MatrixField_ :: obj
  int :: iNodeNum
  int :: jNodeNum
  int :: idof
  int :: jdof
  real :: value
  <real :: scale>
  <bool :: addContribution>
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
<TabItem value="interface-1" label="𑗍 Set  1" default>

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, globalNode, value, storageFMT, scale,  &
  & addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: globalNode(:)
  REAL( DFP ), INTENT( IN ) :: value(:,:)
  INTEGER( I4B ), INTENT( IN ) :: storageFMT
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

IF `addContribution` and `scale` is ABSENT then:

- This subroutine sets a block of data to matrix.
- This block data is contained in `value(:,:)`
- The size of `value` should be `tdof *size( globalNode )`, where
 `tdof` is the total degrees of freedom
- `globalNode` contains the global node number
- `storageFMT` is the storage format of `value(:,:)`, it can be `DOF_FMT`, or
 `FMT_NODES`.

If `addContribution` and `scale` are present then:

- This subroutine adds a block of data to matrix.
- This block data is contained in `value(:,:)`
- The size of `value` should be `tdof* size( globalNode )`
- `globalNode` contains the global node number
- `storageFMT` is the storage format of `value(:,:)`, it can be `DOF_FMT`, or `FMT_NODES`.
- `scale` is scaling used for value.

:::caution
This method cannot be called for Rectangle MatrixField
:::

</TabItem>

</Tabs>

## Interface 2

<Tabs>

<TabItem value="interface-2" label="𑗍 Set  2" >

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, globalNode, value, scale, &
  & addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: globalNode(:)
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

IF `addContribution` and `scale` are ABSENT then:

- This subroutine sets a scalar value `value` to all or selected the entries of the matrix.
- If `globalNode` is present then this routine sets a scalar value `value` to select the entries of the matrix. These entries are spacified by the `globalNode(:)` vector, which denotes the global node numbers. Then, symbolically, we perform `obj(glocalNode)=value`.
- If `globalNode` is absent then all entries are set to the scalar values. Then, symbolically, we peform `obj=value`

IF `addContribution` and `scale` NOT PRESENT

- If `globalNode` is not present then, this subroutine adds a scalar value `value` to all the entries of the matrix. Symbolically, we perform `obj=obj+scale*value`
- If `globalNode` is present then, This subroutine adds a scalar value `value` to select the entries of the matrix. These entries are spacified by the `globalNode(:)` vector, which denotes the global node numbers. Symbolically, we perform `obj(glocalNode)=obj(globalNode)+scale*value`

:::caution When `globalNode` is present, then this method cannot be called for Rectangle MatrixField.
:::

</TabItem>

</Tabs>

## Interface 3

<Tabs>

<TabItem value="interface-3" label="𑗍 Set  3" >

```fortran
INTERFACE
MODULE SUBROUTINE Set( obj, iNodeNum, jNodeNum, idof, &
  & jdof, value, scale, addContribution )
  CLASS( MatrixField_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: iNodeNum
  INTEGER( I4B ), INTENT( IN ) :: jNodeNum
  INTEGER( I4B ), INTENT( IN ) :: idof
  INTEGER( I4B ), INTENT( IN ) :: jdof
  REAL( DFP ), INTENT( IN ) :: value
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: scale
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: addContribution
END SUBROUTINE Set
END INTERFACE
```

:::info
This routine can be called for rectangle matrix.
:::

- If addContribution and scale not present then
  - This subroutine sets a scalar value `value` to a single entry of the matrix.
  - This entry is specified by the `iNodeNum` and `jNodeNum`, which are global node number.
  - The exact location of the entry is computed using `iNodeNum`, `iDOF`, `jNodeNum` and `jDOF`.
- If addContribution and scale present then:
  - This subroutine adds a scalar value `value` to a single entry of the matrix.
  - This entry is specified by the `iNodeNum` and `jNodeNum`.
  - The exact location of the entry is computed using `iNodeNum`, `iDOF`, `jNodeNum` and `jDOF`.

</TabItem>

</Tabs>

## Interface 4

<Tabs>

<TabItem value="interface-4" label="𑗍 Set  4" >

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

:::info
This routine can be called for rectangle matrix.
:::

- If addContribution and scale not present then
  - This subroutine sets a block of data to matrix.
  - This block data is contained in `value(:,:)`.
  - The number of rows in `value` should be `SIZE( iNodeNum ) * itdof`, where `itdof` is the total degrees of freedom in row dimension.
  - The number of columns in `value` should be `SIZE( jNodeNum ) * jtdof`, where `jtdof` is the total degrees of freedom in column dimension.
  - globalNode contains the global node number
  - This entry is specified by the `iNodeNum` and `jNodeNum`, which are global node number.
  - The exact location of the entry is computed using `iNodeNum`, `ivar`, `jNodeNum` and `jvar`.
- If addContribution and scale present then we add contribution to matrix, instead of setting the value.

:::info
Storage format of `value` should be `FMT_NODES` because the storage format of MatrixField_ is `FMT_NODES`.
:::

</TabItem>

</Tabs>

## Interface 5

<Tabs>

<TabItem value="interface-5" label="𑗍 Set  5" >

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

:::info
This routine can be called for rectangle matrix.
:::

- If addContribution and scale not present then
  - This subroutine sets a block of data to matrix.
  - This block data is contained in `value(:,:)`
  - The size of `value` should be `SIZE(iNodeNum)`, `SIZE(jNodeNum)`
  - globalNode contains the global node number
  - This entry is specified by the `iNodeNum` and `jNodeNum`, which are global node number.
  - The exact location of the entry is computed using `iNodeNum`, `ivar`, `idof`, `jNodeNum` and `jvar`, `jdof`.
- If addContribution and scale present then we add contribution to matrix, instead of setting the value.

</TabItem>

</Tabs>

## Interface 6

<Tabs>

<TabItem value="interface-6" label="𑗍 Set  6" >

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

If `addContribution` and `scale` NOT PRESENT, then:

- This subroutine sets a scalar value `value` to a single entry of the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using `iNodeNum`, `idof`, `ivar`, and `jNodeNum`, `jdof`, `jvar`.

If `addContribution` and `scale` are PRESENT then:

- This subroutine adds a scalar value `value` to a single entry of the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using `iNodeNum`, `idof`, `ivar`, and `jNodeNum`, `jdof`, `jvar`.

</TabItem>

</Tabs>

## Interface 7

<Tabs>

<TabItem value="interface-7" label="𑗍 Set  7">

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

If addContribution and scale are not present then:

- This subroutine sets a scalar value `value` to a single entry of the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using (`iNodeNum`, `ivar`, `ispacecompo`, `itimecompo`) and (`jNodeNum`, `jvar`, `jspacecompo`, `jtimecompo`).

If addContribution and scale present, then this subroutine adds a scalar value `value` to a single entry of the matrix.

</TabItem>

</Tabs>

## Interface 8

<Tabs>

<TabItem value="interface-8" label="𑗍 Set  8">

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

If addContribution and scale are not present then:

- This subroutine sets `value` to the matrix.
- This entry is specified by the `iNodeNum` and `jNodeNum`.
- The exact location of the entry is computed using (`iNodeNum`, `ivar`, `ispacecompo`, `itimecompo`) and (`jNodeNum`, `jvar`, `jspacecompo`, `jtimecompo`).

If addContribution and scale present, then this subroutine adds `value` to the matrix.

</TabItem>

</Tabs>

## Interface 9

<Tabs>

<TabItem value="interface-9" label="𑗍 Set  9">

```fortran title "Set Set 9"
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

## Interface 10

<Tabs>

<TabItem value="interface-10" label="𑗍 Set  10" default>

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
