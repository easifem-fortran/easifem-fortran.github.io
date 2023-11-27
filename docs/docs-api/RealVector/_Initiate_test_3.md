This example initiates an instance of [RealVector_](RealVector_.md)

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ) :: obj
```

Allocate the size from a to b by using [Initiate](Initiate.md) method.

```fortran
  CALL Initiate(obj, 2, 10)
  CALL Display( obj, "obj(a:b)=")
```

```fortran
END PROGRAM main
```
