---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial2D
---

# Monomial2D example 3

This example shows the usage of [[Monomial2D_]] class. We test `*` operator. We can only multiply a monomial with another monomial.

## Modules and classes

- [[Monomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial2D_) :: ans, f1, f2, f3
```

!!! note "Initiate"
    Initiate an instance of [[Monomial2D_]]
    $f(x,y)=x^2 y$

```fortran
  f1=Monomial2D( n1=2, n2=1, name1="x", name2="y" )
  call f1%display( "f(x,y)=" )
```

!!! note "f2=f1*f1"
    We can multiply two instance of [[Monomial2D_]] to get another
    instance.

```fortran
  f2 = f1 * f1
  call f2%display( 'f(x,y)=' )
```

!!! example "results"
    f(x,y)=x^4*y^2

```fortran
END PROGRAM main
```
