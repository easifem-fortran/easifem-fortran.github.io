---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Jacobi1D
    - Jacobi1D/BasisEval
---

# Jacobi1D example 14

This example shows the usage of [[Jacobi1D_]] class. We test `BasisEval()`. This is a developer level routine designed for [[JacobiSpace1D_]]. Users should not use this subroutine.

## Modules and classes

- [[Jacobi1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Jacobi1D_) :: obj
type(String) :: astr
integer(i4b) :: ii, n
real( dfp ), parameter :: alpha=0.0, beta=0.0
logical( lgt ), parameter :: isOrthonormal = .FALSE., isMonic=.FALSE.
real( dfp ), allocatable :: coeff(:,:), scale(:,:), y( :, : )
real( dfp ) :: x( 3 )
```

### n=1

```fortran
  n=1
  x = [-0.5_DFP, 0.0_DFP, 0.5_DFP]
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &
    & isOrthonormal=isOrthonormal, isMonic=isMonic )
  call Display( "J(n=1, alpha=0.0, beta=0.0) := " )
  call reallocate( coeff, n, 2)
  call reallocate( scale, n, 2)
  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &
    & isMonic=isMonic, isOrthonormal=isOrthonormal )
  y = obj%BasisEval( x=x, coeff=coeff, scale=scale )
  call Display( x, "x = " )
  call display( y, "y = " )
  call obj%Deallocate( )
```

```txt
>result
J(n=1, alpha=0.0, beta=0.0) :=
   x =
---------
-0.500000
 0.000000
 0.500000
       y =
------------------
 1.00000  -0.50000
 1.00000   0.00000
 1.00000   0.50000
```

### n=2

```fortran
  n=2
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &
    & isOrthonormal=isOrthonormal, isMonic=isMonic )
  call Display( "J(n=2, alpha=0.0, beta=0.0) := " )
  call reallocate( coeff, n, 2)
  call reallocate( scale, n, 2)
  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &
    & isMonic=isMonic, isOrthonormal=isOrthonormal )
  y = obj%BasisEval( x=x, coeff=coeff, scale=scale )
  call Display( x, "x = ")
  call display( y, "y = ")
  call obj%Deallocate()
```

```txt
>result
J(n=2, alpha=0.0, beta=0.0) :=
   x =
---------
-0.500000
 0.000000
 0.500000
            y =
----------------------------
 1.00000  -0.50000  -0.12500
 1.00000   0.00000  -0.50000
 1.00000   0.50000  -0.12500
```

### n=3

```fortran
  n=3
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &
    & isOrthonormal=isOrthonormal, isMonic=isMonic )
  call Display( "J(n=3, alpha=0.0, beta=0.0) := " )
  call reallocate( coeff, n, 2)
  call reallocate( scale, n, 2)
  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &
    & isMonic=isMonic, isOrthonormal=isOrthonormal )
  y = obj%BasisEval( x=x, coeff=coeff, scale=scale )
  call Display( x, "x = ")
  call display( y, "y = ")
  call obj%Deallocate()
```

```txt
>result
J(n=3, alpha=0.0, beta=0.0) :=
   x =
---------
-0.500000
 0.000000
 0.500000
                 y =
--------------------------------------
 1.00000  -0.50000  -0.12500   0.43750
 1.00000   0.00000  -0.50000  -0.00000
 1.00000   0.50000  -0.12500  -0.43750
```

```fortran
END PROGRAM main
```
