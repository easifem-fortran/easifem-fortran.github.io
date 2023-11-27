# GetPointer

This routine returns the pointer to a FORTRAN real vector.

:::note
This method is only avaiable for `NATIVE_SERIAL` engine.
:::

## Interface

```fortran
FUNCTION getPointer( obj ) RESULT( ans )
CLASS( BlockNodeField_ ), TARGET, INTENT( IN ) :: obj
REAL( DFP ), POINTER :: ans( : )
END FUNCTION getPointer
```
