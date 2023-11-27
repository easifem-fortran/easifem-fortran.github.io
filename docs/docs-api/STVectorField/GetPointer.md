# GetPointer

This routine returns the pointer to a FORTRAN real vector.

## Interface

```fortran
FUNCTION GetPointer( obj ) RESULT( ans )
CLASS( STVectorField_ ), TARGET, INTENT( IN ) :: obj
REAL( DFP ), POINTER :: ans( : )
END FUNCTION GetPointer
```
