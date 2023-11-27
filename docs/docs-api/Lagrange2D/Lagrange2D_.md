---
author: Vikas Sharma, Ph.D.
date: 14 Aug 2022
---

#  Lagrange2D

## Introduction

Lagrange2D is a class for constructing lagrange polynomials in 2D. The polynomials set is extracted from Pascal's triangle. There are two possibility.

$$
P_{k} := Span{\left \lbrace x_{1}^{p_1}x_{2}^{p_2}; p_{1}+p_{2} \le k \right \rbrace }
$$

$$
Q_{k} := Span{\left \lbrace x_{1}^{p_1}x_{2}^{p_2}; max(p_{1},p_{2}) \le k \right \rbrace }
$$

## Structure

[[Lagrange2D_]] is a child of [[Polynomial2D_]].

## Constructor Methods

### Lagrange2D function

There is a generic function called `Lagrange2D`. Currently, it has 3 interfaces.

**Interface-1:**

```fortran
INTERFACE
MODULE FUNCTION Lagrange2D( i, x, order, name1, name2, pType ) &
  & RESULT( ans )
  INTEGER( I4B ), INTENT( IN ) :: i
  !! ith lagrange polynomial
  REAL( DFP ), INTENT( IN ) :: x( :, : )
  !! interpolation points in $x_{iJ}$ format
  INTEGER( I4B ), INTENT( IN ) :: order
  !! order
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
  !! variable name
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
  !! variable name
  CHARACTER( LEN = * ), INTENT( IN ) :: pType
  !! "P" or "Triangle"
  !! "Q" or "Quadrangle"
  TYPE( Lagrange2D_ ) :: ans
  !! Polynomial in 2D
END FUNCTION Lagrange2D
END INTERFACE
```

- `x(:,:)` is nodal coordinates in $x_{iJ}$ format.

- **Interface-2:**

```fortran
INTERFACE
MODULE FUNCTION Lagrange2D( i, v, order, name1, name2, pType, &
  & isVandermonde ) RESULT( ans )
  INTEGER( I4B ), INTENT( IN ) :: i
  !! ith lagrange polynomial
  REAL( DFP ), INTENT( IN ) :: v( :, : )
  !! Vandermonde matrix
  INTEGER( I4B ), INTENT( IN ) :: order
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
  !! variable name
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
  !! variable name
  CHARACTER( LEN = * ), INTENT( IN ) :: pType
  !! "P" or "Triangle"
  !! "Q" or "Quadrangle"
  LOGICAL( LGT ), INTENT( IN ) :: isVandermonde
  !! This is just to resolve interface issue
  TYPE( Lagrange2D_ ) :: ans
END FUNCTION Lagrange2D
END INTERFACE
```

**Interface-3:**

```fortran
INTERFACE
MODULE FUNCTION Lagrange2D( i, v, order, ipiv, name1, name2, pType) &
  & RESULT( ans )
  INTEGER( I4B ), INTENT( IN ) :: i
  !! ith lagrange polynomial
  REAL( DFP ), INTENT( INOUT ) :: v( :, : )
  !! LU decomposition of Vandermonde matrix
  INTEGER( I4B ), INTENT( IN ) :: order
  INTEGER( I4B ), INTENT( IN ) :: ipiv( : )
  !! inverse pivoting mapping, compes from LU decomposition
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
  !! variable name
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
  !! variable name
  CHARACTER( LEN = * ), INTENT( IN ) :: pType
  !! "P" or "Triangle"
  !! "Q" or "Quadrangle"
  TYPE( Lagrange2D_ ) :: ans
END FUNCTION Lagrange2D
END INTERFACE
```
