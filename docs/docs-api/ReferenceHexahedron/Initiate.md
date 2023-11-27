# Initiate

This subroutine initiate an instance of ReferenceHexahedron.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE Initiate
  MODULE PURE SUBROUTINE initiate_ref_Hexahedron(obj, NSD, xij)
    CLASS(ReferenceHexahedron_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: NSD
    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)
  END SUBROUTINE initiate_ref_Hexahedron
END INTERFACE Initiate
```

:::info `NSD`
number of spatial dimension, it should be 3.
:::

:::info `xij`
xij is the nodal coordinate of hexahedron.
- total number of rows in xij should be 3 as each row denotes a spatial dimension.
- total number of columns in xij should be 8 as each column denotes the node number.
:::


</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_Initiate_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 2 (ReferenceHexahedron)

We can use `ReferenceHexahedron` function to construct an instance of ReferenceHexahedron.

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE ReferenceHexahedron
  MODULE PURE FUNCTION reference_Hexahedron(NSD, xij) RESULT(obj)
    INTEGER(I4B), INTENT(IN) :: NSD
    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)
    TYPE(ReferenceHexahedron_) :: obj
  END FUNCTION reference_Hexahedron
END INTERFACE ReferenceHexahedron
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE54 from "./_Initiate_test_2.md";

<EXAMPLE54 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 3 (ReferenceHexahedron_Pointer)

The function `ReferenceHexahedron_Pointer` returns the pointer to newly created instance of ReferenceHexahedron.

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE ReferenceHexahedron_Pointer
  MODULE PURE FUNCTION reference_Hexahedron_Pointer(NSD, xij) RESULT(obj)
    INTEGER(I4B), INTENT(IN) :: NSD
    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)
    CLASS(ReferenceHexahedron_), POINTER :: obj
  END FUNCTION reference_Hexahedron_Pointer
END INTERFACE ReferenceHexahedron_Pointer
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE87 from "./_Initiate_test_3.md";

<EXAMPLE87 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

