---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
  - Polynomial3D
---

# Polynomial3D example 1

This example shows the usage of [[Polynomial3D_]] class.

## Modules and classes

- [[Polynomial3D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial3D_) :: f1
real(dfp), allocatable :: coeff( : )
integer(i4b), allocatable :: degree( :, : )
```

!!! note "Initiate"

$$
y=1+x+y+z
$$

```fortran
  coeff = [1,1,1,1]
  call reallocate( degree, 4, 3 )
  degree(:,1) = [0,1,0,0]
  degree(:,2) = [0,0,1,0]
  degree(:,3) = [0,0,0,1]
  f1=Polynomial3D( coeff, degree, "x", "y", "z" )
  call f1%display( 'f(x,y)=' )
```

!!! example "result"

$$
f(x,y)=+1+1 y^1+1 z^1+1x^1
$$

!!! note "Initiate"

$$
y=1+2x+3y+4z
$$

```fortran
  coeff = [1,2,3,4]
  call reallocate( degree, 4, 3 )
  degree(:,1) = [0,1,0,0]
  degree(:,2) = [0,0,1,0]
  degree(:,3) = [0,0,0,1]
  f1=Polynomial3D( coeff, degree, "x", "y", "z" )
  call f1%display( 'f(x,y)=' )
  call f1%deallocate()
```

!!! example "result"

$$
f(x,y)=+1+3 y^1+4 z^1+2x^1
$$

!!! note "Initiate"
Check duplicates.

$$
y=1+2x+3y+2z+2z
$$

```fortran
  coeff = [1,2,3,2,2]
  call reallocate( degree, 5, 3 )
  degree(:,1) = [0,1,0,0,0]
  degree(:,2) = [0,0,1,0,0]
  degree(:,3) = [0,0,0,1,1]
  f1=Polynomial3D( coeff, degree, "x", "y", "z" )
  call f1%display( 'f(x,y)=' )
  call f1%deallocate()
```

!!! example "result"

$$
f(x,y)=+1+2 z^1+3 y^1+2 z^1+2x^1
$$

```fortran
END PROGRAM main
```
