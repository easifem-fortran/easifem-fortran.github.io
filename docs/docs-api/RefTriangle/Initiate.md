---
sidebar_position: 4
---

# Initiate

Initiate an instance of reference element

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE refelem_Initiate(obj, nsd, baseContinuity, baseInterpol)
    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nsd
      !! Spatial dimension of element
    CHARACTER(*), INTENT(IN) :: baseContinuity
      !! Continuity or Conformity of basis function.
      !! H1 * Default
      !! HDiv
      !! HCurl
      !! DG
    CHARACTER(*), INTENT(IN) :: baseInterpol
      !! Basis function family used for interpolation
      !! LagrangeInterpolation, LagrangePolynomial
      !! SerendipityInterpolation, SerendipityPolynomial
      !! HierarchyInterpolation, HierarchyPolynomial
      !! OrthogonalInterpolation, OrthogonalPolynomial
      !! HermitInterpolation, HermitPolynomial
  END SUBROUTINE refelem_Initiate
END INTERFACE
```

:::note `baseInterpol`
:::

It represents the basis function family used for interpolation. Following values are possible:

- `LagrangeInterpolation`
- `LagrangePolynomial`
- `Lagrange`
- `SerendipityInterpolation`
- `Serendipity`
- `HierarchyInterpolation`
- `HierarchyPolynomial`
- `Hierarchy`
- `OrthogonalInterpolation `
- `OrthogonalPolynomial`
- `Orthogonal`
- `HermitInterpolation `
- `HermitPolynomial`
- `Hermit`


</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE14 from "./_Initiate_test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
