# CheckEssentialParam

Check essential parameters for creating an instance of BlockField.

## Interface

```fortran
INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
  CLASS( BlockNodeField_ ), INTENT( IN ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```
