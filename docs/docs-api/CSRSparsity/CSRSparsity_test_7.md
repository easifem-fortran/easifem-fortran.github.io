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
---

# CSRSparsity example 7

This example shows how to set sparsity pattern by using a graph matrix. A graph matrix is a two-d array of 1 and 0. if graph( i, j ) is 1 then row-i and row-j are connected.

## Modules and classes

- [[CSRSparsity_]]

## Usage

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( CSRSparsity_) :: obj
INTEGER( I4B ), PARAMETER :: nrow=5, ncol=5
INTEGER( I4B ) :: i, graph( 5, 5 )
```

```fortran
graph = 0
graph( 1,2 ) = 1
graph( 2,3 ) = 1
graph( 2,4 ) = 1
graph( 2,5 ) = 1
```

```fortran
CALL Initiate( obj=obj, nrow=nrow, ncol=ncol )
```

```fortran
CALL SetSparsity(obj, graph=graph)
CALL SetSparsity(obj)
```

Display the content of [[CSRSparsity_]]

```fortran
CALL Display( obj, "obj" )
```

```fortran
CALL Deallocate( obj )
END PROGRAM main
```
