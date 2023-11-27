---
title: Jacobi1D example 2
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Jacobi1D
---

# Jacobi1D example 1

This example shows the usage of [[Jacobi1D_]] class. It checks the memory leak.

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
integer(i4b) :: ii
```

Let us generate 100 jacobi polynomials

```fortran
  DO ii = 1, 1000000
    call obj%Initiate(varname="x", n=100, alpha=0.0_DFP, beta=0.0_DFP)
  END DO
  Read( *, * ) ii
```

```fortran
END PROGRAM main
```
