---
title: Jacobi1D example 4
author: Vikas Sharma, Ph.D.
date: 2 Aug 2022
tags:
    - Jacobi1D
---

# Jacobi1D example 4

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
integer(i4b) :: ii, nn
real( dfp ) :: x, y, t1, t2
```


```fortran
  Call obj%Initiate(varname="x", n=10, alpha=0.0_DFP, beta=0.0_DFP)
```

```fortran
  DO
    WRITE( *, "(A)", ADVANCE="NO" ) "Enter loop size (-1 exit ) = "
    Read( *, * ) nn
    IF( nn .LT. 0 ) EXIT
    CALL CPU_TIME( t1 )
    DO ii = 1, nn
      x = RAND()
      y = obj%Eval( x )
    END DO
    CALL CPU_TIME(t2)
    CALL Display( abs(t2-t1)/nn, "time = " )
  END DO
```

```fortran
END PROGRAM main
```
