---
sidebar_label: QuadraturePoint
---

# QuadraturePoint_Tetrahedron

This function returns the quadrature points on the tetrahedron.

Calling example.

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE QuadraturePoint_Tetrahedron
  MODULE FUNCTION QuadraturePoint_Tetrahedron1(&
    & order, &
    & quadType, &
    & refTetrahedron, &
    & xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand
    INTEGER(I4B), INTENT(IN) :: quadType
    !! quadrature point type
    !! currently this variable is not used
    CHARACTER(*), INTENT(IN) :: refTetrahedron
    !! Reference triangle
    !! BIUNIT
    !! UNIT
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of triangle.
    !! The number of rows in xij should be  3.
    !! The number of columns in xij should be 4
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! Quadrature points
  END FUNCTION QuadraturePoint_Tetrahedron1
END INTERFACE QuadraturePoint_Tetrahedron
```

:::info `refTetrahedron`
:::

`refTetrahedron` can be `UNIT` or `BIUNIT`. By default, quadrature points are computed on the unit tetrahedron domain. This argument is used to transfer those points to the specified domain of the tetrahedron. If `xij` is present then this argument is ignored.

:::info `xij`
:::

Nodal coordinates of the tetrahedron. The number of rows should be 3 corresponding to $x,y,z$ components. The number of columns in `xij` should be 4 corresponding to the 4 vertices of tetrahedron. The returned quadrature points will be in this domain.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE14 from "./\_QuadraturePoint_Tetrahedron_test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE QuadraturePoint_Tetrahedron
  MODULE FUNCTION QuadraturePoint_Tetrahedron2(&
    & nips, &
    & quadType, &
    & refTetrahedron, &
    & xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! nips(1) .LE. 79, then we call
    !! economical quadrature rules.
    !! Otherwise, this routine will retport
    !! error
    INTEGER(I4B), INTENT(IN) :: quadType
    !! quadrature point type,
    !! currently this variable is not used
    CHARACTER(*), INTENT(IN) :: refTetrahedron
    !! Reference triangle
    !! BIUNIT
    !! UNIT
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of triangle.
    !! The number of rows in xij should be 3
    !! The number of columns in xij should be 4
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! Quadrature points
  END FUNCTION QuadraturePoint_Tetrahedron2
END INTERFACE QuadraturePoint_Tetrahedron
```

Return quadrature points by specifying the number of integration points `nips`. Currently, following `nips` are allowed.

```txt
1, 4, 5, 11, 14, 24, 31, 43, 53, 126, 210, 330, 495, 715, 1001
```

