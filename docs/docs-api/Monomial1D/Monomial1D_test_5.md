---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomials1D
    - EvenMonomials1D
    - OddMonomials1D
---

# Monomial1D example 5

This example shows the usage of `Monomials1D`, `EvenMonomials1D` and `OddMonomials1D` methods for [[Monomial1D_]] class.

- `Monomials1D` returns the monomials from $x^0$ to $x^{n}$
- `EvenMonomials1D` returns the monomials from $x^0$ to $x^{2n}$
- `OddMonomials1D` returns the monomials from $x^1$ to $x^{2n+1}$

## Modules and classes

- [[Monomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial1D_), allocatable :: y1(:), y2(:), y3(:)
integer(i4b) :: ii, n
```

!!! note "Monomials"
    `Monomials1D` returns the monomials $x^0$ to $x^{n}$.

```fortran
  y1 = Monomials1D( order=5, varname="x" )
  do ii = 1, SIZE( y1 )
    call y1(ii)%display( "f(" // tostring( ii ) // ")=" )
  end do
```

!!! example "result"

$$
f(1)=x^0
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

!!! note "Monomials"
    `EvenMonomials1D` returns the monomials $x^0$ to $x^{2n}$.

```fortran
  y2 = EvenMonomials1D( order=5, varname="x" )
  do ii = 1, SIZE( y2 )
    call y2(ii)%display( "f(" // tostring( ii ) // ")=" )
  end do
```

!!! example "result"
$$
f(1)=x^0
$$

$$
f(2)=x^2
$$

$$
f(3)=x^4
$$

!!! note "Monomials"
    `OddMonomials1D` returns the monomials $x^1$ to $x^{2n+1}$.

```fortran
  y3 = OddMonomials1D( order=5, varname="x" )
  do ii = 1, SIZE( y3 )
    call y3(ii)%display( "f(" // tostring( ii ) // ")=" )
  end do
```

!!! example "result"
$$
f(1)=x^1
$$

$$
f(2)=x^3
$$

$$
f(3)=x^5
$$

```fortran
END PROGRAM main
```
