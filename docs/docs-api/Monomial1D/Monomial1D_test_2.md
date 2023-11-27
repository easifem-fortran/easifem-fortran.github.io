---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial1D/Multiplication
---

# Monomial1D example 2

This example shows the usage of `*` operator for [[Monomial1D_]] class. We can only multiply a monomial with another monomial.
Multiplying a monomial with a scalar real or integer will produce an instance of [[Polynomial1D_]].

## Modules and classes

- [[Monomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial1D_) :: y0, y1, y2, y3, ans
```

Initiate the object.

```fortran
  y0=Monomial1D( degree=0_I4B, varname="x" )
  y1=Monomial1D( degree=1_I4B, varname="x" )
  y2=Monomial1D( degree=2_I4B, varname="x" )
```

!!! note "Multiplication"
    We can multiply a monomial with another monomial.

```fortran
  ans = y1 * y0
  call ans%display( "f(x) = ")
  ans = y1 * y2
  call ans%display( "f(x) = ")
```

```txt
>result
f(x) =x^1
f(x) =x^3
```

```fortran
END PROGRAM main
```
