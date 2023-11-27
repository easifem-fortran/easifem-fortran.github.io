---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial3D/Monomials3D
---

# Monomial3D example 6

This example shows the usage of [[Monomial3D_]] class. This example shows the use of `Monomials3D` on triangles.

## Modules and classes

- [[Monomial3D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial3D_), allocatable :: f1(:), f2(:), f3(:)
integer( i4b ) :: ii, n
```

!!! note "Monomials3D"

```fortran
  f1 = Monomials3D( order=1, varname1="x", varname2="y", &
    & varname3="z", elemType=Tetrahedron)
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
f(4)= z^1
$$

!!! note "Monomials3D"

```fortran
  f2 = Monomials3D( order=2, varname1="x", varname2="y", varname3="z", &
    & elemType=Tetrahedron )
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

$$
f(7)= z^1
$$

$$
f(8)=x^1 z^1
$$

$$
f(9)= y^1 z^1
$$

$$
f(10)= z^2
$$

```fortran
END PROGRAM main
```
