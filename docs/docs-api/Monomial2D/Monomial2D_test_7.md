---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial2D/Monomials2D
---

# Monomial2D example 7

This example shows the usage of [[Monomial2D_]] class. This example shows the use of `Monomials2D` on quadrangles.

## Modules and classes

- [[Monomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial2D_), allocatable :: f1(:), f2(:), f3(:)
integer( i4b ) :: ii, n
```

!!! note "Monomials2D"

```fortran
  f1 = Monomials2D( order=1, name1="x", name2="y", elemType=Quadrangle)
  n = size( f1 )
  do ii = 1, n
    call f1(ii)%display( "f(" // tostring(ii) // ")=" )
  end do
```

!!! example "results"

$$
f(1)=1
$$

$$
f(2)=x^1
$$

$$
f(3)= y^1
$$

$$
f(4)=x^1 y^1
$$

!!! note "Monomials2D"

```fortran
  f2 = Monomials2D( order=2, name1="x", name2="y", elemType=Quadrangle )
  n = size( f2 )
  do ii = 1, n
    call f2(ii)%display( "f(" // tostring(ii) // ")=" )
  end do
```

!!! example "results"
$$
f(1)=1
$$

$$
f(2)=x^1
$$

$$
f(3)=x^2
$$

$$
f(4)= y^1
$$

$$
f(5)=x^1 y^1
$$

$$
f(6)=x^2 y^1
$$

$$
f(7)= y^2
$$

$$
f(8)=x^1 y^2
$$

$$
f(9)=x^2 y^2
$$

```fortran
END PROGRAM main
```
