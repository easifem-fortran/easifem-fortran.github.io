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

# CSRSparsity example 4

This example shows how to set sparsity pattern in an instance of [[CSRSparsity_]]. The storage pattern is `FMT_NODES`, and matrix is not a block matrix.

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

!!! note "Declare variable"

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
    & tNodes=[12], &
    & names=['K'], &
    & spaceCompo=[1], &
    & timeCompo=[1], &
    & storageFMT=NODES_FMT )
```

```fortran
  CALL Initiate( &
    & obj, &
    & ncol=(.tnodes. dofobj),  &
    & nrow=(.tnodes. dofobj), &
    & idof=dofobj, &
    & jdof=dofobj )
```

!!! note "setSparsity"
    Setting sparsity pattern. The `row` and `col` are the row and column number of the matrix.

```fortran
  CALL Setsparsity( obj, row=1, col=[1,2,6,5] )
  CALL Setsparsity( obj, row=2, col=[2,1,3,5,6,7] )
  CALL Setsparsity( obj, row=3, col=[3,2,4,6,7,8] )
  CALL Setsparsity( obj, row=4, col=[4,3,7,8] )
  CALL Setsparsity( obj, row=5, col=[5,1,9,2,6,10] )
  CALL Setsparsity( obj, row=6, col=[6,2,10,1,5,9,3,7,11] )
  CALL Setsparsity( obj, row=7, col=[7,6,8,2,3,4,10,11,12] )
  CALL Setsparsity( obj, row=8, col=[8,4,12,3,7,11] )
  CALL Setsparsity( obj, row=9, col=[9,5,6,10] )
  CALL Setsparsity( obj, row=10, col=[10,9,11,5,6,7] )
  CALL Setsparsity( obj, row=11, col=[11,10,12,6,7,8] )
  CALL Setsparsity( obj, row=12, col=[12,7,8,11] )
```

```fortran
  CALL setSparsity( obj )
```

Display the content of [[CSRSparsity_]]

```fortran
  CALL Display( obj, "obj=" )
```

!!! note "cleanup"

```fortran
  CALL Deallocate( dofobj )
  CALL Deallocate( obj )
END PROGRAM main
```
