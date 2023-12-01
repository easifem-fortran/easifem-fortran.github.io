# GetStressStrainModelPointer

Returns the pointer to the stress-strain model.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetStressStrainModelPointer(obj) RESULT(ans)
    CLASS(SolidMaterial_), INTENT(IN) :: obj
    CLASS(AbstractSolidMechanicsModel_), POINTER :: ans
  END FUNCTION GetStressStrainModelPointer
END INTERFACE
```
