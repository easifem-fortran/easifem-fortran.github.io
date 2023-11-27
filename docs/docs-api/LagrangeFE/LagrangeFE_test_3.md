---
author: Vikas Sharma, Ph.D.
date: 28 Aug 2022
tags:
    - LagrangeFE
---

# LagrangeFE example 3

In this exmple we test Lagrange finite element on Quadrangle element.
Interpolation points are equidistance.

## Modules and classes

- [[LagrangeFE_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(LagrangeFE_) :: obj
integer(i4b) :: order
integer(i4b), parameter :: elemType=Quadrangle
character(len=*), parameter :: elemName="Quadrangle"
integer(i4b), parameter :: ipType=IP_EQUIDISTANCE
```

!!! note "Order=1"

```fortran
  order=1
  call obj%Initiate(elemType=elemType, order=order, ipType=ipType)
  call obj%Display( elemName // "order=" //tostring(order) )
```

!!! example "result"
    order=1
    Total Basis=4
$$
N(1)=+0.25-0.25 y^1-0.25x^1+0.25x^1 y^1
$$
$$
N(2)=+0.25-0.25 y^1+0.25x^1-0.25x^1 y^1
$$
$$
N(3)=+0.25+0.25 y^1+0.25x^1+0.25x^1 y^1
$$
$$
N(4)=+0.25+0.25 y^1-0.25x^1-0.25x^1 y^1
$$

!!! note "Order=2"

```fortran
  order=2
  call blanklines(nol=3)
  call obj%Initiate(elemType=elemType, order=order, ipType=ipType)
  call obj%Display( elemName // "order=" //tostring(order) )
```

!!! example "result"
    order=2
    Total Basis=9
	
$$
N(1)=+0.25x^1 y^1-0.25x^1 y^2-0.25x^2 y^1+0.25x^2 y^2
$$
$$
N(2)=-0.25x^1 y^1+0.25x^1 y^2-0.25x^2 y^1+0.25x^2 y^2
$$
$$
N(3)=+0.25x^1 y^1+0.25x^1 y^2+0.25x^2 y^1+0.25x^2 y^2
$$
$$
N(4)=-0.25x^1 y^1-0.25x^1 y^2+0.25x^2 y^1+0.25x^2 y^2
$$
$$
N(5)=+0.5 y^2-0.5 y^1+0.5x^2 y^1-0.5x^2 y^2
$$
$$
N(6)=+0.5x^1-0.5x^1 y^2+0.5x^2-0.5x^2 y^2
$$
$$
N(7)=+0.5 y^2+0.5 y^1-0.5x^2 y^1-0.5x^2 y^2
$$
$$
N(8)=-0.5x^1+0.5x^1 y^2+0.5x^2-0.5x^2 y^2
$$
$$
N(9)=+1-1 y^2-1x^2+1x^2 y^2
$$

!!! note "Order=3"

```fortran
  order=3
  call blanklines(nol=3)
  call obj%Initiate(elemType=elemType, order=order, ipType=ipType)
  call obj%Display( elemName // "order=" //tostring(order) )
```

```fortran
END PROGRAM main
```
