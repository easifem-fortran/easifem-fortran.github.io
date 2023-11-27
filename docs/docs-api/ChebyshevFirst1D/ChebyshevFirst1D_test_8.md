---
title: ChebyshevFirst1D example 8
author: Vikas Sharma, Ph.D.
date: 02 Aug 2022
tags:
    - ChebyshevFirst1D/Initiate
    - ChebyshevFirst1D/Display
    - ChebyshevFirst1D/GaussRadauQuadrature
---

# ChebyshevFirst1D example 8

This example shows the usage of [[ChebyshevFirst1D_]] class. We test `GaussRadauQuadrature` function in this routine, which returns the GaussRadauQuadrature points for Chebyshev1 polynomial.

## Modules and classes

- [[ChebyshevFirst1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(ChebyshevFirst1D_) :: obj
real( dfp ), allocatable :: x( :, : )
integer( i4b ) :: n
real( dfp ), parameter :: a = -1.0_DFP
```

### n=1

```fortran
  n = 1
  obj=ChebyshevFirst1D(varname="x", n=n)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

### n=2

```fortran
  n = 2
  obj=ChebyshevFirst1D(varname="x", n=n)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

### n=3

```fortran
  n = 3
  obj=ChebyshevFirst1D(varname="x", n=n)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

### n=4

```fortran
  n = 4
  obj=ChebyshevFirst1D(varname="x", n=n)
  x = obj%GaussRadauQuadrature(a)
  call display( x, "pt | wt for n="//tostring(n) )
```

```fortran
END PROGRAM main
```


