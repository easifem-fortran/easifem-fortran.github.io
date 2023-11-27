---
author: Vikas Sharma, Ph.D.
date: 12 Aug 2022
tags:
    - Polynomial2D
    - Polynomial2D/Grad
---

# Polynomial2D example 6

This example shows the usage of [[Polynomial2D_]] class. In this example we test `Assign` method. Following operations are allowed.

- [x] obj=obj
- [x] obj=mono2
- [x] obj=1
- [x] obj=1.0

- `obj` is an instance of [[Polynomial2D_]]
- `mono` is an instance of [[Monomial2D_]]

## Modules and classes

- [[Polynomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial2D_) :: f1
type(Monomial2D_) :: m1
```

!!! note "Initiate"
    Initiate the [[Monomial2D_]] object.
$$
m=xy
$$

```fortran
  m1 = Monomial2D( 1,1,"x","y" )
  f1 = m1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^1*y^1
$$

!!! note "Initiate"
    Now we assign a polynomial a scalar value.

```fortran
  f1 = 2
  call f1%display( 'f(x,y)=')
```

!!! example "result"
$$
f(x,y)=+2x^0*y^0
$$

```fortran
  f1 = 2.0
  call f1%display( 'f(x,y)=')
```

!!! example "result"
$$
f(x,y)=+2x^0*y^0
$$

```fortran
END PROGRAM main
```
