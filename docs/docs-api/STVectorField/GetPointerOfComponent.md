# GetPointerOfComponent

Get pointer of a component.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetPointerOfComponent(obj, spaceCompo, timeCompo) &
    & RESULT(ans)
    CLASS(STVectorField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), POINTER :: ans(:)
  END FUNCTION GetPointerOfComponent
END INTERFACE
```
