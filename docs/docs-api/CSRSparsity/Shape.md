# Shape

This function Returns the shape of the array.

```fortran
MODULE PURE FUNCTION Shape( obj ) RESULT( Ans )
  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj
  INTEGER( I4B ) :: Ans( 2 )
END FUNCTION Shape
```
