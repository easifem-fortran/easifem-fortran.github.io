### example 8

This example shows how to set sparsity pattern by using a graph matrix. A graph matrix is a two-d array of true and false. if graph( i, j ) is true then row-i and row-j are connected.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( CSRSparsity_) :: obj
INTEGER( I4B ), PARAMETER :: nrow=5, ncol=5
INTEGER( I4B ) :: i
LOGICAL( LGT ) :: graph( nrow, ncol )

graph = .FALSE.
graph( 1,2 ) = .TRUE.
graph( 2,3 ) = .TRUE.
graph( 2,4 ) = .TRUE.
graph( 2,5 ) = .TRUE.

CALL Initiate( obj=obj, nrow=nrow, ncol=ncol )

CALL SetSparsity(obj, graph=graph)
CALL SetSparsity(obj)

CALL Display( obj, "obj" )

CALL Deallocate( obj )
END PROGRAM main
```
