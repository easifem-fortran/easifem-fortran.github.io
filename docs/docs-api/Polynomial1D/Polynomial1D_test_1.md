---
title: Polynomial1D example 1
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Polynomial1D
---

# Polynomial1D example 1

This example shows the usage of [[Polynomial1D_]] class.

## Modules and classes

- [[Polynomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial1D_) :: f1
real(dfp), allocatable :: coeff( : )
integer(i4b), allocatable :: degree( : )
```

Initiate the object.

$y=1+x+x^2+x^3$

```fortran
  coeff = [1,1,1,1]
  degree = [0,1,2,3]
  f1=Polynomial1D( coeff=coeff, degree=degree, varname="x" )
  call f1%display( 'f(x)=' )
```

!!! example "result"
    f(x)=+1x^0+1x^1+1x^2+1x^3

```fortran
END PROGRAM main
```
