---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial2D
    - Monomial2D/Grad
---

# Monomial2D example 5

This example shows the usage of [[Monomial2D_]] class. We test `Grad` method, which returns an monomial 2d object.

## Modules and classes

- [[Monomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial2D_) :: ans, f1, f2, f3
integer(I4B) :: degree(2)
character(len=256) :: varname(2)
```

!!! note "Initiate"
    Initiate the object.
	
$$
f(x,y)=x^2 y
$$

```fortran
  f1=Monomial2D( 2, 1, "x", "y" )
```

!!! note "Grad"
    Evaluating gradient
	
$$
\frac{df}{dx} = 2xy
$$

```fortran
  f2 = f1 .GRAD. 1
  CALL f2%Display( "f1 .GRAD. 1 = ")
```

!!! example "result"
    f1 .GRAD. 1 =x^1*y^1
    Note that [[Monomial2D_]] does not contains the coefficient.

!!! note "Grad"
    Evaluating gradient
	
$$
\frac{df}{dy} = x^2
$$

```fortran
  f3 = f1 .GRAD. 2
  CALL f3%Display( "f1 .GRAD. 2 = ")
```

!!! example "result"
    f1 .GRAD. 2 =x^2*y^0
    Note that [[Monomial2D_]] does not contains the coefficient.

```fortran
END PROGRAM main
```
