# GetNodeLoc

Get the location (index) of node number.

This method returns the location of degree of freedom number `idof` at node number `nodenum`.

:::note
`nodenum` should be lesser than the total number of nodes defined for dof number `idof`.
:::

:::info
`idof`s are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables does not start from 1.
:::

Calling example:

- `getNodeLOC(obj, nodenum, idof)`
- `getNodeLOC(obj, nodenum(:), idof)`
- `getNodeLOC(obj, nodenum, idof(:) )`
- `getNodeLOC(obj, idof)`
- `getNodeLOC(obj, nodenum, ivar, idof)`
- `getNodeLOC(obj, nodenum(:), ivar, idof)`
- `getNodeLOC(obj, nodenum, ivar, spacecompo, timecompo)`
- `getNodeLOC(obj, nodenum(:), ivar, spacecompo, timecompo)`
- `getNodeLOC(obj, nodenum, ivar, idof(:) )`
- `getNodeLOC(obj, nodenum, ivar, spacecompo, timecompo(:) )`
- `getNodeLOC(obj, nodenum, ivar, spacecompo(:), timecompo)`
- `getNodeLOC(obj, nodenum(:), ivar, spacecompo, timecompo(:) )`
- `getNodeLOC(obj, nodenum(:), ivar, spacecompo(:), timecompo)`

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans
  END FUNCTION GetNodeLoc
END INTERFACE
```

It returns the location of degree of freedom number `idof` at node number `nodenum`.

:::note
`nodenum` should be lesser than the total number of nodes defined for dof number `idof`.
:::

:::note
`idofs` are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables will not start from 1.
:::

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans(SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

It returns the location of degree of freedom number `idof` at node number `nodenum`.

:::info
`nodenum` should be lesser than the total number of nodes defined for dof number `idof`.
:::

:::info
idofs are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables will not start from 1.
:::

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B) :: ans(SIZE(idof))
  END FUNCTION GetNodeLoc
END INTERFACE
```

It returns the location of degree of freedom number `idof` at node number `nodenum`.

:::info
`nodenum` should be lesser than the total number of nodes defined for dof number `idof`.
:::

:::note
idofs are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables will not start from 1.
:::

## Interface 4

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, idof) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans(3)
  END FUNCTION GetNodeLoc
END INTERFACE
```

```txt
ans(1) : istart
ans(2) : iend
ans(3) : stride
```

In this way a given degree of freedom `idof` will be located in `vec(istart:iend:stride)`.

:::note
In DOF object, idofs are continuously numbered, so if there are two or more physical variables, then idof of the second or later physical variables will not start from 1.
:::

## Interface 5

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 6

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans(SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 7

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 8

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans(SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 9

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof(:)
    INTEGER(I4B) :: ans(SIZE(idof))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 10

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    INTEGER(I4B) :: ans(SIZE(timecompo))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 11

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans(SIZE(spacecompo))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 12

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    INTEGER(I4B) :: ans(SIZE(timecompo) * SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

## Interface 13

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNodeLoc(obj, nodenum, ivar, spacecompo, &
    & timecompo) RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans(SIZE(spacecompo) * SIZE(nodenum))
  END FUNCTION GetNodeLoc
END INTERFACE
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<Tabs>
<TabItem value="example1" label="️܀ Example 1">

import EXAMPLE267 from "./_DOF_test_14.md";

<EXAMPLE267 />

</TabItem>

<TabItem value="example2" label="️܀ Example 2">

import EXAMPLE279 from "./_DOF_test_15.md";

<EXAMPLE279 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
