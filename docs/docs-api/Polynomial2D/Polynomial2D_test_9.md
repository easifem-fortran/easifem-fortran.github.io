---
author: Vikas Sharma, Ph.D.
date: 12 Aug 2022
tags:
    - Polynomial2D
    - Polynomial2D/Operator(*)
---

# Polynomial2D example 9

This example shows the usage of [[Polynomial2D_]] class. In this example we get polynomials by adding monomials.

- poly = mono * integer
- poly = mono * real
- poly = integer * mono
- poly = real * mono
- poly = mono * mono
- poly = mono * poly
- poly = poly * mono
- poly = poly * poly
- poly = poly * integer
- poly = poly * real
- poly = integer * poly
- poly = real * poly

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

!!! note "Monomial * integer"
    Initiate the [[Monomial2D_]] object.
$$
m=xy
$$

```fortran
  m1 = Monomial2D( 1,1,"x","y" )
  m2 = Monomial2D( 2, 0, "x", "y" )
  f1 = m1 * 2
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1 y^1
$$

!!! note "integer * monomial"

```fortran
  f1 = 2*m1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1 y^1
$$

!!! note "monomial * real"

```fortran
  f1 = m1 * 2.0
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1 y^1
$$

!!! note "real * monomial"

```fortran
  f1 = 2.0 * m1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1 y^1
$$

!!! note "monomial * monomial"

```fortran
  f1 = m1 * m1
  call f1%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^2 y^2
$$

!!! note "polynomial * monomial"

```fortran
  f1 = m1 + m2
  f2 = f1 * m2
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^3 y^1+1x^4
$$

!!! note "monomial * polynomial"

```fortran
  f2 = m2 * f1
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^3 y^1+1x^4
$$

!!! note "polynomial * polynomial"

```fortran
  f2 = f1 * f1
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+1x^2 y^2+2x^3 y^1+1x^4
$$

!!! note "polynomial * integer"

```fortran
  f2 = f1 * 2
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1 y^1+2x^2
$$

!!! note "integer * polynomial"

```fortran
  f2 = 2*f1
  call f2%display( 'f(x,y)=' )
```

!!! example "result"
$$
f(x,y)=+2x^1 y^1+2x^2
$$

```fortran
END PROGRAM main
```
