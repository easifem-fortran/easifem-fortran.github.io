# GetTotalQuadraturePoints

Returns the total number of quadrature points.

Calling example:

```fortran
a = GetTotalQuadraturePoints(obj)
```

## Interface

```fortran
MODULE PURE FUNCTION GetTotalQuadraturePoints( obj, dims ) RESULT( Ans )
  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: dims
  INTEGER( I4B ) :: Ans
END FUNCTION GetTotalQuadraturePoints
```
