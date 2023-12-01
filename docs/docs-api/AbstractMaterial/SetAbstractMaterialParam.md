# SetAbstractMaterialParam

Set parameter for initiating the `AbstractMaterial_`

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetAbstractMaterialParam(param, prefix, name)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: prefix
    CHARACTER(*), INTENT(IN) :: name
  END SUBROUTINE SetAbstractMaterialParam
END INTERFACE
```

:::info `prefix`
You can get `prefix` from `GetPrefix` method.
:::

:::info `name`
Name of the material.
:::
