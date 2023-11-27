---
author: Vikas Sharma, Ph.D.
date: 28 Aug 2022
tags:
    - LagrangeFE
---

# LagrangeFE example 2

In this exmple we test Lagrange finite element on Triangle element.
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
integer(i4b), parameter :: elemType=Triangle
character(len=*), parameter :: elemName="Triangle"
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
    Total Basis=3
	
$$
N(1)=+1-1 y^1-1x^1
$$

$$
N(2)=+1x^1
$$

$$
N(3)=+1 y^1
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
    Total Basis=6
	
$$
N(1)=+1-3 y^1+2 y^2+4x^1 y^1-3x^1+2x^2
$$
$$
N(2)=-1x^1+2x^2
$$

$$
N(3)=-1 y^1+2 y^2
$$

$$
N(4)=-4x^1 y^1+4x^1-4x^2
$$

$$
N(5)=+4x^1 y^1
$$

$$
N(6)=+4 y^1-4 y^2-4x^1 y^1
$$

!!! note "Order=3"

```fortran
  order=3
  call blanklines(nol=3)
  call obj%Initiate(elemType=elemType, order=order, ipType=ipType)
  call obj%Display( elemName // "order=" //tostring(order) )
```

!!! example "result"
    order=3
    Total Basis=10
    
$$
N(1)=+1+9 y^2-5.5 y^1-4.5 y^3-13.5x^1 y^2+18x^1 y^1-5.5x^1+9x^2-13.5x^2 y^1-4.5x^3
$$

$$
N(2)=+1x^1-4.5x^2+4.5x^3
$$
$$
N(3)=-4.5 y^2+1 y^1+4.5 y^3
$$
$$
N(4)=+13.5x^1 y^2-22.5x^1 y^1+9x^1-22.5x^2+27x^2 y^1+13.5x^3
$$
$$
N(5)=+4.5x^1 y^1-4.5x^1+18x^2-13.5x^2 y^1-13.5x^3
$$
$$
N(6)=-4.5x^1 y^1+13.5x^2 y^1
$$
$$
N(7)=+13.5x^1 y^2-4.5x^1 y^1
$$
$$
N(8)=+18 y^2-4.5 y^1-13.5 y^3-13.5x^1 y^2+4.5x^1 y^1
$$
$$
N(9)=-22.5 y^2+9 y^1+13.5 y^3+27x^1 y^2-22.5x^1 y^1+13.5x^2 y^1
$$
$$
N(10)=-27x^1 y^2+27x^1 y^1-27x^2 y^1
$$

```fortran
END PROGRAM main
```
