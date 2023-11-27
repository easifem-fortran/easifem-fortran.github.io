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
  - CSRSparsity/Display
  - CSRSparsity/Deallocate
  - DOF/Initiate
---

# CSRSparsity example 1

This example shows how to create an instance of [[CSRSparsity_]]. Following methods are tested:

- [[CSRSparsity_/Initiate]]
- [[CSRSparsity_/Display]]
- [[CSRSparsity_/Deallocate]]

## Modules and classes

- [[CSRSparsity_]]
- [[DOF_]]

## Usage

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
```

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

!!! note ""
    Initiate an instance of [[CSRSparsity_]]

```fortran
    CALL Initiate( obj, ncol=12, nrow=12, idof=dofobj, jdof=dofobj )
```

Display the content of [[CSRSparsity_]]

```fortran
CALL Display( obj, "CSRSparsity : " )
```

!!! note "cleanup"

```fortran
CALL Deallocate( dofobj )
CALL Deallocate( obj )
END PROGRAM main
```
