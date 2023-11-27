---
title: Jacobi1D example 5
author: Vikas Sharma, Ph.D.
date: 02 Aug 2022
tags:
    - Jacobi1D/Initiate
    - Jacobi1D/Display
    - Jacobi1D/EvalGradient
---

# Jacobi1D example 5

This example shows the usage of [[Jacobi1D_]] class. We test `EvalGradient` in this routine. the argument of `EvalGradient` is scalar in this routine.

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
real( dfp ) :: x, yexact, y
real( dfp ), parameter :: tol=1.0E-10, alpha=0.0_DFP, beta=0.0_DFP
```

### n=1

```fortran
  n = 1
  x = RAND()
  yexact = 1
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%EvalGradient( x )
  call OK( SOFTEQ( y, yexact, tol ), "test-1:" )
```

### n=2

```fortran
  n=2
  x = RAND()
  yexact = 3.0*x
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%EvalGradient( x )
  call OK( SOFTEQ( y, yexact, tol ), "test-2:" )
```

### n=3

```fortran
  n=3
  x = RAND()
  yexact = 2.5*3.0*x**2 - 1.5
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%EvalGradient( x )
  call OK( SOFTEQ( y, yexact, tol ), "test-3:" )
```

### n=4

```fortran
  n=4
  x = RAND()
  yexact = (35.0*4.0*x**3 - 30.0*2.0*x**1)/8.0
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%EvalGradient( x )
  call OK( SOFTEQ( y, yexact, tol ), "test-4:" )
```

```fortran
END PROGRAM main
```
