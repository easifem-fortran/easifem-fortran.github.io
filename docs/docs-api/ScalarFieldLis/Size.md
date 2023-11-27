# Size

This function returns the size of the field.

:::note
This function has been implemented for NATIVE engine.
:::

## Interface

```fortran
FUNCTION Size( obj, dims ) RESULT( ans )
CLASS(ScalarFieldLis_), INTENT( IN ) :: obj
INTEGER( I4B ), OPTIONAL :: dims
INTEGER( I4B ) :: ans
END FUNCTION Size
```
