---
date: 2021-10-09
update: 2022-12-05
status: stable
docs: done
extpkgs: none
category:
  - LinearAlgebra
tags:
  - DOF
  - vector
  - matrix
  - easifemBase
---

# DOF

`DOF_`  data type contains the information of degrees of freedom in finite element method. It mainly includes the information regarding the storage pattern of degrees of freedom.

Degrees of freedom are space-time components of physical variable. There can be several physical variables such as pressure, velocity, temperature. Now pressure has single degrees of freedom, because it is a scalar whereas velocity can have three degrees of freedom.

In order to understand the storage pattern,and the working principal of  `DOF_` datatype, let us consider a vector $\textbf{v}$ in three dimension space. There are three degrees of freedom at each spatial nodes of the mesh (this corresponds to $v_x, v_y, v_z$. Now, there arises two ways to store the nodal values of the physical variable (here, $\textbf{v}$).

`FMT_DOF` : In this case each components (DOF) of $v$  will be treated as an independent nodal vector. So there are actually three nodal vectors corresponding to the spatial components $v_x, v_y, v_z$. We will use uppercase letter to denote the spatial nodal values. In this way, each of $V_x, V_y, V_z$ are nodal values of spatial component of a physical variable ($v$). One can appreciate the fact that `FMT_DOF`  format is flexible, because, each nodal vector can have different length.

`FMT_Nodes`: In this case all the components of $v$ are grouped together and values are defined at each node of the mesh. At each node, DOFs (spatial components) form a small vector. So the nodal values of $v$ are defined as a nodal vector of these small vectors.

![DOF1](figures/DOF1.svg)

Further, to understand how storage pattern works in the case of multi-variables, let us consider an example in which we have pressure and velocity as the physical variables. Note that velocity is a vector and pressure is scalar physical variable. These storage pattern are given in following figure.

![DOF2](figures/DOF2.svg)

Following code can be used to define an instance of `DOF_`. Note that each physical variable contains two components in the time domain.

```fortran
obj = dof( tNodes = [20, 10], Names = ['V', 'P'], SpaceCompo = [3, 1], &
  & Timecompo = [2, 2], StorageFMT = FMT_DOF )
```

In this case velocity has 20 nodes and pressure has 10 nodes. There are 3 space components and 2 time components in the velocity.

In the case of `FMT_DOF` , the degrees of freedom will be represented as shown in above figure. Each term in  `{}` denotes a nodal vector of DOF (i.e., v11, v12, p1, p2, etc.). Note that, in this representation both V and P can have different order of interpolation. For example, velocity can be quadratic and pressure can be linear. Needless to state, this yields a block-structured tangent matrix.

Now consider the following case to understand `FMT_Nodes` :

```fortran
obj = dof( tNodes = [10], Names = ['V'], SpaceCompo = [3], &
  & Timecompo = [2], StorageFMT = FMT_NODES )
```

In this case degrees of freedom are stored as shown in above figure.

:::note `FMT_Nodes` vs `FMT_DOF`
In the case of `FMT_Nodes` all physical variables should have same order of interpolation in space and time domain. However, in the case of `FMT_DOF`, they can have different order of interpolation.
:::

## Structure

The structure of `DOF_` is given below.

```fortran
TYPE :: DOF_
  INTEGER( I4B ), ALLOCATABLE :: map( :, : )
    !! Encapsulation of information of DOF
  INTEGER( I4B ), ALLOCATABLE :: valMap( : )
    !! Val map
  INTEGER( I4B ) :: storageFMT = FMT_NODES
    !! Storage format
END TYPE DOF_
```

To understand the structure of `Map` let us generate a `DOF_` object using following code.

```fortran
obj = dof( tNodes = [20, 10], Names = ['V', 'P'], SpaceCompo = [3, -1], &
  & Timecompo = [2, 2], StorageFMT = DOF_FMT )
```

In this case `MAP` is given by following table:

| ICHAR | SpaceCompo | TimeCompo | tDOF | Indx | total Nodes |
| ----- | ---------- | --------- | ---- | ---- | ----------- |
| 86    | 3          | 2         | 6    | 1    | 20          |
| 80    | -1         | 2         | 2    | 7    | 10          |
| 0     | 0          | 0         | 8    | 9    | 140         |
|       |            |           |      |      |             |

- Column 1 of `MAP` denotes the name of physical variable; only unit length characters are allowed in physical names as we save the names in ASCII format
- Column 2 of `MAP` denotes space component in the physical variable
- Column 3 denotes time components in the physical variable
- Column 4 denotes total number of degrees of freedom in each physical variable, it is equal to the spaceCompo x timeCompo
- Column 5 denotes the starting position of physical name; in this way, components of a physical name, `V` are stored from 1 to 6
- Column 6 denotes the total number of spatial nodes in the components of a physical name

## ConstructorMethods

### Initiate

We can construct `DOF_` object by calling the `Initiate()` subroutine as shown below.

```fortran title="Initiate method for DOF" s
type( DOF_ ) :: obj
call initiate( obj, tNodes = [10, 10], Names = ['x', 'y'], &
& SpaceCompo = [3,3], TimeCompo = [1,1], StorageFMT = FMT_Nodes )
```

where,

- `tNodes` is number of nodes in the each physical variables
- `Names` is the name of each physical variables
- `SpaceCompo` is the number of spatial components in each physical variable, if a physical variable is scalar then one can use also use -1 instead of 1 for the total number of space components
- `TimeCompo` is the number of time components in each physical variables
- `StorageFMT` is the storage format, it can be `FMT_DOF`  or `FMT_Nodes`

:::info
The size of `tNodes`, `Names`, `SpaceCompo`, `TimeCompo` vectors should be equal to the total number of physical variables.
:::

We can defined an assignment operator to copy the contents of one `DOF_` object into another `DOF_` object.

```fortran title="example: Assignment(=)" s
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj, anotherObj
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
anotherObj=obj
CALL Display( anotherObj, "anotherObj=obj : " )
CALL Deallocate( obj )
CALL Deallocate( anotherObj )
END PROGRAM main
```

We can also use `DOF()` function for the construction.

```fortran title="exmaple: DOF()" s
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
obj = DOF( tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Display( obj, "DOF() : " )
CALL Deallocate( obj )
END PROGRAM main
```

We can also use `DOF_Pointer()` function for get a pointer to a newly created an instance of `DOF_`. This example is given below.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ), POINTER :: obj
obj => DOF_POINTER( tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Display( obj, "DOF() : " )
CALL Deallocate( obj )
END PROGRAM main
```

## Constructing vectors using `DOF_` objects

EASIFEM has `initiate()` method for constructing the Rank-1 FORTRAN arrays, [RealVector_](../RealVector/RealVector_.md), vector of [RealVector_](../RealVector/RealVector_.md). This is explained below.

### Constructing rank-1 FORTRAN arrays

```fortran
PROGRAM main
IMPLICIT NONE
TYPE( DOF_ ) :: obj
REAL( DFP ), ALLOCATABLE :: val( : )
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Initiate( Val=val, obj=obj )
CALL Display( Val, "CALL Initiate( Val=val, obj=obj ) : " )
CALL Deallocate( obj )
END PROGRAM main
```

### Constructing scalar instance of [RealVector_](../RealVector/RealVector_.md)

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
TYPE(RealVector_) :: val
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Initiate( Val=val, obj=obj )
CALL Display( Val, "CALL Initiate( Val=val, obj=obj ) : " )
CALL Deallocate( obj )
END PROGRAM main
```

### Constructing vector of [RealVector_](../RealVector/RealVector_.md)

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
TYPE(RealVector_), ALLOCATABLE :: val( : )
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Initiate( Val=val, obj=obj )
CALL Display( Val, "CALL Initiate( Val=val, obj=obj ) : " )
CALL Deallocate( obj )
END PROGRAM main
```

## Destruction method

The data stored inside `DOF_` object can be deallocated by using `Deallocate()` method.

```fortran
CALL Deallocate(obj)
```

## IO methods

If you want to see the content of `DOF_` object on terminal screen or in an external file, then you can use `Display` function as shown below.

```fortran
CALL Display( DOF_::obj, CHAR:: msg, INT::unitNo)
```

If you want to see the fortran vector in nice format, then you can use `Display` method in the following way

```fortran
CALL Display( Real::Vec(:), DOF_::obj, CHAR::"some message", INT::unitNo )
```

This can be understood by following example

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
REAL( DFP ), ALLOCATABLE :: val( : )
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Initiate( Val=val, obj=obj )
val(1:10) = 1; val(11:20)=2; val(21:)=3
CALL Display( Val, obj, "CALL Initiate( Val=val, obj=obj ) : " )
CALL Deallocate( obj )
END PROGRAM main
```

???  note "click here to see the output of above program"

    ```fortran
    # VAR :U
     DOF-1     DOF-2     DOF-3
    -------   -------   -------
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    1.00000   2.00000   3.00000
    ```

## Get Methods

### tNodes

!!! note "tNodes"
    Getting size of vector using `.tNodes.` operator

Use `.tNodes.` operator to get the total number of nodes for `DOF_`.

```fortran
ans=.tNodes. obj
```

This returns the size of `DOF_` object. If you want to get the total nodes in a given degree of freedom then we can use

```fortran
ans=obj .tNodes. idof
```

If you want the size of several degrees of freedom then use

```fortran
ans=obj .tNodes. [idof1, idof2, idof3]
```

If you want to know the size of a physical variable, then use the name of physical variable

```fortran
ans= obj .tNodes. "U"
```

See the following example.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Display( .tNodes. obj, '.tNodes. obj [30] : ' )
CALL Display( obj .tNodes. 1, 'obj .tNodes. 1 [10] : ' )
CALL Display( obj .tNodes. 2, 'obj .tNodes. 2 [10] : ' )
CALL Display( obj .tNodes. 3, 'obj .tNodes. 3 [10] : ' )
CALL Display( obj .tNodes. [1,2,3], 'obj .tNodes. [1,2,3] [30] : ' )
CALL Deallocate( obj )
END PROGRAM main
```

### tDOF

!!! settings "tDOF"

    Getting total number of DOF

Getting total number of degrees of freedom in a physical variable is very easy, EASIFEM defines `.tdof.` operator for doing this task.

Getting total degrees of freedom in `DOF_`

```fortran
ans= .tdof. obj
```

Getting total degrees of freedom of a physical name

```fortran
ans= obj .tdof. "U"
```

Getting total number of degrees of freedom of a physical variable

```fortran
ans= obj .tdof. 1
```

Following code shows how to use `.tdof.`

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Display( .tDOF. obj, '.tDOF. obj [3] : ' )
CALL Display( obj .tDOF. 1, 'obj .tDOF. 1 [3] : ' )
CALL Display( obj .tDOF. 'U', 'obj .tDOF. "U" [3] : ' )
CALL Deallocate( obj )
END PROGRAM main
```

### getIDOF

- `getIDOF(spaceCompo, timeCompo, tspaceCompo)`
- `getIDOF(obj, ivar, spaceCompo, timeCompo)`
- `getIDOF(obj, ivar, spaceCompo, timeCompo(:) )`
- `getIDOF(obj, ivar, spaceCompo(:), timeCompo)`
- `getIDOF(spaceCompo, timeCompo(:), tspaceCompo)`
- `getIDOF(spaceCompo(:), timeCompo, tspaceCompo)`
- `getIDOF(obj, ivar, idof)`
- `getIDOF(obj, ivar)`

### getNodeLOC

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

!!! note "getNodeLOC"
    Getting node locations

```fortran
ans=getNodeLOC(obj, inode, idof)
```

```fortran
ans=getNodeLOC(obj, idof)
```

### getIndex

- `getIndex(obj, nodenum)`
- `getIndex(obj, nodenum, ivar)`
- `getIndex(obj, nodenum, varname)`
- `getIndex(obj, nodenum(:) )`
- `getIndex(obj, nodenum(:), ivar)`
- `getIndex(obj, nodenum(:), varname)`
- `getIndex(obj, nodenum, ivar, idof)` --> getNodeLOC
- `getIndex(obj, nodenum(:), ivar, idof)` --> getNodeLOC
- `getIndex(obj, nodenum, ivar, spacecompo, timecompo)` --> getNodeLOC
- `getIndex(obj, nodenum(:), ivar, spacecompo, timecompo)` --> getNodeLOC

## Set methods

- `Set(vec(:), obj, nodenum(:), value(:), conversion(1))`
- `Set(vec(:), obj, nodenum(:), value)`
- `Set(vec(:), obj, nodenum(:), value(:), idof)`
- `Set(vec(:), obj, nodenum(:), value(:), ivar, idof)`
- `Set(vec(:), obj, nodenum(:), value(:), ivar, spacecompo, timecompo)`
- `Set(vec(:), obj, nodenum(:), value(:), ivar, spacecompo, timecompo(:))`
- `Set(vec(:), obj, nodenum(:), value(:), ivar, spacecompo(:), timecompo)`
- `Set(vec(:), obj, nodenum, value)`
- `Set(vec(:), obj, nodenum, value, idof)`
- `Set(vec(:), obj, nodenum, value, ivar, idof)`
- `Set(vec(:), obj, nodenum, value, ivar, spacecompo, timecompo)`
- `Set(vec(:), obj, nodenum, value, ivar, spacecompo, timecompo(:))`
- `Set(vec(:), obj, nodenum, value, ivar, spacecompo(:), timecompo)`

## Add methods

- `Add(vec(:), obj, nodenum(:), value(:), scale, conversion(1))`
- `Add(vec(:), obj, nodenum(:), value, scale)`
- `Add(vec(:), obj, nodenum(:), value(:), scale, idof)`
- `Add(vec(:), obj, nodenum(:), value(:), scale, ivar, idof)`
- `Add(vec(:), obj, nodenum(:), value(:), scale, ivar, spacecompo, timecompo)`
- `Add(vec(:), obj, nodenum(:), value(:), scale, ivar, spacecompo, timecompo(:))`
- `Add(vec(:), obj, nodenum(:), value(:), scale, ivar, spacecompo(:), timecompo)`
- `Add(vec(:), obj, nodenum, value, scale)`
- `Add(vec(:), obj, nodenum, value, scale, idof)`
- `Add(vec(:), obj, nodenum, value, scale, ivar, idof)`
- `Add(vec(:), obj, nodenum, value, scale, ivar, spacecompo, timecompo)`
- `Add(vec(:), obj, nodenum, value, scale, ivar, spacecompo, timecompo(:))`
- `Add(vec(:), obj, nodenum, value, scale, ivar, spacecompo(:), timecompo)`
