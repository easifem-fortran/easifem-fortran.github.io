This example show how to initiate an instance of [RealVector_](./RealVector_.md)

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ) :: obj
```

Allocate the size of the vector using [Allocate](./Allocate.md) method.

```fortran
  CALL Allocate(obj, 10)
  CALL Display( obj, "test1")
```

```fortran
  obj = RealVector(10)
  CALL Display( obj, "test1")
```

Initiate an instance of [RealVector_](./RealVector_.md) by using [Initiate](./Initiate.md).

```fortran
  CALL Initiate(obj, 10)
  CALL Display( obj, "test1")
```

```fortran
END PROGRAM main
```
