This example initiates an instance of [RealVector_](RealVector_.md)

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ), ALLOCATABLE :: obj(:)
```

Allocate the size of vector of real vector by using [Initiate](Initiate.md).

```fortran
  CALL Initiate(obj, [5,5])
  CALL Display( obj, "test1")
```

```fortran
END PROGRAM main
```
