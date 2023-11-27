---
title: Jacobi1D example 10
author: Vikas Sharma, Ph.D.
date: 02 Aug 2022
tags:
    - Jacobi1D/Initiate
    - Jacobi1D/Display
    - Jacobi1D/GaussRadauQuadrature
---

# Jacobi1D example 10

This example shows the usage of [[Jacobi1D_]] class. We test `GaussRadauQuadrature` function in this routine, which returns the GaussRadauQuadrature points for Jacobi polynomial.

## Modules and classes

- [[Jacobi1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Jacobi1D_) :: obj
real( dfp ), allocatable :: x( :, : )
integer( i4b ) :: n
real( dfp ), parameter :: a = 1.0_DFP, alpha=0.0_DFP, beta=0.0_DFP
```

### n=1

```fortran
  n = 1
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

### n=2

```fortran
  n = 2
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

### n=3

```fortran
  n = 3
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

### n=4

```fortran
  n = 4
  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

```fortran
END PROGRAM main
```
