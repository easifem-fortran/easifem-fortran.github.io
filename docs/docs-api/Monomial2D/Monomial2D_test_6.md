---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial2D/Monomials2D
---

# Monomial2D example 6

This example shows the usage of [[Monomial2D_]] class. This example shows the use of `Monomials2D` on triangles.

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
  f1 = Monomials2D( order=1, varname1="x", varname2="y", elemType=Triangle)
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

!!! note "Monomials2D"

```fortran
  f2 = Monomials2D( order=2, varname1="x", varname2="y", elemType=Triangle )
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
f(6)= y^2
$$

!!! note "Monomials2D"

```fortran
  f3 = Monomials2D( order=5, varname1="x", varname2="y", elemType=Triangle )
  n = size( f3 )
  do ii = 1, n
    call f3(ii)%display( "f(" // tostring(ii) // ")=" )
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
f(4)=x^3
$$

$$
f(5)=x^4
$$

$$
f(6)=x^5
$$

$$
f(7)= y^1
$$

$$
f(8)=x^1 y^1
$$

$$
f(9)=x^2 y^1
$$

$$
f(10)=x^3 y^1
$$

$$
f(11)=x^4 y^1
$$

$$
f(12)= y^2
$$

$$
f(13)=x^1 y^2
$$

$$
f(14)=x^2 y^2
$$

$$
f(15)=x^3 y^2
$$

$$
f(16)= y^3
$$

$$
f(17)=x^1 y^3
$$

$$
f(18)=x^2 y^3
$$

$$
f(19)= y^4
$$

$$
f(20)=x^1 y^4
$$

$$
f(21)= y^5
$$

```fortran
END PROGRAM main
```
