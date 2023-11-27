# Initiate

Initiate an instance of [DOF](./DOF_.md).

## Interface

We can construct `DOF_` object by calling the `Initiate()` subroutine.

```fortran title="Initiate"
INTERFACE
MODULE PURE SUBROUTINE Initiate( obj, tNodes, Names, spacecompo, &
  & timecompo, StorageFMT )
  CLASS( DOF_ ), INTENT( INOUT ) :: obj
    !! degree of freedom object
  INTEGER( I4B ), INTENT( IN ) :: tNodes( : )
    !! number of nodes for each physical variable
  CHARACTER( LEN = 1 ), INTENT( IN ) :: Names( : )
    !! Names of each physical variable
  INTEGER( I4B ), INTENT( IN ) :: spacecompo( : )
    !! Space component of each physical variable
  INTEGER( I4B ), INTENT( IN ) :: timecompo( : )
    !! Time component of each physical variable
  INTEGER( I4B ), INTENT( IN ) :: StorageFMT
    !! Storage format `FMT_DOF`, `FMT_Nodes`
END SUBROUTINE Initiate
END INTERFACE
```

where,

- `tNodes` denotes the total number of nodes in each physical variables
- `Names` is the name of each physical variables
- `SpaceCompo` is the number of spatial components in each physical variable, if a physical variable is scalar then one can use also use -1 instead of 1 for the total number of space components
- `TimeCompo` is the number of time components in each physical variables
- `StorageFMT` is the storage format, it can be `FMT_DOF` or `FMT_Nodes`

:::info
The size of `tNodes`, `Names`, `SpaceCompo`, `TimeCompo` vectors should be equal to the total number of physical variables.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="܀ See example">

import EXAMPLE137 from "./_DOF_test_1.md";

<EXAMPLE137 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## Interfaces for constructing vectors using DOF

The `Initiate()` method has been extended for constructing

- Rank-1 fortran arrays
- [RealVector_](../RealVector/RealVector_.md)
- Vector of [RealVector_](../RealVector/RealVector_.md).

This topic is covered below.

## Constructing navtive vectors

<Tabs>
<TabItem value="interface" label="܀ See Interface">

```fortran title="Interface"
INTERFACE
MODULE PURE SUBROUTINE Initiate( val, obj )
  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: val( : )
    !! This vector will be initiated by using obj
  CLASS( DOF_ ), INTENT( IN ) :: obj
    !! DOF object
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="܀ See example">

import EXAMPLE184 from "./_DOF_test_2.md";

<EXAMPLE184 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## Constructing RealVector

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE112 from "./_DOF_test_3.md";

<EXAMPLE112 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Constructing vector of RealVector

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE136 from "./_DOF_test_4.md";

<EXAMPLE136 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Assignment(=)

We can use an assignment operator to copy the contents of one `DOF_` object into another `DOF_` object.

<Tabs>
<TabItem value="example" label="܀ See example">

import EXAMPLE155 from "./_DOF_test_5.md";

<EXAMPLE155 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## DOF Function

We can also use `DOF()` function for the constructing the DOF object.

<Tabs>
<TabItem value="example" label="܀ See example">

import EXAMPLE173 from "./_DOF_test_6.md";

<EXAMPLE173 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## DOF_Pointer

We can also use `DOF_Pointer()` function for get a pointer to a newly created an instance of `DOF_`.

<Tabs>
<TabItem value="example" label="܀ See example">

import EXAMPLE191 from "./_DOF_test_7.md";

<EXAMPLE191 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
