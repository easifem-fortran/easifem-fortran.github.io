# GetPointer

This routine returns the pointer to a FORTRAN real vector.

:::note
This method is available for NATIVE engine only.
:::

## Interface

```fortran
FUNCTION getPointer( obj ) RESULT( ans )
CLASS( AbstractNodeField_ ), TARGET, INTENT( IN ) :: obj
REAL( DFP ), POINTER :: ans( : )
END FUNCTION getPointer
```
