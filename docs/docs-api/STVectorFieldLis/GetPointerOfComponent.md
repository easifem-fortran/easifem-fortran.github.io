# GetPointerOfComponent

Get pointer of a component.

:::caution
This method is only available for `NATIVE_SERIAL` engine.
:::

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetPointerOfComponent(obj, spaceCompo, timeCompo) &
    & RESULT(ans)
    CLASS(STVectorFieldLis_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), POINTER :: ans(:)
  END FUNCTION GetPointerOfComponent
END INTERFACE
```