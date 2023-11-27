---
title: Polynomial1D example 2
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Polynomial1D
    - Polynomial1D/GetCoeff
    - Polynomial1D/GetDegree
    - Polynomial1D/Eval
    - Polynomial1D/EvalGradient
    - Polynomial1D/Grad
---

# Polynomial1D example 2

- This example shows the usage of [[Polynomial1D_]] class.
- We test following functions
- [[Polynomial1D_#Polynomial1D function]]
- [[Polynomial1D_#Polynomial1D_Pointer]]
- [[Polynomial1D_#GetCoeff]]
- [[Polynomial1D_#GetDegree]]
- [[Polynomial1D_#Eval]]
- [[Polynomial1D_#EvalGradient]]
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

$y=1+x+x^2+x^3$

```fortran
  coeff = [1,1,1,1]
  degree = [0,1,2,3]
  f1=Polynomial1D( coeff=coeff, degree=degree, varname="x" )
  call f1%display( 'f(x)=' )
```

```txt
>result
f(x)=+0.1E+1x^0+0.1E+1x^1+0.1E+1x^2+0.1E+1x^3
```

Getting the value.

```fortran
  CALL Display( f1%Eval( 1.0_DFP ), "f(1)=" )
  CALL Display( f1%Eval( 2.0_DFP ), "f(2)=" )
  CALL Display( f1%Eval( 3.0_DFP ), "f(3)=" )
```

```txt
>result
f(1)=4.00000
f(2)=15.0000
f(3)=40.0000
```

Getting the gradient

```fortran
  CALL Display( f1%EvalGradient( 1.0_DFP ), "df(1)=" )
  CALL Display( f1%EvalGradient( 2.0_DFP ), "df(2)=" )
  CALL Display( f1%EvalGradient( 3.0_DFP ), "df(3)=" )
```

```txt
>result
 df(1)=
-------
6.00000
 df(2)=
-------
17.0000
 df(3)=
-------
34.0000
```

Getting the coefficients and degrees.

```fortran
  call display( f1%getCoeff(), "coeff = ")
  call display( f1%getDegree(), "degree = ")
```

```txt
coeff =
--------
1.00000
1.00000
1.00000
1.00000
degree =
---------
    0
    1
    2
    3
```

Getting the gradient in polynomial.

```fortran
  f2 = f1%Grad()
  CALL f2%Display( "f2 = " )
```

```txt
>result
f2 =+1x^0+2x^1+3x^2
```

```fortran
  f2 = .Grad. f1
  CALL f2%Display( "f2 = " )
```

```fortran
  f2 = .Grad. (.Grad. (.Grad.(.Grad. f1)))
  CALL f2%Display( "f2 = " )
```

```fortran
END PROGRAM main
```
