# Size

This function returns the size of the sparse matrix.

:::note
The `SIZE` function work exactly the same as the Fortran's intrinsic functions.
:::

```fortran
MODULE PURE FUNCTION Size( obj, Dims ) RESULT( Ans )
  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: Dims
  INTEGER( I4B ) :: Ans
END FUNCTION Size
```
