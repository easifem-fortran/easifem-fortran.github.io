# GetPointer

This routine returns the pointer to a FORTRAN real vector.

:::note
This method is available for NATIVE engine only, and it is not available ScalarFieldLis.
:::

## Interface

```fortran
FUNCTION getPointer( obj ) RESULT( ans )
CLASS( ScalarFieldLis_ ), TARGET, INTENT( IN ) :: obj
REAL( DFP ), POINTER :: ans( : )
END FUNCTION getPointer
```
