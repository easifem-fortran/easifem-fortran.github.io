# CheckEssentialParam

Check essential parameters for creating an instance of AbstractField

Inherited from [AbstractField_](../AbstractField/CheckEssentialParam.md)

## Interface

```fortran
ABSTRACT INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
  IMPORT :: AbstractField_, ParameterList_
  CLASS( AbstractField_ ), INTENT( IN ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```
