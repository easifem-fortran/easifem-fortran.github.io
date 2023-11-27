This example initiates an instance of [RealVector_](RealVector_.md)

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ) :: obj
```

Generate a random vector by using [Random_Number](Random_Number.md).

```fortran
  CALL Random_Number(obj, 5)
  CALL Display( obj, "obj: ")
```

```fortran
END PROGRAM main
```
