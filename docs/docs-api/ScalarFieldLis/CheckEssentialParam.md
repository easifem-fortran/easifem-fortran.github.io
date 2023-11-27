# CheckEssentialParam

Check essential parameters for creating an instance of ScalarField.

## Interface

```fortran
INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
  CLASS( ScalarFieldLis_ ), INTENT( IN ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```
