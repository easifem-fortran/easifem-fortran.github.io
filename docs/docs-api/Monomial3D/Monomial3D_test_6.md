---
author: Vikas Sharma, Ph.D.
date: 18 Aug 2022
update: 18 Aug 2022
tags:
    - Monomial3D
    - Monomial3D/Display
    - Monomial3D/GetStringForUID
    - Monomial3D/GetDisplayString
    - Monomial3D/GetDegree
---

# Monomial3D example 6

- This example shows the usage of [[Monomial3D_]] class.
- Following methods are tested.
- [[Monomial3D_#GetStringForUID]]
- [[Monomial3D_#GetDisplayString]]
- [[Monomial3D_#GetDegree]]

## Modules and classes

- [[Monomial3D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial3D_) :: obj
type(String) :: astr
integer(I4B) :: n1, n2, n3, degree(3)
character(len=*), parameter :: varname1="x", varname2="y", varname3="z"
```

!!! note ""
    Initiate the following monomial.
$$
f(x,y)=x^2 y z
$$

```fortran
  n1=2; n2=1; n3=1
  obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
```

```fortran
  astr = obj%GetStringForUID()
  call Display( astr, "GetStringForUID = " )
  astr = obj%GetDisplayString()
  call Display( astr, "GetDisplayString = " )
  degree = obj%GetDegree()
  call Display( degree, "GetDegree = " )
```

!!! example "result"
    GetStringForUID =x^2*y^1*z^1
    GetDisplayString =x^2 y^1 z^1
    GetDegree =
    ------------
        2
        1
        1

```fortran
END PROGRAM main
```
