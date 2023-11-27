# CheckEssentialParam

Check essential parameters for creating an instance of Field

## Interface

```fortran
INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
  CLASS( STVectorFieldLis_ ), INTENT( IN ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```
