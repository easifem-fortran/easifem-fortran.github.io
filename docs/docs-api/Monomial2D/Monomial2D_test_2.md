---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial2D
    - Monomial1D
---

# Monomial2D example 1

This example shows the usage of [[Monomial2D_]] class. In this example we test `Monomial2D` function. We create Monomial2D from two [[Monomial1D_]] instances.

## Modules and classes

- [[Monomial2D_]]
- [[Monomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial2D_) :: obj
type(Monomial1D_) :: f1, f2
```

!!! note "Initiate"
    Initiate the object.

$f(x,y)=1$

```fortran
  f1=Monomial1D( 0_I4B, "x" )
  f2=Monomial1D( 0_I4B, "y" )
  obj=Monomial2D( f1, f2 )
  call obj%display( 'f(x,y)=' )
```

!!! example "results"
    f(x,y)=x^0*y^0

!!! note ""
    $f(x,y)=x$

```fortran
  f1=Monomial1D( 1_I4B, "x" )
  f2=Monomial1D( 0_I4B, "y" )
  obj=Monomial2D( f1, f2 )
  call obj%display( 'f(x,y)=' )
```

!!! example "results"
    f(x,y)=x^1*y^0

!!! note ""
    $f(x,y)=y$

```fortran
  f1=Monomial1D( 0_I4B, "x" )
  f2=Monomial1D( 1_I4B, "y" )
  obj=Monomial2D( f1, f2 )
  call obj%display( 'f(x,y)=' )
```

!!! example "result"
    f(x,y)=x^0*y^1

!!! note ""
    $f(x,y)=xy$

```fortran
  f1=Monomial1D( 1_I4B, "x" )
  f2=Monomial1D( 1_I4B, "y" )
  obj=Monomial2D( f1, f2 )
  call obj%display( 'f(x,y)=' )
```

!!! example "result"
    f(x,y)=x^1*y^1

```fortran
END PROGRAM main
```
