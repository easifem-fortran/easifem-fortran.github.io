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

# CSRSparsity example 9

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
  TYPE( DOF_ ) :: idofobj, jdofobj
  INTEGER( I4B ) :: i
```

!!! note ""
    Make an instance of [[DOF_]]. This object contains the storage pattern.

```fortran
  !!
  CALL Initiate( &
    & obj=idofobj, &
    & tNodes=[6], &
    & names=['V'], &
    & spaceCompo=[2], &
    & timeCompo=[1], &
    & storageFMT=FMT_DOF )
  !!
  CALL Initiate( &
    & obj=jdofobj, &
    & tNodes=[3], &
    & names=['P'], &
    & spaceCompo=[1], &
    & timeCompo=[1], &
    & storageFMT=FMT_DOF )
```

!!! note ""
    Initiate an instance of [[CSRSparsity_]]

```fortran
  call display(.tnodes. idofobj, "nrow=")
  call display(.tnodes. jdofobj, "ncol=")
  !!
  CALL Initiate( &
    & obj, &
    & nrow=( .tNodes. idofobj), &
    & ncol=( .tnodes. jdofobj), &
    & idof=idofobj, &
    & jdof=jdofobj )
```

Display the content of [[CSRSparsity_]]

```fortran
  CALL Display( SIZE(obj, 1), "size(obj, 1) : " )
  CALL Display( SIZE(obj, 2), "size(obj, 2) : " )
```

```fortran
  CALL setSparsity( obj=obj, row=1, col=[1,2,3], ivar=1, jvar=1 )
  CALL setSparsity( obj=obj, row=2, col=[1,2,3], ivar=1, jvar=1 )
  CALL setSparsity( obj=obj, row=3, col=[1,2,3], ivar=1, jvar=1 )
  CALL setSparsity( obj=obj, row=4, col=[1,2,3], ivar=1, jvar=1 )
  CALL setSparsity( obj=obj, row=5, col=[1,2,3], ivar=1, jvar=1 )
  CALL setSparsity( obj=obj, row=6, col=[1,2,3], ivar=1, jvar=1 )
  CALL setSparsity(obj)
```

```fortran
  CALL Display( obj, "obj = ")
```

!!! note "cleanup"

```fortran
CALL Deallocate( idofobj )
CALL Deallocate( jdofobj )
CALL Deallocate( obj )
END PROGRAM main
```
