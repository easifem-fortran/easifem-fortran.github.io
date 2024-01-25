### example 7

This example shows how to set sparsity pattern by using a graph matrix. A graph matrix is a two-d array of 1 and 0. If graph( i, j ) is 1 then row-i and row-j are connected.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( CSRSparsity_) :: obj
INTEGER( I4B ), PARAMETER :: nrow=5, ncol=5
INTEGER( I4B ) :: i, graph( 5, 5 )

graph = 0
graph( 1,2 ) = 1
graph( 2,3 ) = 1
graph( 2,4 ) = 1
graph( 2,5 ) = 1

CALL Initiate( obj=obj, nrow=nrow, ncol=ncol )

CALL SetSparsity(obj, graph=graph)
CALL SetSparsity(obj)

CALL Display( obj, "obj" )

CALL Deallocate( obj )
END PROGRAM main
```
