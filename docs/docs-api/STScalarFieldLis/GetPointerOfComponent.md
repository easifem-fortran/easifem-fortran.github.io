# GetPointerOfComponent

Get pointer of component.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION  getPointerOfComponent(obj, timeCompo) RESULT(ans)
    CLASS(STScalarField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), POINTER :: ans(:)
  END FUNCTION  getPointerOfComponent
END INTERFACE
```
