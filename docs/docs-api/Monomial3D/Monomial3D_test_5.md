---
author: Vikas Sharma, Ph.D.
date: 18 Aug 2022
update: 18 Aug 2022
tags:
    - Monomial3D
    - Monomial3D/Display
    - Monomial3D/Grad
    - Monomial3D/Operator(.Grad.)
---

# Monomial3D example 5

- This example shows the usage of [[Monomial3D_]] class. Following methods are tested.
- [[Monomial3D_#Grad]]

## Modules and classes

- [[Monomial3D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial3D_) :: obj, ans
integer(I4B) :: n1, n2, n3
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

!!! note "Grad"
$$
\frac{df}{dx} = 2x y z
$$

$$
\frac{df}{dy} = x^2 z
$$

$$
\frac{df}{dz} = x^2 y
$$

```fortran
  ans = obj%Grad(dim=1)
  call ans%Display( "dfdx = " )
  !!
  ans = obj%Grad(dim=2)
  call ans%Display( "dfdy = " )
  !!
  ans = obj%Grad(dim=3)
  call ans%Display( "dfdz = " )
```

!!! example "result"
    dfdx =x^1 y^1 z^1
    dfdy =x^2 z^1
    dfdz =x^2 y^1

```fortran
END PROGRAM main
```
