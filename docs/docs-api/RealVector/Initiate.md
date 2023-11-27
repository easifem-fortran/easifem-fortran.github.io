# Initiate

Initiate an instance of RealVector.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Initiate(obj, tSize)
    CLASS(RealVector_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: tSize
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_Initiate_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Initiate(obj, tSize)
    TYPE(RealVector_), ALLOCATABLE, INTENT(INOUT) :: obj(:)
    INTEGER(I4B), INTENT(IN) :: tSize(:)
  END SUBROUTINE Initiate
END INTERFACE 
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE36 from "./_Initiate_test_2.md";

<EXAMPLE36 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Initiate(obj, a, b)
    CLASS(RealVector_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: a, b
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">


import EXAMPLE81 from "./_Initiate_test_3.md";

<EXAMPLE81 />


</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Initiate(obj, dofobj)
    CLASS(RealVector_), INTENT(INOUT) :: obj
    CLASS(DOF_), INTENT(IN) :: dofobj
  END SUBROUTINE Initiate
END INTERFACE 
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE96 from "./_Initiate_test_4.md";

<EXAMPLE96 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Initiate(obj, dofobj)
    TYPE(RealVector_), ALLOCATABLE, INTENT(INOUT) :: obj(:)
    CLASS(DOF_), INTENT(IN) :: dofobj
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE125 from "./_Initiate_test_5.md";

<EXAMPLE125 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
