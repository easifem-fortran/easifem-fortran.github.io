# CheckEssentialParam

Check essential parameters for creating an instance of AbstractMatrixField

## Interface

```fortran
INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
  CLASS( AbstractMatrixField_ ), INTENT( IN ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```
