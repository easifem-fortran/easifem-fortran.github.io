# CheckEssentialParam

Check essential parameters for creating an instance of BlockMatrixField

## Interface

```fortran
INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
  CLASS( BlockMatrixField_ ), INTENT( IN ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```
