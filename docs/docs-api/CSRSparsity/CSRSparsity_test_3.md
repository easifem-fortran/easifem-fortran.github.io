---
date: 2022-5-20
update: 2022-5-20
status: stable
docs: none
extpkgs: none
category:
  - Example
tags:
  - example
  - CSRSparsity/Initiate
  - CSRSparsity/SetSparsity
  - CSRSparsity/Display
  - CSRSparsity/Deallocate
  - DOF/Initiate
---

# CSRSparsity example 3

This example shows how to set sparsity pattern in an instance of [[CSRSparsity_]]. The storage pattern is `FMT_DOF`, and matrix is block matrix. Following methods are tested.

- [[CSRSparsity_#Initiate]]
- [[CSRSparsity_#Display]]
- [[CSRSparsity_#Deallocate]]
- [[CSRSparsity_#SetSparsity]]

## Modules and classes

- [[CSRSparsity_]]
- [[DOF_]]

## Usage

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
```

!!! note "Declare variables"

```fortran
  TYPE( CSRSparsity_ ) :: obj
  TYPE( DOF_ ) :: dofobj
  INTEGER( I4B ) :: i
```

!!! note ""
    Make an instance of [[DOF_]]. This object contains the storage pattern.

```fortran
  CALL Initiate( &
    & obj=dofobj, &
    & tNodes=[6, 3], &
    & names=['V', 'P'], &
    & spaceCompo=[3, 1], &
    & timeCompo=[1, 1], &
    & storageFMT=FMT_DOF )
```

!!! note ""
    Initiate an instance of [[CSRSparsity_]]

```fortran
  CALL Initiate( &
    & obj, &
    & ncol=(.tnodes. dofobj), &
    & nrow=(.tNodes. dofobj),  &
    & idof=dofobj, &
    & jdof=dofobj )
```

!!! note "setSparsity"
    Setting sparsity pattern in each block. The block address is given by
    ivar and jvar. `row` and `col` are the row and column number in that
    block.

Block 1,1 ( V, V )

```fortran
CALL setSparsity( obj=obj, row=1, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL setSparsity( obj=obj, row=2, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL setSparsity( obj=obj, row=3, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL setSparsity( obj=obj, row=4, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL setSparsity( obj=obj, row=5, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL setSparsity( obj=obj, row=6, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
```

Block 1,2 (V, P)

```fortran
CALL setSparsity( obj=obj, row=1, col=[1,2,3], ivar=1, jvar=2 )
CALL setSparsity( obj=obj, row=2, col=[1,2,3], ivar=1, jvar=2 )
CALL setSparsity( obj=obj, row=3, col=[1,2,3], ivar=1, jvar=2 )
CALL setSparsity( obj=obj, row=4, col=[1,2,3], ivar=1, jvar=2 )
CALL setSparsity( obj=obj, row=5, col=[1,2,3], ivar=1, jvar=2 )
CALL setSparsity( obj=obj, row=6, col=[1,2,3], ivar=1, jvar=2 )
```

Block 2,1 (P,V)

```fortran
CALL setSparsity( obj=obj, row=1, col=[1,2,3,4,5,6], ivar=2, jvar=1 )
CALL setSparsity( obj=obj, row=2, col=[1,2,3,4,5,6], ivar=2, jvar=1 )
CALL setSparsity( obj=obj, row=3, col=[1,2,3,4,5,6], ivar=2, jvar=1 )
```

Block 2,2 (P,P)

```fortran
CALL setSparsity( obj=obj, row=1, col=[1,2,3], ivar=2, jvar=2 )
CALL setSparsity( obj=obj, row=2, col=[1,2,3], ivar=2, jvar=2 )
CALL setSparsity( obj=obj, row=3, col=[1,2,3], ivar=2, jvar=2 )
```

We should now call `setSparsity()` to indicate that setting of sparsity pattern is finished. This step will compact the storage.

```fortran
CALL setSparsity( obj )
```

Display the content of [[CSRSparsity_]]

```fortran
CALL Display( obj, "" )
```

!!! note "cleanup"

```fortran
CALL Deallocate( dofobj )
CALL Deallocate( obj )
END PROGRAM main
```
