---
title: ChebyshevFirst1D example 6
author: Vikas Sharma, Ph.D.
date: 02 Aug 2022
tags:
    - ChebyshevFirst1D/Initiate
    - ChebyshevFirst1D/Display
    - ChebyshevFirst1D/Zeros
---

# ChebyshevFirst1D example 6

This example shows the usage of [[ChebyshevFirst1D_]] class. We test `Zeros` function in this routine, which returns the zeros of Chebyshev1 polynomial.

## Modules and classes

- [[ChebyshevFirst1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(ChebyshevFirst1D_) :: obj
real( dfp ), allocatable :: x( : )
integer( i4b ) :: n
```

### n=1

```fortran
  n = 1
  obj = ChebyshevFirst1D(varname="x", n=n)
  x = obj%zeros()
  call display( x, "zeros for n="//tostring(n), orient="ROW" )
```

### n=2

```fortran
  n = 2
  obj = ChebyshevFirst1D(varname="x", n=n)
  x = obj%zeros()
  call display( x, "zeros for n="//tostring(n), orient="ROW" )
```

### n=3

```fortran
  n = 3
  obj = ChebyshevFirst1D(varname="x", n=n)
  x = obj%zeros()
  call display( x, "zeros for n="//tostring(n), orient="ROW" )
```

### n=4

```fortran
  n = 4
  obj = ChebyshevFirst1D(varname="x", n=n)
  x = obj%zeros()
  call display( x, "zeros for n="//tostring(n), orient="ROW" )
```

```fortran
END PROGRAM main
```
