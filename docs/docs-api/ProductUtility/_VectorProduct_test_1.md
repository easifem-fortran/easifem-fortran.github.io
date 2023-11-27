This example shows the usage of `Vector_Product` method which is defined in `VectorProductUtility` MODULE.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    call ok( all(vectorProduct(a=[1.0, 0.0, 0.0], b=[0.0, 1.0, 0.0]) &
        & .approxeq. [0.0, 0.0, 1.0]), "vectorProduct" )
    call ok( all(vectorProduct(a=[0.0, 1.0, 0.0], b=[1.0, 0.0, 0.0]) &
        & .approxeq. [0.0, 0.0, -1.0]), "vectorProduct" )
END PROGRAM main
```
