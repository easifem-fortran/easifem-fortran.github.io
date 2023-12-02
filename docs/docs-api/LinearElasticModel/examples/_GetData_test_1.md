:::info
This example shows the use of `GetData` method.
:::

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param

CALL FPL_INIT
```

:::info
For Isotropic elasticity data-size is 2.
:::

```fortran
BLOCK
  REAL(DFP) :: ans

  CALL param%initiate()
  CALL SetLinearElasticModelParam( &
    & param=param,  &
    & elasticityType=TypeElasticity%Isotropic, &
    & poissonRatio=0.3_DFP, &
    & youngsModulus=1.0D+6)
  CALL obj%Initiate(param)
  ans = obj%GetDataSize()

  CALL OK(ans .EQ. 2, "Isotropic: ")

  CALL param%DEALLOCATE()
  CALL obj%DEALLOCATE()
END BLOCK
```

:::info
For Anisotropic elasticity data-size is 21.
:::

```fortran
BLOCK
  REAL(DFP) :: ans, C(6, 6), invC(6, 6)

  CALL param%initiate()
  C = 0.0
  invC = 0.0
  CALL SetLinearElasticModelParam(param=param,  &
    & elasticityType=TypeElasticity%AnIsotropic, C=C, invC=invC)
  CALL obj%Initiate(param)
  ans = obj%GetDataSize()

  CALL OK(ans .EQ. 21, "Anisotropic: ")

  CALL param%DEALLOCATE()
  CALL obj%DEALLOCATE()
END BLOCK
```

:::info
For Orthotropic elasticity data-size is 9.
:::

```fortran
BLOCK
  REAL(DFP) :: ans, C(6, 6), invC(6, 6)

  CALL param%initiate()
  C = 0.0
  invC = 0.0
  CALL SetLinearElasticModelParam(param=param,  &
    & elasticityType=TypeElasticity%Orthotropic, C=C, invC=invC)
  CALL obj%Initiate(param)
  ans = obj%GetDataSize()

  CALL OK(ans .EQ. 9, "Orthotropic: ")

  CALL param%DEALLOCATE()
  CALL obj%DEALLOCATE()
END BLOCK
```

:::info
For TransIsotropic the data size is 5.
:::

```fortran
BLOCK
  REAL(DFP) :: ans, C(6, 6), invC(6, 6)

  CALL param%initiate()
  C = 0.0
  invC = 0.0
  CALL SetLinearElasticModelParam(param=param,  &
    & elasticityType=TypeElasticity%TransIsotropic, C=C, invC=invC)
  CALL obj%Initiate(param)
  ans = obj%GetDataSize()

  CALL OK(ans .EQ. 5, "TransIsotropic: ")

  CALL param%DEALLOCATE()
  CALL obj%DEALLOCATE()
END BLOCK

CALL FPL_FINALIZE
END PROGRAM main
```
