---
title: Polynomial1D example 3
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Polynomial1D
    - Polynomial1D/GetCoeff
    - Polynomial1D/GetDegree
    - Polynomial1D/Grad
---

# Polynomial1D example 3

- This example shows the usage of [[Polynomial1D_]] class.
- In this example we test following routines
- [[Polynomial1D_#GetCoeff]]
- [[Polynomial1D_#GetDegree]]
- [[Polynomial1D_#Grad]]

## Modules and classes

- [[Polynomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial1D_) :: f1, f2
real(dfp), allocatable :: coeff( : )
integer(i4b), allocatable :: degree( : )
```

Initiate the object.

$y=1+x+x^2+x^3+x^3$

```fortran
  coeff = [1,1,1,1,1]
  degree = [0,1,2,3,3]
  f1=Polynomial1D( coeff=coeff, degree=degree, varname="x" )
  call f1%display( 'f(x)=' )
```

Note that we have repeated degree 3 two times. But the routine takes care of it. It will store only single monomial $x^3$ and its coefficient 2.

```txt
>result
f(x)=+1+x+x^2+0.2E+1*(x)^3
```

Getting the coefficients and degrees.

```fortran
  call display( f1%getCoeff(), "coeff = ", orient="ROW")
  call display( f1%getDegree(), "degree = ", orient="ROW")
```

```txt
>result
             coeff =
----------------------------------
1.00000  1.00000  1.00000  2.00000

 degree =
----------
0  1  2  3
```

Getting the gradient in polynomial.

```fortran
  f2 = f1%Grad()
  CALL f2%Display( "f2 = " )
```

```txt
>result
f2 =+1x^0+2x^1+6x^2
```

```fortran
END PROGRAM main
```
