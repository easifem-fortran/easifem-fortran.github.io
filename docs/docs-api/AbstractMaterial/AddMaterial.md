# AddMaterial

Add material to `AbstractMaterial_`.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface

Adding a single material.

```fortran
INTERFACE AddMaterial
  MODULE SUBROUTINE AddMaterial1(obj, name)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: name
  END SUBROUTINE AddMaterial1
END INTERFACE AddMaterial
```

Adding many material.

```fortran
INTERFACE AddMaterial
  MODULE SUBROUTINE AddMaterial2(obj, name)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    TYPE(String), INTENT(IN) :: name(:)
  END SUBROUTINE AddMaterial2
END INTERFACE AddMaterial
```
