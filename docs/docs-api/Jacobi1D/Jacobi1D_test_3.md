---
title: Jacobi1D example 3
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Jacobi1D
    - Jacobi1D/Eval
---

# Jacobi1D example 3

This example shows the usage of [[Jacobi1D_]] class. We test `Eval` in this routine

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
real( dfp ), allocatable :: x(:), yexact( : ), y( : )
real( dfp ), parameter :: alpha=0.0, beta=0.0
```

### n=1

```fortran
  n = 1
  x = linspace(-1.0_DFP, 1.0_DFP, 11_I4B)
  yexact = x
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%Eval( x )
  call OK( ALL(y .APPROXEQ. yexact), "test-1:" )
```

### n=2

```fortran
  n = 2
  yexact = 1.5*x**2 - 0.5
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%Eval( x )
  call OK( ALL(y .APPROXEQ. yexact), "test-2:" )
```

### n=3

```fortran
  n = 3
  yexact = 2.5*x**3 - 1.5*x
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%Eval( x )
  call OK( ALL(y .APPROXEQ. yexact), "test-3:" )
```

### n=4

```fortran
  n = 4
  yexact = (35.0*x**4 - 30.0*x**2 + 3.0)/8.0
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  y = obj%Eval( x )
  call OK( ALL(y .APPROXEQ. yexact), "test-4:" )
```

```fortran
END PROGRAM main
```
