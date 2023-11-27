---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
  - Polynomial2D
  - Polynomial2D/GetStringForUID
  - Polynomial2D/GetCoeff
  - Polynomial2D/GetDegree
---

# Polynomial2D example 4

This example shows the usage of [[Polynomial2D_]] class.

## Modules and classes

- [[Polynomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial2D_) :: f1, f2
type(string) :: astr
real(dfp), allocatable :: coeff( : )
integer(i4b), allocatable :: degree( :, : )
```

!!! note "Initiate"
Initiate the object.

$$
y=1+x+y+xy
$$

```fortran
  coeff = [1,1,1,1]
  call reallocate( degree, 4, 2 )
  degree(:,1) = [0,1,0,1]
  degree(:,2) = [0,0,1,1]
  call f1%initiate( coeff, degree, "x", "y" )
  call f1%display( 'f(x,y)=' )
```

!!! note "GetStringForUID"

```fortran
  astr = f1%GetStringForUID()
  CALL Display( astr, "astr = " )
```

!!! example "result"
astr =x^0*y^0x^0*y^1x^1*y^0x^1*y^1

!!! note "GetDegree"

```fortran
  degree = f1%getDegree()
  call display( degree, "degree = " )
```

!!! note "GetDisplayString"

```fortran
  astr = f1%getDisplayString()
  call display( astr, "display string = ")
```

!!! note "GetCoeff"

```fortran
  coeff = f1%getCoeff()
  call display( coeff, "coeff = ")
```

!!! note "GetOrder"

```fortran
  call display( f1%getOrder(), "order = " )
```

```fortran
END PROGRAM main
```
