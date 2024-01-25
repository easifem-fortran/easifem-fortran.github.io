# GetParam

Get elastic parameters stored inside the `LinearElasticModel`.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetParam(obj, elasticityType,  &
    & nu, G, youngsModulus, lambda, C, invC, stiffnessPower)
    CLASS(LinearElasticModel_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: elasticityType
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: nu
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: G
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: youngsModulus
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: lambda
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: C(6, 6)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: invC(6, 6)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: stiffnessPower
  END SUBROUTINE GetParam
END INTERFACE
```
