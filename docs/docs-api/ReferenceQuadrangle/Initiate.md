# Initiate

This routine initiate an instance of Quadrangle element.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE initiate_ref_Quadrangle(obj, NSD, xij)
    CLASS(ReferenceQuadrangle_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: NSD
    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)
  END SUBROUTINE initiate_ref_Quadrangle
END INTERFACE Initiate
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_Initiate_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2 (ReferenceQuadrangle)

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE ReferenceQuadrangle
  MODULE FUNCTION reference_Quadrangle(NSD, xij) RESULT(obj)
    INTEGER(I4B), INTENT(IN) :: NSD
    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)
    TYPE(ReferenceQuadrangle_) :: obj
  END FUNCTION reference_Quadrangle
END INTERFACE ReferenceQuadrangle
```

This function retuns an instance of linear quadrangle element.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE40 from "./examples/_Initiate_test_2.md";

<EXAMPLE40 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3 (ReferenceQuadrangle_Pointer)

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE ReferenceQuadrangle_Pointer
  MODULE FUNCTION reference_Quadrangle_Pointer(NSD, xij) RESULT(obj)
    INTEGER(I4B), INTENT(IN) :: NSD
    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)
    CLASS(ReferenceQuadrangle_), POINTER :: obj
  END FUNCTION reference_Quadrangle_Pointer
END INTERFACE ReferenceQuadrangle_Pointer
```

This function returns pointer to newly created linear quadrangle elements.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE72 from "./examples/_Initiate_test_3.md";

<EXAMPLE72 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Getting higher order element

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

This routine returns the higher order quadrangle element.

```fortran
INTERFACE
  MODULE SUBROUTINE highorderElement_Quadrangle(refelem, order, obj, &
    & ipType)
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    INTEGER(I4B), INTENT(IN) :: order
    CLASS(ReferenceElement_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: ipType
  END SUBROUTINE highorderElement_Quadrangle
END INTERFACE
```

:::note `ipType`
Interpolation point type. It can take following values:

- Equidistance
- GaussLegendreLobatto
- GaussChebyshevLobatto
- GaussJacobiLobatto
- GaussUltrasphericalLobatto
- GaussLegendre
- GaussChebyshev
- GaussUltrasphericalLobatto
- GaussJacobi
  :::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE105 from "./examples/_Initiate_test_4.md";

<EXAMPLE105 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
