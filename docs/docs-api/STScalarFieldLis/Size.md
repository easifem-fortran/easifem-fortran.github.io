# Size

This function returns the size of the field.

## Interface

```fortran
FUNCTION Size( obj, dims ) RESULT( ans )
CLASS( STScalarField_ ), INTENT( IN ) :: obj
INTEGER( I4B ), OPTIONAL :: dims
INTEGER( I4B ) :: ans
END FUNCTION Size
```
