---
sidebar_position: 1
date: 2023-03-17
update: 2023-03-17
status: stable
docs: done
extpkgs: none
category:
  - Polynomials
  - Basis
tags:
  - easifemClasses
  - basis
  - shapefunctions
  - polynomials
---

# AbstractOrthopol1D

`AbstractOrthopol1D` is an abstract class for orthogonal polynomials in one dimension.

:::info
`AbstractOrthopol1D` It is a child of [AbstractBasis1D](../AbstractBasis/AbstractBasis_.md).
:::

## Structure

```fortran
TYPE, ABSTRACT,  EXTENDS( AbstractBasis1D_ ) :: &
  & AbstractOrthopol1D_
  PRIVATE
  INTEGER( I4B ) :: n = 0
    !! order of orthogonal polynomial
  REAL( DFP ) :: an_1= 0.0_DFP
    !! $\alpha_{n-1}$
  REAL( DFP ) :: bn_1 = 0.0_DFP
    !! $\beta_{n-1}$
  REAL( DFP ) :: sn_1 = 1.0_DFP
    !! scale for $Orthopol_{n-1}$
  REAL( DFP ) :: sn_2 = 1.0_DFP
    !! scale for $Orthopol_{n-2}$
  CLASS( AbstractOrthopol1D_ ), POINTER :: Jn_1 => NULL()
    !! Jacobi polynomial of order n-1
  CLASS( AbstractOrthopol1D_ ), POINTER :: Jn_2 => NULL()
    !! Jacobi polynomial of order n-2
```

---

## ConstructorMethods

### Initiate

### Deallocate

### isInitiated

---

## IOMethods

### Display

---

## GetMethods

### GetJ1Pointer

### GetJn2Pointer

### GetOrder

### Eval

Evaluate the polynomial at given point $x$. If $x$ is a vector, the result will also be a vector. The interface is given below.

```fortran
MODULE ELEMENTAL FUNCTION Eval( obj, x ) RESULT( ans )
  CLASS( AbstractOrthopol1D_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x
  REAL( DFP ) :: ans
END FUNCTION Eval
```

### P0

### Pm1

### dP0

### dPm1

### EvalGradient

Evaluate the gradient of the polynomial at a given point. If the input argument is a vector then output argument will also be a vector. The interface is given below.

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION EvalGradient( obj, x ) &
  & RESULT( ans )
  CLASS( AbstractOrthopol1D_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x
  REAL( DFP ) :: ans
END FUNCTION EvalGradient
END INTERFACE
```

### BasisEval

### BasisEvalGradient

### GetStringToDisplay

### GetStringForUID

### Weight

### GetRecurrenceCoeff

### GetCoeffScale

### Zeros

### GaussQuadrature

### GaussLegendreQuadrature

### GaussLobattoQuadrature

---

## SetMethods

### SetParam

import DocCardList from '@theme/DocCardList';

<DocCardList />
