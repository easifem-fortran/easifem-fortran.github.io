# Size

Returns the size of `obj%Points`

Calling example:

```fortran
a = SIZE(obj, 1)
b = SIZE(obj,2)
```

:::note

- Total number of quadrature points are give by `SIZE(quad, 2)`
- The weights are kept in the last row, that is `SIZE(quad,1)`
:::

## Interface

```fortran
MODULE PURE FUNCTION Size( obj, dims ) RESULT( Ans )
  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: dims
  INTEGER( I4B ) :: Ans
END FUNCTION Size
```
