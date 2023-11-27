# Deallocate

Deallocate the space occupied by the field.

## Interface

```fortran
ABSTRACT INTERFACE
SUBROUTINE Deallocate( obj )
  IMPORT :: AbstractField_
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj
END SUBROUTINE Deallocate
END INTERFACE
```
