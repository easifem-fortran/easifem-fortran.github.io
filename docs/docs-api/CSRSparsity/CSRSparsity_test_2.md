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

# CSRSparsity example 2

This example shows how to create an instance of [[CSRSparsity_]] for block matrix storage. Following methods are tested:

- [[CSRSparsity_#Initiate]]
- [[CSRSparsity_#Display]]
- [[CSRSparsity_#Deallocate]]

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
  & tNodes=[20, 10], &
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
