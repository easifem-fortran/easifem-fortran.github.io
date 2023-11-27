# GetIndex

Get index of node number.

Calling example:

- `getIndex(obj, nodenum)`
- `getIndex(obj, nodenum, ivar)`
- `getIndex(obj, nodenum, varname)`
- `getIndex(obj, nodenum(:) )`
- `getIndex(obj, nodenum(:), ivar)`
- `getIndex(obj, nodenum(:), varname)`
- `getIndex(obj, nodenum, ivar, idof)`
- `getIndex(obj, nodenum(:), ivar, idof)`
- `getIndex(obj, nodenum, ivar, spacecompo, timecompo)`
- `getIndex(obj, nodenum(:), ivar, spacecompo, timecompo)`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex1(obj, nodenum) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex1
END INTERFACE
```

- This function returns indices, representing the location of all degrees of freedom define on a given node number.
- The size of these indices is equal to the total number of DOF in obj
- In this way, ans(ii) represents the location of ii dof at node number nodenum
- It is user's responsibility to ensure that for every physical variable the `nodenumber` is lesser than the total number of nodes defined for that physical variable.
- The returned indiced can be used to extract values from an instance of
[RealVector](../RealVector/RealVector_.md) or fortran vector of real numbers.

:::note
The size of returned vector `ans` will be the total number of degrees of freedom in the DOF object.
:::

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex2(obj, nodenum, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex2
END INTERFACE
```

- This function returns indices, representing the locations of all the degrees of freedom of a given physical variable `ivar` at a given node number `nodenum`
- The physical variable is defined by `ivar`
- The size of these indices is equal to the total number of DOF defined for the `ivar` physical variable.
- It is user's responsibility to ensure that for the selected physical var the `nodenum` is lesser than the total number of nodes defined for that physical variable.

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex3(obj, nodenum, varname) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum
    CHARACTER(1), INTENT(IN) :: varname
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex3
END INTERFACE
```

Same as [Interface 2](#interface-2), but physical variable is selected by it name.

## Interface 4

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex4(obj, nodenum) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex4
END INTERFACE
```

- This function returns indices, representing the location of all the degrees of freedom defined at node numbers specified by nodenum.
- The size of these indices is equal to the total number of DOF in obj times the size of `nodenum(:)`.

## Interface 5

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex5(obj, nodenum, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex5
END INTERFACE
```

- This function returns indices, representing the location of all the degrees of freedom of physical variable given by ivar, at nodes given in nodenum.
- The physical variable is defined by `ivar`
- The size of these indices is equal to the total number of DOF defined for the `ivar` physical variable times the size of nodenum.

## Interface 6

```fortran
INTERFACE
  MODULE PURE FUNCTION GetIndex6(obj, nodenum, varname) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    CHARACTER(1), INTENT(IN) :: varname
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetIndex6
END INTERFACE
```

- This function returns a vector of integers (indices) for a given node number and a given physical Variable.
- The physical variable is defined by `varname`
- The size of these indices is equal to the total number of DOF defined for the `varname` physical variable.
- The returned indices represent the degrees of freedom of physical variable `varname` defined on each node.
- It is user's responsibility to ensure that for the selected physical var the `nodenumber` is lesser than the total number of nodes defined for that physical variable.
- The returned indices can be used for getting the dof (all dof) defined on the nodenum for the given physical variable.
- The returned indices can be used to extract values from an instance of [RealVector](../RealVector/RealVector_.md) or fortran vector of real numbers.

## Interface 7

```fortran
INTERFACE getIndex
  MODULE PROCEDURE dof_getNodeLoc5
END INTERFACE getIndex
```

## Interface 8

```fortran
INTERFACE getIndex
  MODULE PROCEDURE dof_getNodeLoc6
END INTERFACE getIndex
```

## Interface 9

```fortran
INTERFACE getIndex
  MODULE PROCEDURE dof_getNodeLoc7
END INTERFACE getIndex
```

## Interface 10

```fortran
INTERFACE getIndex
  MODULE PROCEDURE dof_getNodeLoc8
END INTERFACE getIndex
```

## Examples

<Tabs>

<TabItem value="example1" label="️܀ Example 1">

import EXAMPLE164 from "./_DOF_test_11.md";

<EXAMPLE164 />

</TabItem>

<TabItem value="example2" label="️܀ Example 2">

import EXAMPLE177 from "./_DOF_test_16.md";

<EXAMPLE177 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
