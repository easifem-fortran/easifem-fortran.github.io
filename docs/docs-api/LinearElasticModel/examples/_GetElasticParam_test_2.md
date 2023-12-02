:::info
This example shows usage of GetElasticParam for plane stress and plane strain.
:::

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param

CALL FPL_INIT; CALL param%initiate()

CALL SetLinearElasticModelParam( &
  & param=param,  &
  & elasticityType=TypeElasticity%Isotropic, &
  & poissonRatio=0.3_DFP, &
  & youngsModulus=1.0D+6,  &
  & isplaneStress=.TRUE.)

CALL obj%Initiate(param)

BLOCK
  REAL(DFP) :: ans
  CALL obj%GetElasticParam(poissonRatio=ans)
  CALL OK(ans.APPROXEQ.0.3_DFP, "poissonRatio: ")

  CALL obj%GetElasticParam(shearModulus=ans)
  CALL Display(ans, "shearModulus: ")

  CALL obj%GetElasticParam(youngsModulus=ans)
  CALL OK(ans.APPROXEQ.1.0D+6, "youngsModulus: ")

  CALL obj%GetElasticParam(lambda=ans)
  CALL Display(ans, "lambda: ")
END BLOCK
```

:::info
In the following case we will get `C` and `invC`. Here, make sure `C` and `invC` are 6 by 6.

In case of plane-stress and plane-strain we only access $(3,3)$ block. So, in case of plane-stress and plane-strain, 3 by 3 matrix is also OK.
:::

```fortran
BLOCK
  REAL(DFP) :: ans(6, 6)
  CALL obj%GetElasticParam(C=ans)
  CALL Display(ans, "C: ")

  CALL BlankLines()
  CALL obj%GetElasticParam(invC=ans)
  CALL Display(ans, "invC: ")
END BLOCK

BLOCK
  REAL(DFP) :: ans(3, 3)
  CALL obj%GetElasticParam(C=ans)
  CALL Display(ans, "C: ")

  CALL BlankLines()
  CALL obj%GetElasticParam(invC=ans)
  CALL Display(ans, "invC: ")
END BLOCK

CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
```
