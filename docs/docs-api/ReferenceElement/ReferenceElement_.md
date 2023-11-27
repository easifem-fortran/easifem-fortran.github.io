# Structure

ReferenceElement type is designed for handling the reference domains of finite elements.

```fortran
TYPE :: ReferenceElement_
  REAL(DFP), ALLOCATABLE :: xiJ(:, :)
    !! Node coord
  INTEGER(I4B) :: entityCounts(4) = 0
    !! Number of 0D, 1D, 2D, 3D entities
  INTEGER(I4B) :: xiDimension = 0
    !! Xidimension
  INTEGER(I4B) :: name = 0
    !! name of the element
  INTEGER(I4B) :: order = 0
    !! Order of element
  INTEGER(I4B) :: nsd = 0
    !! Number of spatial dimensions
  INTEGER(I4B) :: interpolationPointType = Equidistance
    !! Interpolation point
    !! Equidistance, GaussLegendre, GaussLobatto, Chebyshev
  TYPE(ReferenceTopology_), ALLOCATABLE :: topology(:)
    !! Topology information of 0D, 1, 2, 3D entities
PROCEDURE(highorder_refelem), POINTER, PASS(obj) :: highOrderElement => NULL()
    !! Routine to generate hgher order LagrangeElement
END TYPE ReferenceElement_
```

:::info `xiJ`
:::

- Nodal coordinates of the ReferenceElement.
- Rows of xij denotes the spatial coordinates, for example, `xij(2, :)` denotes y coordinates.
- Columns of `xiJ` denote the number of nodes in the element

:::info `entityCounts`
:::

`entityCounts(xidim)` denotes the total number of entity of codimension, `xidim`=0,1,2,3.

:::info `xidimension`
:::

Codimension of element.

| xidim |                 |
|:-----:|:---------------:|
|   0   |      point      |
|   1   | curve (or line) |
|   2   |     surface     |
|   3   |     volume      |

:::info `name`
:::

name of the reference element. Name is hardcoded in GlobalData by using 4-byte integers.

<details>
<summary>Click here to see the name</summary>
<div>

```fortran
INTEGER(I4B), PARAMETER :: Line = 1
INTEGER(I4B), PARAMETER :: Line2 = 1
INTEGER(I4B), PARAMETER :: Line3 = 8
INTEGER(I4B), PARAMETER :: Line4 = 26
INTEGER(I4B), PARAMETER :: Line5 = 27
INTEGER(I4B), PARAMETER :: Line6 = 28
INTEGER(I4B), PARAMETER :: Triangle = 2
INTEGER(I4B), PARAMETER :: Triangle3 = 2
INTEGER(I4B), PARAMETER :: Triangle6 = 9
INTEGER(I4B), PARAMETER :: Triangle9 = 20
INTEGER(I4B), PARAMETER :: Triangle10 = 21
INTEGER(I4B), PARAMETER :: Triangle12 = 22
INTEGER(I4B), PARAMETER :: Triangle15a = 23
INTEGER(I4B), PARAMETER :: Triangle15b = 24
INTEGER(I4B), PARAMETER :: Triangle15 = 24
INTEGER(I4B), PARAMETER :: Triangle21 = 25
INTEGER(I4B), PARAMETER :: Quadrangle = 3
INTEGER(I4B), PARAMETER :: Quadrangle4 = 3
INTEGER(I4B), PARAMETER :: Quadrangle9 = 10
INTEGER(I4B), PARAMETER :: Quadrangle8 = 16
INTEGER(I4B), PARAMETER :: Quadrangle16 = 160
INTEGER(I4B), PARAMETER :: Tetrahedron = 4
INTEGER(I4B), PARAMETER :: Tetrahedron4 = 4
INTEGER(I4B), PARAMETER :: Tetrahedron10 = 11
INTEGER(I4B), PARAMETER :: Tetrahedron20 = 29
INTEGER(I4B), PARAMETER :: Tetrahedron35 = 30
INTEGER(I4B), PARAMETER :: Tetrahedron56 = 31
INTEGER(I4B), PARAMETER :: Hexahedron = 5
INTEGER(I4B), PARAMETER :: Hexahedron8 = 5
INTEGER(I4B), PARAMETER :: Hexahedron27 = 12
INTEGER(I4B), PARAMETER :: Hexahedron20 = 17
INTEGER(I4B), PARAMETER :: Hexahedron64 = 92
INTEGER(I4B), PARAMETER :: Hexahedron125 = 93
INTEGER(I4B), PARAMETER :: Prism = 6
INTEGER(I4B), PARAMETER :: Prism6 = 6
INTEGER(I4B), PARAMETER :: Prism18 = 13
INTEGER(I4B), PARAMETER :: Prism15 = 18
INTEGER(I4B), PARAMETER :: Pyramid = 7
INTEGER(I4B), PARAMETER :: Pyramid5 = 7
INTEGER(I4B), PARAMETER :: Pyramid14 = 14
INTEGER(I4B), PARAMETER :: Pyramid13 = 19
INTEGER(I4B), PARAMETER :: Point = 15
INTEGER(I4B), PARAMETER :: Point1 = 15
```

</div>
</details>

:::info `order`
:::

order of element

:::info `nsd`
:::

number of spatial dimension of element.

:::info `topology`
:::

- It is a vector of ReferenceTopology, which represents the topology of entities present in the reference elements.
- For example, a triangle is made from three points, three lines, and a surface. The points, lines, and surfaces are called entities of triangle.
- **Point** topology ranges from 1 to `entityCounts(1)`
- **Curve** topology ranges from `entityCounts(1)+1` to `entityCounts(1)+entityCounts(2)`
- **Surface** topology ranges from `entityCounts(1)+entityCounts(2)+1` to `entityCounts(1)+entityCounts(2)+entityCounts(3)`
- **Volume** topology ranges from `entityCounts(1)+entityCounts(2)+entityCounts(3)+1` to `entityCounts(1)+entityCounts(2)+entityCounts(3)+entityCounts(4)`

In this way, the size of `topology` is equal to the sum of all the entities of `entityCounts`.

:::info `lagrangeElement`
:::

This is a procedure pointer, which returns the lagrange element of higher order.
