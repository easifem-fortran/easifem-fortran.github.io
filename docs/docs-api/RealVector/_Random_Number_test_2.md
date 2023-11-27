This example initiates an instance of [RealVector_](RealVector_.md)

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ), ALLOCATABLE :: obj(:)
```

Generate several random vectors by using [Random_Number](Random_Number.md).

```fortran
  CALL Random_Number(obj, [3,4,5])
  CALL Display( obj, "obj: ")
```

```fortran
END PROGRAM main
```
