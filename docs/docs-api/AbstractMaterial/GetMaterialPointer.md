# GetMaterialPointer

Get the pointer to the [UserFunction](/docs-api/UserFunction) for the given material name.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetMaterialPointer(obj, name) RESULT(matPtr)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: name
    TYPE(UserFunction_), POINTER :: matPtr
  END FUNCTION GetMaterialPointer
END INTERFACE
```

:::caution
Make sure that the material `name` is present. You can check it by using the method [IsMaterialPresent](./IsMaterialPresent).
:::
