# SetLinearElasticParam

Set the essential parameter for initiating an instance of `LinearElasticModel_`

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetLinearElasticModelParam(param, elasticityType, &
    & isPlaneStrain, isPlaneStress, poissonRatio, youngsModulus, &
    & shearModulus, lambda, C, invC, stiffnessPower)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    INTEGER(I4B), INTENT(IN) :: elasticityType
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isPlaneStress
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isPlaneStrain
    REAL(DFP), OPTIONAL, INTENT(IN) :: poissonRatio
    REAL(DFP), OPTIONAL, INTENT(IN) :: youngsModulus
    REAL(DFP), OPTIONAL, INTENT(IN) :: shearModulus
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    REAL(DFP), OPTIONAL, INTENT(IN) :: C(6, 6)
    REAL(DFP), OPTIONAL, INTENT(IN) :: invC(6, 6)
    REAL(DFP), OPTIONAL, INTENT(IN) :: stiffnessPower
  END SUBROUTINE SetLinearElasticModelParam
END INTERFACE
```

:::info `elasticityType`
Elasticity type. It can take following values:

- `TypeElasticity%Isotropic` for isotropic elasticity
- `TypeElasticity%Anisotropic` for anisotropic elasticity.
- `TypeElasticity%Orthotropic` for orthotropic elasticity.

:::

:::note `isPlaneStress`
Set it to true if the problem is plane stress.

:::

:::info `isPlaneStrain`
Set it to true if the problem is plane strain.

:::

:::note `poissonRatio`
Poisson's Ratio.

:::

:::info `youngsModulus`
Youngs modules.

:::

:::note `shearModulus`
Shear modulus.

:::

:::info `lambda`
Lame parameter.

:::

:::note `C`
Elastic tangent matrix.

:::

:::info `invC`
Inverse of tangent matrix.

:::
