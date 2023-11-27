---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Polynomial2D
    - Polynomial2D/Eval
    - Polynomial2D/EvalGradiend
---

# Polynomial2D example 3

This example shows the usage of [[Polynomial2D_]] class.

## Modules and classes

- [[Polynomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial2D_) :: f1, f2
real(dfp), allocatable :: coeff( : )
integer(i4b), allocatable :: degree( :, : )
real(dfp) :: exact, ans, x, y
real(dfp) :: tol=1.0E-10
```

!!! note "Initiate"
    Initiate the object.
$$
y=1+x+y+xy
$$

```fortran
  coeff = [1,1,1,1]
  call reallocate( degree, 4, 2 )
  degree(:,1) = [0,1,0,1]
  degree(:,2) = [0,0,1,1]
  call f1%initiate( coeff, degree, "x", "y" )
  call f1%display( 'f(x,y)=' )
```

!!! note "Eval"

```fortran
  x = 1.0; y=1.0
  ans = f1%Eval( x, y )
  exact = 1+x+y+x*y
  CALL ISABS( ans, exact, tol )
  !!
  x = 1.0; y=0.0
  ans = f1%Eval( x, y )
  exact = 1+x+y+x*y
  CALL ISABS( ans, exact, tol)
```

!!! note "EvalGradient"
    Getting the value $\frac{df}{dx}$.
$$
\frac{df}{dx} = 1+y
$$

```fortran
  x=1.0; y=1.0
  ans = f1%EvalGradient( x, y, dim=1_I4B )
  exact = 1+y
  CALL ISABS( ans, exact, tol)
```

!!! note "EvalGradient"
    Getting the value $\frac{df}{dy}$.
$$
\frac{df}{dy} = 1+x
$$

```fortran
  x=1.0; y=0.0
  ans = f1%EvalGradient( x, y, dim=2_I4B )
  exact = 1+x
  CALL ISABS( ans, exact, tol)
```

```fortran
END PROGRAM main
```
