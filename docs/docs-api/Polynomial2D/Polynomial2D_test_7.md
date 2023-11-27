---
author: Vikas Sharma, Ph.D.
date: 12 Aug 2022
tags:
    - Polynomial2D
    - Polynomial2D/Operator(+)
---

# Polynomial2D example 7

This example shows the usage of [[Polynomial2D_]] class. In this example we get polynomials by adding monomials.

- poly = mono + integer
- poly = mono + real
- poly = integer + mono
- poly = real + mono
- poly = mono + mono
- poly = mono + poly
- poly = poly + mono
- poly = poly + poly
- poly = poly + integer
- poly = poly + real
- poly = integer + poly
- poly = real + poly

## Modules and classes

- [[Polynomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial2D_) :: f1, f2
type(Monomial2D_) :: m1, m2
```

!!! note "Monomial + integer"
    Initiate the [[Monomial2D_]] object.
$$
m=xy
$$

```fortran
  m1 = Monomial2D( 1,1,"x","y" )
  f1 = m1 + 1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^0*y^0+1x^1*y^1
$$

!!! note "integer+monomial"

```fortran
  f1 = 1+m1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^0*y^0+1x^1*y^1
$$

!!! note "monomial + real"

```fortran
  f1 = m1 + 1.0
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^0*y^0+1x^1*y^1
$$

!!! note "real + monomial"

```fortran
  f1 = 1.0 + m1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^0*y^0+1x^1*y^1
$$

!!! note "monomial+ monomial"

```fortran
  f1 = m1 + m1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1*y^1
$$

!!! note "polynomial + monomial"

```fortran
  m2 = Monomial2D( 2, 0, "x", "y" )
  f1 = f1 + m2
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1*y^1+1x^2*y^0
$$

!!! note "monomial + polynomial"

```fortran
  m2 = Monomial2D( 0, 2, "x", "y" )
  f1 = m2 + f1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^0*y^2+2x^1*y^1+1x^2*y^0
$$

!!! note "polynomial + polynomial"

```fortran
  f2 = f1 + f1
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^0*y^2+4x^1*y^1+2x^2*y^0
$$

!!! note "polynomial + integer"

```fortran
  f2 = f1 + 1
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^0*y^2+1x^0*y^0+2x^1*y^1+1x^2*y^0
$$

!!! note "integer + polynomial"

```fortran
  f2 = 1 + f1
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^0*y^2+1x^0*y^0+2x^1*y^1+1x^2*y^0
$$

```fortran
END PROGRAM main
```
