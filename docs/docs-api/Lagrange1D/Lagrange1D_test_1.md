---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Lagrange1D
---

# Lagrange1D example 1

This example shows the usage of [[Lagrange1D_]] class.

## Modules and classes

- [[Lagrange1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Lagrange1D_), allocatable :: f(:)
type(Lagrange1D_) :: f1
real(dfp), allocatable :: x( : )
integer(i4b) :: ii, order
```

!!! note "Lagrange1D"
    Initiate lagrange polynomial in one dimension

$$
l_{1}(x)=1-x \\
l_{2}(x)=x
$$

```fortran
  x = [0.0,1.0]
  order=1
  f1=Lagrange1D( i=1, x=x, order=order, varname="x" )
  call f1%display( 'f(x)=' )
  f1=Lagrange1D( i=2, x=x, order=order, varname="x" )
  call f1%display( 'f(x)=' )
```

!!! example "result"

$$
f(x)=+1x^0-1x^1 \\
f(x)=+1x^1
$$

!!! note "Higher order Lagrange polynomial"

!!! note "Lagrange1D"

```fortran
  order = 4_I4B
  x = linspace(0.0_DFP, 1.0_DFP, order+1)
  allocate( f(order+1) )
  do ii = 1, order+1
    f(ii) = Lagrange1D(ii, x=x, order=order, varname="x")
    call f(ii)%display("l_{"//tostring(ii)//"}=")
  end do
```

!!! example "result"

$$
l_{1}=+1x^0-8.3333x^1+23.333x^2-26.667x^3+10.667x^4  \\
l_{2}=+16x^1-69.333x^2+96x^3-42.667x^4 \\
l_{3}=-12x^1+76x^2-128x^3+64x^4 \\
l_{4}=+5.3333x^1-37.333x^2+74.667x^3-42.667x^4 \\
l_{5}=-1x^1+7.3333x^2-16x^3+10.667x^4
$$

```fortran
END PROGRAM main
```
