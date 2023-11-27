---
title: ChebyshevFirst1D example 5
author: Vikas Sharma, Ph.D.
date: 02 Aug 2022
tags:
    - ChebyshevFirst1D/Initiate
    - ChebyshevFirst1D/Display
    - ChebyshevFirst1D/EvalGradient
---

# ChebyshevFirst1D example 5

This example shows the usage of [[ChebyshevFirst1D_]] class. We test `EvalGradient` in this routine. the argument of `EvalGradient` is vector in this routine.

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
integer(i4b) :: ii, n
real( dfp ), allocatable :: x(:), yexact(:), y(:)
real( dfp ) :: tol=1.0E-10
```

### n=1

```fortran
  x = linspace(0.0_DFP, 1.0_DFP, 11_I4B)
  yexact = ones(11, 1)
  n=1
  obj = ChebyshevFirst1D(varname="x", n=n)
  y = obj%EvalGradient( x )
  call OK( ALL( y .APPROXEQ. yexact), "test-1:" )
```

### n=2

```fortran
  yexact = 4.0*x
  n=2
  obj = ChebyshevFirst1D(varname="x", n=n)
  y = obj%EvalGradient( x )
  call OK(ALL(y .APPROXEQ. yexact), "test-2:" )
```

### n=3

```fortran
  yexact = 12.0*x**2 - 3.0
  n=3
  obj = ChebyshevFirst1D(varname="x", n=n)
  y = obj%EvalGradient( x )
  call OK(ALL( SOFTEQ( y, yexact, tol=tol )), "test-3:" )
```

### n=4

```fortran
  yexact = 32.0*x**3 - 16.0*x
  n=4
  obj = ChebyshevFirst1D(varname="x", n=n)
  y = obj%EvalGradient( x )
  call OK(ALL( SOFTEQ( y, yexact, tol=tol )), "test-4:"  )
```

```fortran
END PROGRAM main
```
