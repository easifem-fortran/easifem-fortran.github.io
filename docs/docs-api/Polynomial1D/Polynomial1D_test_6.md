---
title: Polynomial1D example 5
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Polynomial1D
    - Polynomial1D/OPERATOR(-)
---

# Polynomial1D example 6

- This example shows the usage of [[Polynomial1D_]] class.
- In this example, we test subtraction operators.

## Modules and classes

- [[Polynomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial1D_) :: f1, f2, f3
real(dfp), allocatable :: coeff( : )
integer(i4b), allocatable :: degree( : )
```

!!! note "Mono- Mono"

```fortran
  f1=Monomial1D(1,"x") -  Monomial1D(2,"x")
  call f1%display( 'f(x)=' )
```

!!! example "result"
$$
f(x)=x^1- x^2
$$

!!! note "Mono- Scalar"

```fortran
  f1 = Monomial1D(1,"x") -  1
  call f1%display("f(x)=")
  !!
  f1 = Monomial1D(1,"x") -  1.0
  call f1%display("f(x)=")
  !!
```

!!! note "Scalar- Mono"

```fortran
  f1 = 1 -  Monomial1D(1,"x")
  call f1%display("f(x)=")
  !!
  f1 = 1.0 -  Monomial1D(1,"x")
  call f1%display("f(x)=")
  !!
```

!!! note "Poly- Mono"

```fortran
  f2 = f1 -  Monomial1D(2,"x")
  call f2%display("f(x)=")
  !!
```

!!! note "Mono- Poly"

```fortran
  f2 = Monomial1D(2,"x") -  f1
  call f2%display("f(x)=")
  !!
```

!!! note "Poly- Poly"

```fortran
  f2 = f2 -  f1
  call f2%display("f(x)=")
  !!
```

!!! note "Poly- Scalar"

```fortran
  f2 = f1 -  1
  call f2%display("f(x)=")
  !!
  f2 = f1 -  1.0
  call f2%display("f(x)=")
  !!
```

!!! note "Scalar- Poly"

```fortran
  f2 = 1 -  f1
  call f2%display("f(x)=")
  !!
  f2 = 1.0 -  f1
  call f2%display("f(x)=")
  !!
```

```fortran
END PROGRAM main
```
