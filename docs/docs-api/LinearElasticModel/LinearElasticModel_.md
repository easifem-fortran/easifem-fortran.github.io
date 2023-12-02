---
sidebar_position: 2
---

# Structure

`LinearElasticModel_` is the class for modeling linear elastic material behavior.

`LinearElasticModel_` is a subclass of [AbstractSolidMechanicsModel](/docs-api/AbstractSolidMechanicsModel).

```fortran
TYPE, EXTENDS(AbstractSolidMechanicsModel_) :: LinearElasticModel_
  PRIVATE
  INTEGER(I4B) :: elasticityType = 0
  REAL(DFP) :: nu = 0.0_DFP
  REAL(DFP) :: G = 0.0_DFP
  REAL(DFP) :: E = 0.0_DFP
  REAL(DFP) :: lambda = 0.0_DFP
  REAL(DFP) :: C(6, 6) = 0.0_DFP
  REAL(DFP) :: invC(6, 6) = 0.0_DFP
  REAL(DFP) :: stiffnessPower = 0.0_DFP
END TYPE
```
