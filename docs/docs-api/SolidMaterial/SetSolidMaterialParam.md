# SetSolidMaterialParam

Set the parameters to initiate an instance of `SolidMaterial_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetSolidMaterialParam(param, name, stressStrainModel)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    !! It is the name of the material
    CHARACTER(*), OPTIONAL, INTENT(IN) :: stressStrainModel
    !! Name of the child-class of `AbstractSolidMechanicsModel_`
    !! For example `LinearElasticModel`
  END SUBROUTINE SetSolidMaterialParam
END INTERFACE
```

:::info `name`
Name of the solid material.
:::

:::info `stressStrainModel`
name of the stress-strain model.
:::
