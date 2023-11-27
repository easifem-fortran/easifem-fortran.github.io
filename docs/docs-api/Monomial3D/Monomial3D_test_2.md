---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
update: 18 Aug 2022
tags:
    - Monomial3D_Pointer
    - Monomial3D/Display
---

# Monomial3D example 2

- This example shows the usage of [[Monomial3D_]] class.
- We test [[Monomial3D_#Monomial3D_Pointer]] Method.

## Modules and classes

- [[Monomial3D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
class(Monomial3D_), pointer :: obj
integer(I4B) :: n1, n2, n3
character(len=*), parameter :: varname1="x", varname2="y", varname3="z"
```

!!! note ""
    Initiate the object. $f(x,y,z)=1$

```fortran
  n1=0; n2=0; n3=0
  obj=>Monomial3D_Pointer( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
  call obj%display( 'f(x,y,z)=' )
  deallocate(obj)
```

!!! example "result"

!!! note ""
$$
f(x,y,z)=x^1
$$

```fortran
  n1=1; n2=0; n3=0
  obj=>Monomial3D_Pointer( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
  call obj%display( 'f(x,y,z)=' )
  deallocate(obj)
```

!!! example "result"
f(x,y,z)=x^1

!!! note ""
$$
f(x,y,z)=y^1
$$

```fortran
  n1=0; n2=1; n3=0
  obj=>Monomial3D_Pointer( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
  call obj%display( 'f(x,y,z)=' )
  deallocate(obj)
```

!!! example "result"
    f(x,y,z)=y^1

!!! note ""
$$
f(x,y,z)=xyz
$$

```fortran
  n1=1; n2=1; n3=1
  obj=>Monomial3D_Pointer( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
  call obj%display( 'f(x,y,z)=' )
  deallocate(obj)
```

!!! example "result"
    f(x,y,z)=x^1 y^1 z^1

!!! note ""
$$
f(x,y)=x^2 y z
$$

```fortran
  n1=2; n2=1; n3=1
  obj=>Monomial3D_Pointer( n1=n1, n2=n2, n3=n3, varname1=varname1, &
    & varname2=varname2, varname3=varname3 )
  call obj%display( 'f(x,y,z)=' )
  deallocate(obj)
```

!!! example "result"
f(x,y,z)=x^2 y^1 z^1

```fortran
END PROGRAM main
```
