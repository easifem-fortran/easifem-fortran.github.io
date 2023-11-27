Here we convert a 6D matrix to 4D matrix

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    real(DFP), allocatable :: m6(:,:,:,:,:,:), m4(:,:, :, :)
    CALL Reallocate( m6, 3, 2, 2, 1, 1, 1 )
    m6(:,:,1,1,1,1)= 2.0*ones(3,2, TypeDFP)
    m6(:,:,2,1,1,1)= 4.0*ones(3,2, TypeDFP)
    CALL Convert( from=m6, to=m4 )
    CALL Display( MdEncode(m4), 'm4=' )
END PROGRAM main
```

m4=(:, :,  1, 1) =

|  |  |
|  --- |  --- |
| 2 | 2 |
| 2 | 2 |
| 2 | 2 |
| 4 | 4 |
| 4 | 4 |
| 4 | 4 |
