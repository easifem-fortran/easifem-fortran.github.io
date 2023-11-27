This example shows the usage of `Outerprod` method.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    real(DFP), allocatable :: v1(:), v2(:), m1(:,:), m2(:,:), rank6(:,:,:,:,:,:)
    v1=[1]
    v2=[1,2]
    CALL Reallocate( m1, 1, 2 )
    m1(1,:) = [1,2]
    call ok( all(outerprod( v1, v2 ) .approxeq. m1), "outerprod" )
    v1=[1, 2]
    v2=[1,2, 3]
    CALL Reallocate( m1, 2, 3 )
    m1(1,:) = [1,2,3]
    m1(2,:) = [2,4,6]
    call ok( all(outerprod( v1, v2 ) .approxeq. m1), "outerprod" )
    v1=[1, 2]
    v2=[1, 2]
    CALL Reallocate( m1, 2, 2 )
    m1(1,1) = 1
    m1(1,2) = 10
    m1(2,1) = 11
    m1(2,2) = 12
    rank6=outerprod( outerprod(v1, v1), m1, v2, v2 )
    CALL ok( all( &
        & rank6(:,:,1,1,1,1) .approxeq. &
        & outerprod(v1,v1)*m1(1,1)*v2(1)*v2(1) ) , 'outerprod' )
    CALL ok( all( &
        & rank6(:,:,1,1,1,2) .approxeq. &
        & outerprod(v1,v1)*m1(1,1)*v2(1)*v2(2) ) , 'outerprod' )
    CALL ok( all( &
        & rank6(:,:,1,1,2,1) .approxeq. &
        & outerprod(v1,v1)*m1(1,1)*v2(2)*v2(1) ) , 'outerprod' )
    CALL ok( all( &
        & rank6(:,:,1,1,2,2) .approxeq. &
        & outerprod(v1,v1)*m1(1,1)*v2(2)*v2(2) ) , 'outerprod' )
    CALL ok( all( &
        & rank6(:,:,1,2,1,1) .approxeq. &
        & outerprod(v1,v1)*m1(1,2)*v2(1)*v2(1) ) , 'outerprod' )
    CALL ok( all( &
        & rank6(:,:,1,2,1,2) .approxeq. &
        & outerprod(v1,v1)*m1(1,2)*v2(1)*v2(2) ) , 'outerprod' )
    CALL ok( all( &
        & rank6(:,:,2,2,2,2) .approxeq. &
        & outerprod(v1,v1)*m1(2,2)*v2(2)*v2(2) ) , 'outerprod' )
END PROGRAM main
```
