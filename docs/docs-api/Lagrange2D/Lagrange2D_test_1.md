---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Lagrange2D
---

# Lagrange2D example 1

This example shows the usage of [[Lagrange2D_]] class.

## Modules and classes

- [[Lagrange2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Lagrange2D_) :: f1
type(Lagrange2D_), allocatable :: f(:)
real(dfp), allocatable :: x( :, : )
integer(i4b) :: ii, order, n
```

!!! note "order=1"

```fortran
  order=1
  x = EquidistancePoint(order=order, elemType=Triangle)
  f1=Lagrange2D( order=order, i=1, x=x, name1="x", name2="y", elemType=Triangle )
  call f1%display( 'f(x)=' )
  f1=Lagrange2D( order=order, i=2, x=x, name1="x", name2="y", elemType=Triangle )
  call f1%display( 'f(x)=' )
  f1=Lagrange2D( order=order, i=3, x=x, name1="x", name2="y", elemType=Triangle )
  call f1%display( 'f(x)=' )
```

!!! example "result"

$$
f(x)=+1-1 y^1-1x^1 \\
f(x)=+1x^1 \\
f(x)=+1 y^1
$$

!!! note "order=2"

```fortran
  order = 2_I4B
  x = EquidistancePoint(order=order, elemType=Triangle)
  n = LagrangeDOF( order=order, elemType=Triangle )
  allocate( f(n) )
  do ii = 1, n
    f(ii) = Lagrange2D(i=ii, x=x, order=order, &
      & name1="x", name2="y", elemType=Triangle)
    call f(ii)%display("l_{"//tostring(ii)//"}=")
  end do
  deallocate(f)
```

!!! example "result"

$$
l_{1}=+1-3 y^1+2 y^2+4x^1 y^1-3x^1+2x^2 \\
l_{2}=-1x^1+2x^2 \\
l_{3}=-1 y^1+2 y^2 \\
l_{4}=-4x^1 y^1+4x^1-4x^2 \\
l_{5}=+4x^1 y^1 \\
l_{6}=+4 y^1-4 y^2-4x^1 y^1
$$

!!! note "order=3"

```fortran
  order = 3_I4B
  x = EquidistancePoint(order=order, elemType=Triangle)
  n = LagrangeDOF( order=order, elemType=Triangle )
  allocate( f(n) )
  do ii = 1, n
    f(ii) = Lagrange2D(i=ii, x=x, order=order, &
      & name1="x", name2="y", elemType=Triangle)
    call f(ii)%display("l_{"//tostring(ii)//"}=")
  end do
  deallocate(f)
```

!!! example "result"

$$
l_{1}=+1+9 y^2-5.5 y^1-4.5 y^3-13.5x^1 y^2+18x^1 y^1-5.5x^1+9x^2-13.5x^2 y^1-4.5x^3 \\
l_{2}=+1x^1-4.5x^2+4.5x^3 \\
l_{3}=-4.5 y^2+1 y^1+4.5 y^3 \\
l_{4}=+13.5x^1 y^2-22.5x^1 y^1+9x^1-22.5x^2+27x^2 y^1+13.5x^3 \\
l_{5}=+4.5x^1 y^1-4.5x^1+18x^2-13.5x^2 y^1-13.5x^3 \\
l_{6}=-4.5x^1 y^1+13.5x^2 y^1 \\
l_{7}=+13.5x^1 y^2-4.5x^1 y^1 \\
l_{8}=+18 y^2-4.5 y^1-13.5 y^3-13.5x^1 y^2+4.5x^1 y^1 \\
l_{9}=-22.5 y^2+9 y^1+13.5 y^3+27x^1 y^2-22.5x^1 y^1+13.5x^2 y^1 \\
l_{10}=-27x^1 y^2+27x^1 y^1-27x^2 y^1
$$

```fortran
END PROGRAM main
```
