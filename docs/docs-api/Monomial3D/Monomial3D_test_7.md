---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
update: 17 Oct 2022
tags:
    - Monomial3D
    - Monomial3D/OPERATOR(*)
---

# Monomial3D example 7

- This example shows the usage of [[Monomial3D_]] class.
- Tests the `*` operator

## Modules and classes

- [[Monomial3D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial3D_) :: obj, obj1, obj2
integer(I4B) :: n1, n2, n3
character(len=*), parameter :: varname1="x", varname2="y", varname3="z"
```

!!! note ""
    Initiate the object. $f(x,y,z)=1$

```fortran
  n1=1; n2=2; n3=3
  obj1=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
  call obj1%display( 'f1(x,y,z)=' )
  !!
  n1=4; n2=5; n3=6
  obj2=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
  call obj2%display( 'f2(x,y,z)=' )
  !!
  obj=obj1 * obj2
  call obj%display( 'f(x,y,z)=' )
```

!!! example "result"
    f(x,y,z)=

```fortran
END PROGRAM main
```
