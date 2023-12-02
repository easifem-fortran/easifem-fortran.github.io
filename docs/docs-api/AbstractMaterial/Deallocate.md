# Deallocate

Deallocate data stored in the `AbstractMaterial_` class.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE AbstractMaterialDeallocate
  MODULE SUBROUTINE obj_Deallocate(obj)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
  END SUBROUTINE obj_Deallocate
END INTERFACE AbstractMaterialDeallocate
```
