---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
  - Polynomial2D
---

# Polynomial2D example 2

This example shows the usage of [[Polynomial2D_]] class.

## Modules and classes

- [[Polynomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial2D_) :: f1
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
  f1=Polynomial2D( coeff=coeff, &
    & degree=degree, name1="x", name2="y" )
  call f1%display( 'f(x,y)=' )
  call f1%deallocate()
```

!!! example "result"
f(x,y)=+1x^0*y^1+1x^0*y^0+1x^1*y^1+1x^1*y^0

!!! note "Initiate"
Initiate the object.

$$
y=1+2x+3y+4xy
$$

```fortran
  coeff = [1,2,3,4]
  call reallocate( degree, 4, 2 )
  degree(:,1) = [0,1,0,1]
  degree(:,2) = [0,0,1,1]
  f1=Polynomial2D( coeff=coeff, degree=degree, &
    & name1="x", name2="y" )
  call f1%display( 'f(x,y)=' )
  call f1%deallocate()
```

!!! example "result"
f(x,y)=+1x^0*y^1+1x^0*y^0+1x^1*y^1+1x^1*y^0

!!! note "Initiate"
Initiate the object.

$$
y=1+2x+3y+4xy
$$

```fortran
  coeff = [1,2,3,2,2]
  call reallocate( degree, 5, 2 )
  degree(:,1) = [0,1,0,1,1]
  degree(:,2) = [0,0,1,1,1]
  f1=Polynomial2D( coeff=coeff, degree=degree, &
    & name1="x", name2="y" )
  call f1%display( 'f(x,y)=' )
  call f1%deallocate()
```

!!! example "result"
f(x,y)=+1x^0*y^1+1x^0*y^0+1x^1*y^1+1x^1*y^0

```fortran
END PROGRAM main
```
