# Deallocate

Deallocate the contents of `SolidMaterial_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(SolidMaterial_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

:::note
To deallocate the vector of `SolidMaterial_` you can call generic routine called `Deallocate`

```fortran
INTERFACE DEALLOCATE
  MODULE SUBROUTINE Deallocate_Vector(obj)
    TYPE(SolidMaterial_), ALLOCATABLE :: obj(:)
  END SUBROUTINE Deallocate_Vector
END INTERFACE DEALLOCATE
```

:::

:::note
To deallocate the vector of `SolidMaterialPointer_`, you can call generic routine called `Deallocate`.

```fortran
INTERFACE DEALLOCATE
  MODULE SUBROUTINE Deallocate_Ptr_Vector(obj)
    TYPE(SolidMaterialPointer_), ALLOCATABLE :: obj(:)
  END SUBROUTINE Deallocate_Ptr_Vector
END INTERFACE DEALLOCATE
```

:::
