# Structure

## Status

- [ ] TODO : documentation of [[ElemshapeData_]] `getMethods` `setMethods`
- [ ] TODO : support for `H1DIV_`
- [ ] TODO : support for `H1CURL_`
- [ ] TODO : support for `DG_`
- [ ] TODO : `HermitInterpolation`
- [ ] TODO: `SerendipityInterpolation`
- [ ] TODO: `HierarchyInterpolation`
- [ ] TODO: Change `continuityType` to `conformityType`

## Introduction

`ElemshapeData_` datatype contains the shape-function data related information at the integration points in a finite element. In FEM, generally we need the following information about the shape functions, at the integration points.

- Shape functions, $N$
- Local gradient of shape functions, $\frac{dN}{d\xi}$
- Global gradient of shape functions, $\frac{dN}{dx_{i}}$
- Jacobian of mapping from reference element to parent elemen $\frac{dx_{i}}{dX_{J}}$
- The value of weight function $W_{s}$
- Thickness in the case of plane-stress condition
- Barycentric coordinate of physical/parent element

One of the essential parameters for defining the shape functions is **continuity of the shape functions**, which is described below.

- `H1_`
- `H1DIV_`
- `H1CURL_`
- `DG_`

- Another important information to complete the information stored inside an instance of `ElemshapeData_` is [[QuadraturePoint_]].
- Information of the reference element [[ReferenceElement_]] is also required to construct the element shape data
- Information about the the Interpolation type is also necessary. Following interpolations are possible.
  - `LagrangeInterpolation`
  - `HermitInterpolation`
  - `SerendipityInterpolation`
  - `HierarchyInterpolation`

## Structure

The structure of this data type is given below.

```fortran
TYPE :: ElemShapeData_
  REAL(DFP), ALLOCATABLE :: N(:, :)
  REAL(DFP), ALLOCATABLE :: dNdXi(:, :, :)
  REAL(DFP), ALLOCATABLE :: jacobian(:, :, :)
  REAL(DFP), ALLOCATABLE :: js(:)
  REAL(DFP), ALLOCATABLE :: ws(:)
  REAL(DFP), ALLOCATABLE :: dNdXt(:, :, :)
  REAL(DFP), ALLOCATABLE :: thickness(:)
  REAL(DFP), ALLOCATABLE :: coord(:, :)
  REAL(DFP), ALLOCATABLE :: normal(:, :)
  TYPE(ReferenceElement_) :: refElem
  TYPE(QuadraturePoint_) :: quad
END TYPE ElemShapeData_
```

The information about these variables is given below:

- `N` shape-function value N(I,ips)
- `dNdXi` local derivative of a shape function $\frac{dN^{I}}{d\xi_{j}}$ `dNdXi(I,j,ips)`
- `jacobian` Jacobian of mapping from reference element to parent element $\frac{\partial x_{i}}{\partial \xi_{j}}$ `Jacobian(i,j,ips)`
- `js` determinant of Jacobian `Js(ips)`
- `ws` weight for numerical integration `Ws(ips)`
- `dNdXt` global derivative of a shape function $\frac{dN^{I}}{dx_{j}}$ `dNdx(I,j,ips)`
- `thickness` thickness at the integration points
- `coord` barycentric coordinates `Coord(i,ips)`
- `normal` normal vector in the case of facet element
- `refelem` pointer to the reference element [[ReferenceElement_]]
- `quad` instance of [[QuadraturePoint_]]

## Submodules

The main module is `ElemshapeData_Method.f90`, which contains following submodules.

- `@ConstructorMethods.F90`
- `@IOMethods.F90`
- `@GetMethods.F90`
- `@StabilizationParamMethods.F90`
- `@ProjectionMethods.F90`
- `@InterpolMethods.F90`
- `@LocalGradientMethods.F90`
- `@GradientMethods.F90`
- `@LocalDivergenceMethods.F90`
- `@DivergenceMethods.F90`
- `@SetMethod.F90`
- `@H1Lagrange.F90`
- `@H1Lagrange@Line.F90`
- `@H1Lagrange@Triangle.F90`
- `@H1Lagrange@Quadrangle.F90`
- `@H1Lagrange@Tetrahedron.F90`
- `@H1Lagrange@Hexahedron.F90`
- `@H1Lagrange@Prism.F90`
- `@H1Lagrange@Pyramid.F90`
- `@H1Serendipity.F90`
- `@H1Hermit.F90`
- `@H1Hierarchy.F90`
- `@H1DivLagrange.F90`
- `@H1DivSerendipity.F90`
- `@H1DivHermit.F90`
- `@H1DivHierarchy.F90`
- `@H1CurlLagrange.F90`
- `@H1CurlSerendipity.F90`
- `@H1CurlHermit.F90`
- `@H1CurlHierarchy.F90`
- `@DGLagrange.F90`
- `@DGSerendipity.F90`
- `@DGHermit.F90`
- `@DGHierarchy.F90`

For example, the submodule `ElemshapeData_Method@H1Lagrange.f90` implements the shape function which belongs to the H1 Lagrange polynomial family. It has following sub-submodules corresponding to the geometry of the reference element.

- `@Line.f90` Arbitrary order
- `@Triangle.f90` upto 3rd order
- `@Quadrangle.f90` upto 1st order
- `@Tetrahedron.f90` Todo
- `@Hexahedron.f90` Todo
- `@Prism.f90` Todo
- `@Pyramid.f90` Todo
