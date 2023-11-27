---
id: "AbstractFE_"
aliases:
  - "Structure"
tags:
  - "FiniteElement"
sidebar_position: 2
---

# Structure

`AbstractFE_` is an abstract class for finite elements.

A finite element is defined by

- Reference element 
- Polynomials space 
- Degree of freedoms

## Interface 

```fortran
TYPE, ABSTRACT :: AbstractFE_
  PRIVATE
  CLASS(AbstractRefElement_), POINTER :: refelem => NULL()
  !! reference element
  INTEGER(I4B) :: nsd = 0
  !! spatial dimension of fintie element
  INTEGER(I4B) :: order = 0
  !! Isotropic order of polynomial space
  LOGICAL(LGT) :: isIsotropicOrder = .FALSE.
  !! True if the order is same in all the direction
  INTEGER(I4B) :: anisoOrder(3)
  !! Order in x, y, and z direction
  LOGICAL(LGT) :: isAnisotropicOrder = .FALSE.
  !! True if the order is different in different directions
  INTEGER(I4B) :: edgeOrder(MAX_NO_EDGE) = 0
  !! Order on each edge of the element
  INTEGER(I4B) :: tEdgeOrder = 0
  !! The actual size of edgeOrder
  LOGICAL(LGT) :: isEdgeOrder = .FALSE.
  !! True if we set the edge order
  INTEGER(I4B) :: faceOrder(MAX_NO_FACE)
  !! Order of approximation on each face of the element
  INTEGER(I4B) :: tFaceOrder = 0
  !! The actual size of faceOrder
  LOGICAL(LGT) :: isFaceOrder = .FALSE.
  !! True if we set the face order
  INTEGER(I4B) :: cellOrder(3)
  !! Order of approximation inside the element
  INTEGER(I4B) :: tCellOrder = 0
  !! The actual size of cellOrder
  LOGICAL(LGT) :: isCellOrder = .FALSE.
  !! True if we set the cell order
  INTEGER(I4B) :: feType = 0
  !! Type of finite element
  !! Scalar, Vector, Matrix
  INTEGER(I4B) :: elemType = 0
  !! Topology type of reference elemtn
  !! Line, Triangle, Quadrangle, Tetrahedron, Hexahedron,
  !! Prism, Pyramid
  INTEGER(I4B) :: ipType = 0
  !! Type of lattice point (i.e., interpolation point type)
  INTEGER(I4B) :: dofType(4) = 0
  !! Currently it is not used
  !! dofType(1): Type of dof for shape function defined on vertex
  !! dofType(2): Type of dof for shape functions on edge
  !! dofType(3): Type of dof for shape functions on face
  !! dofType(4): Type of dof for shape functions in cell
  !! These shape functions can take following values:
  !! - FE_DOF_POINT_EVAL
  INTEGER(I4B) :: transformType = 0
  !! Currently it is not used
  !! Type of Tranformation usef for polynomial space
  !! - FE_TRANSFORM_IDENTITY
  TYPE(String) :: baseContinuity0
  !! String name of base continuity
  TYPE(String) :: baseInterpol0
  !! String name of base interpolation
  !! LagrangePolynomial
  !! SerendipityPolynomial
  !! HermitPolynomial
  !! OrthogonalPolynomial
  !! HierarchyPolynomial
  INTEGER(I4B) :: basisType(3)
  !! Integer code for basis type in x, y, and z direction
  !! Monomial
  !! Jacobi
  !! Legendre
  !! Chebyshev
  !! Lobatto
  !! Ultraspherical
  TYPE(String) :: refElemDomain
  !! String name for reference element domain.
  !! It can take following values:
  !! - UNIT
  !! - BIUNIT
  CLASS(BaseContinuity_), ALLOCATABLE :: baseContinuity
  !! continuity or conformity of basis defined on reference
  !! element, following values are allowed
  !! H1, HCurl, HDiv, DG
  CLASS(BaseInterpolation_), ALLOCATABLE :: baseInterpol
  !! Type of basis functions used for interpolation on reference
  !! element, Following values are allowed
  !! LagrangeInterpolation
  !! HermitInterpolation
  !! SerendipityInterpolation
  !! HierarchyInterpolation
  !! OrthogonalInterpolation
END TYPE AbstractFE_
```
