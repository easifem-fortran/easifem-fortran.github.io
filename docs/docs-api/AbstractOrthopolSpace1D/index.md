---
sidebar_position: 1
date: 2023-08-04
update: 2023-08-04
status: stable
docs: done
extpkgs: none
category:
  - Basis
  - ShapeFunctions
tags:
  - easifemClasses
  - shapeFunctions
  - basis
  - orthogonalBasis
  - higher-order
---

# AbstractOrthoSpace1D

<span class="badge badge--primary">Full name: AbstractOrthopolSpace1D </span>

## Structure

```fortran
TYPE, ABSTRACT :: AbstractOrthopolSpace1D_
  PRIVATE
  REAL(DFP) :: domain(2) = [-1.0_DFP, 1.0_DFP]
    !! domain of orthogonal polynomials
CONTAINS
```

## Methods

### Deallocate

Deallocate the object

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractOrthopolSpace1D_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

### SetParam

Set the parameters

```fortran
INTERFACE
  MODULE PURE SUBROUTINE SetParam(obj, domain)
    CLASS(AbstractOrthopolSpace1D_), INTENT(INOUT) :: obj
    REAL(DFP), OPTIONAL, INTENT(IN) :: domain(2)
  END SUBROUTINE SetParam
END INTERFACE
```

### Display

Display the contents

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitno)
    CLASS(AbstractOrthopolSpace1D_), INTENT(INOUT) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE Display
END INTERFACE
```

### GetRecurrenceCoeff

Returns the recurrence coefficient of monic polynomials

```fortran
INTERFACE
  MODULE PURE FUNCTION GetRecurrenceCoeff(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(0:n - 1, 1:2)
    !! ans(:,1) = alpha
    !! ans(:,2) = beta
  END FUNCTION GetRecurrenceCoeff
END INTERFACE
```

### GetRecurrenceCoeff2

Returns the recurrence coefficient of standard polynomials.

$$
p_{n+1} = (a_{n}x+b_{n})p_{n}-c_{n}p_{n-1}
$$

```fortran
INTERFACE
  MODULE PURE FUNCTION GetRecurrenceCoeff2(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(0:n - 1, 1:3)
    !! ans(:,1) = a,
    !! ans(:,2) = b
    !! ans(:,3) = c
  END FUNCTION GetRecurrenceCoeff2
END INTERFACE
```

### GetAlpha

Returns the recurrence coefficient $\alpha$ of monic polynomials

```fortran
INTERFACE
  MODULE PURE FUNCTION GetAlpha(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION GetAlpha
END INTERFACE
```

### GetBeta

Returns the recurrence coefficient beta of monic polynomials

```fortran
INTERFACE
  MODULE PURE FUNCTION GetBeta(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION GetBeta
END INTERFACE
```

### GetLeadingCoeff

Returns the leading coeff of orthopol.

```fortran
INTERFACE
  MODULE PURE FUNCTION GetLeadingCoeff(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION GetLeadingCoeff
END INTERFACE
```

### GetLeadingCoeffRatio

Returns the ration of leading coeff of orthopol (n+1)/n

```fortran
INTERFACE
  MODULE PURE FUNCTION GetLeadingCoeffRatio(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION GetLeadingCoeffRatio
END INTERFACE
```

### GetNormSqr

Returns the ration of leading coeff of orthopol (n+1)/n

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNormSqr(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION GetNormSqr
END INTERFACE
```

### GetNormSqr2

Returns the ratio of leading coeff of orthopol (n+1)/n

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNormSqr2(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(0:n)
  END FUNCTION GetNormSqr2
END INTERFACE
```

### GetNormSqrRatio

Returns the ratio of square of norm of orthopol (n+1)/n

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNormSqrRatio(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION GetNormSqrRatio
END INTERFACE
```

### GetZeros

Returns the zeros of orthopol

```fortran
INTERFACE
  MODULE FUNCTION GetZeros(obj, n) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(n)
  END FUNCTION GetZeros
END INTERFACE
```

### GetQuadrature

Returns the zeros of orthopol

```fortran
INTERFACE
  MODULE FUNCTION GetQuadrature(obj, n, quadType) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! number of points
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Gauss, GaussRadauLeft, GaussRadauRight, GaussLobatto
    REAL(DFP) :: ans(n, 2)
    !! ans(:,1) = points
    !! ans(:,2) = weights
  END FUNCTION GetQuadrature
END INTERFACE
```

### EvalAll

Evaluates the orthopol (0 to n) at single point.

```fortran
INTERFACE
  MODULE PURE FUNCTION EvalAll(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP) :: ans(n + 1)
  END FUNCTION EvalAll
END INTERFACE
```

Evaluates the orthopol (0 to n) at several points.

```fortran
INTERFACE
  MODULE PURE FUNCTION EvalAll(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! Evaluate orthopol of order = 0 to n (total n+1) at point x
  END FUNCTION EvalAll
END INTERFACE
```

### Eval

Evaluates the orthopol (order = n ) at single point.

```fortran
INTERFACE
  MODULE PURE FUNCTION Eval(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP) :: ans
  END FUNCTION Eval
END INTERFACE
```

Evaluates the orthopol (order=n) at several points.

```fortran
INTERFACE
  MODULE PURE FUNCTION Eval(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate orthopol of order = n at several points
  END FUNCTION Eval
END INTERFACE
```

### EvalSum

Evaluates the orthopol series at single point.

```fortran
INTERFACE
  MODULE PURE FUNCTION EvalSum(obj, n, x, coeff) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum
    REAL(DFP) :: ans
  END FUNCTION EvalSum
END INTERFACE
```

### EvalSum

Evaluates the orthopol series at several points.

```fortran
INTERFACE
  MODULE PURE FUNCTION EvalSum(obj, n, x, coeff) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum
    REAL(DFP) :: ans(SIZE(x))
  END FUNCTION EvalSum
END INTERFACE
```

### GradientEvalAll

Evaluates the gradient of orthopol (0 to n) at single point.

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientEvalAll(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP) :: ans(n + 1)
  END FUNCTION GradientEvalAll
END INTERFACE
```

Evaluates the gradient of orthopol (0 to n) at several points.

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientEvalAll(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! Evaluate orthopol of order = 0 to n (total n+1) at point x
  END FUNCTION GradientEvalAll
END INTERFACE
```

### GradientEval

Evaluates the gradient orthopol (order = n ) at single point.

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientEval(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP) :: ans
  END FUNCTION GradientEval
END INTERFACE
```

Evaluates the gradient orthopol (order=n) at several points.

```fortran
NTERFACE
  MODULE PURE FUNCTION GradientEval(obj, n, x) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate orthopol of order = n at several points
  END FUNCTION GradientEval
END INTERFACE
```

### GradientEvalSum

Evaluates the gradient of orthopol series at single point.

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientEvalSum(obj, n, x, coeff) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum
    REAL(DFP) :: ans
  END FUNCTION GradientEvalSum
END INTERFACE
```

Evaluates the gradient of orthopol series at several points.

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientEvalSum(obj, n, x, coeff) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum
    REAL(DFP) :: ans(SIZE(x))
  END FUNCTION GradientEvalSum
END INTERFACE
```

Evaluates the kth order gradient of orthopol series at single point.

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientEvalSum(obj, n, x, coeff, k) &
    & RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum
    INTEGER(I4B), INTENT(IN) :: k
    !! order of derivative
    REAL(DFP) :: ans
  END FUNCTION GradientEvalSum
END INTERFACE
```

Evaluates the kth order gradient of orthopol series at several points.

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientEvalSum(obj, n, x, coeff, k) &
    & RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of orthopol
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum
    INTEGER(I4B), INTENT(IN) :: k
    !! order of derivative
    REAL(DFP) :: ans(SIZE(x))
  END FUNCTION GradientEvalSum
END INTERFACE
```

### Transform

Discrete Orthopol Transform

```fortran
INTERFACE
  MODULE PURE FUNCTION Transform(obj, n, coeff, x, w, quadType) &
    & RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! nodal value (at quad points)
    REAL(DFP), INTENT(IN) :: x(0:n)
    !! quadrature points
    REAL(DFP), INTENT(IN) :: w(0:n)
    !! weights
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature type
    !! Gauss, GaussLobatto, GaussRadauLeft
    !! GaussRadauRight
    REAL(DFP) :: ans(0:n)
    !! modal values  or coefficients
  END FUNCTION Transform
END INTERFACE
```

Discrete orthopol Transform of a function

```fortran
INTERFACE
  MODULE FUNCTION Transform(obj, n, f, quadType) &
    & RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    !! orthopol
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial
    PROCEDURE(iface_1DFunction), POINTER, INTENT(IN) :: f
    !! 1D space function
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft
    !! GaussRadauRight
    REAL(DFP) :: ans(0:n)
    !! modal values  or coefficients
  END FUNCTION Transform
END INTERFACE
```

### InvTransform

Discrete Jacobi Inverse Transform

```fortran
INTERFACE
  MODULE PURE FUNCTION InvTransform(obj, n, coeff, x) &
    & RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    !! orthopol
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! n+1  coefficient (modal values)
    REAL(DFP), INTENT(IN) :: x
    !! x point in physical space
    REAL(DFP) :: ans
    !! value in physical space
  END FUNCTION InvTransform
END INTERFACE
```

Discrete Jacobi Inverse Transform

```fortran
INTERFACE
  MODULE PURE FUNCTION InvTransform(obj, n, coeff, x) &
    & RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    !! orthopol
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! n+1  coefficient (modal values)
    REAL(DFP), INTENT(IN) :: x(:)
    !! x point in physical space
    REAL(DFP) :: ans(SIZE(x))
    !! value in physical space
  END FUNCTION InvTransform
END INTERFACE
```

### GradientCoeff

Returns coefficient for gradient of orthopol expansion

```fortran
INTERFACE
  MODULE PURE FUNCTION GradientCoeff(obj, n, coeff) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    !! orthopol
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! coefficients $\tilde{u}_{n}$ obtained from JacobiTransform
    REAL(DFP) :: ans(0:n)
    !! coefficient of gradient
  END FUNCTION GradientCoeff
END INTERFACE
```

### DMatrix

Returns coefficient for gradient of Jacobi expansion

```fortran
INTERFACE
  MODULE PURE FUNCTION DMatrix(obj, n, x, quadType) RESULT(ans)
    CLASS(AbstractOrthopolSpace1D_), INTENT(IN) :: obj
    !! orthpol
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: x(0:n)
      !! quadrature points
    INTEGER(I4B), INTENT(IN) :: quadType
      !! Gauss and GaussLobatto
    REAL(DFP) :: ans(0:n, 0:n)
      !! D matrix
  END FUNCTION DMatrix
END INTERFACE
```
