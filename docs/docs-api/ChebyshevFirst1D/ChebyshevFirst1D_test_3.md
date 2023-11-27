---
title: ChebyshevFirst1D example 3
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - ChebyshevFirst1D
---

# ChebyshevFirst1D example 3

This example shows the usage of [[ChebyshevFirst1D_]] class. We test `Eval` in this routine

## Modules and classes

- [[ChebyshevFirst1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(ChebyshevFirst1D_) :: obj
type(String) :: astr
integer(i4b) :: ii
real( dfp ), allocatable :: x(:), yexact( : ), y( : )
real( dfp ), parameter :: tol=1.0E-10
```

### n=1

```fortran
  x = linspace(-1.0_DFP, 1.0_DFP, 11_I4B)
  yexact = x
  obj = ChebyshevFirst1D(varname="x", n=1)
  y = obj%Eval( x )
  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-1:" )
```

### n=2

```fortran
  yexact = 2.0*x**2 - 1.0
  obj = ChebyshevFirst1D(varname="x", n=2)
  y = obj%Eval( x )
  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-2:" )
```

### n=3

```fortran
  yexact = 4.0*x**3 - 3.0*x
  obj = ChebyshevFirst1D(varname="x", n=3)
  y = obj%Eval( x )
  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-3:" )
```

### n=4

```fortran
  yexact = 8.0*x**4 - 8.0*x**2 + 1.0
  obj = ChebyshevFirst1D(varname="x", n=4)
  y = obj%Eval( x )
  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-4:" )
```

```fortran
END PROGRAM main
```
