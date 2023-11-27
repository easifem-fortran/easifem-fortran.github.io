---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - ChebyshevFirst1D
---

# ChebyshevFirst1D example 2

This example shows the usage of [[ChebyshevFirst1D_]] class. It checks the memory leak.

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
```

Let us generate 100 Chebyshev1 polynomials

```fortran
  DO ii = 1, 1000000
    obj=ChebyshevFirst1D(varname="x", n=100)
    call obj%Deallocate()
  END DO
  Read( *, * ) ii
```

```fortran
END PROGRAM main
```
