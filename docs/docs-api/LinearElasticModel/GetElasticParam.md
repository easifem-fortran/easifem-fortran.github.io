# GetElasticParam

Get elastic parameters stored inside the `LinearElasticModel`.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetElasticParam(obj, poissonRatio, &
     & shearModulus, lambda, youngsModulus, stiffnessPower, C, invC)
    CLASS(LinearElasticModel_), INTENT(IN) :: obj
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: poissonRatio
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: shearModulus
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: lambda
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: youngsModulus
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: stiffnessPower
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: C(:, :)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: invC(:, :)
  END SUBROUTINE GetElasticParam
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example 1">

import EXAMPLE9 from "./examples/_GetElasticParam_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="ex2" label="example 2">

import EXAMPLE27 from "./examples/_GetElasticParam_test_2.md";

<EXAMPLE27 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
