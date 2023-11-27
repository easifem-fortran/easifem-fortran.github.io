---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial1D
---

# Monomial1D example 1

This example shows the usage of [[Monomial1D_]] class.

## Modules and classes

- [[Monomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial1D_) :: obj
```

Initiate the object.

$y=1$

```fortran
  obj=Monomial1D( degree=0_I4B, varname="x" )
  call obj%display( 'f(x)=' )
```

```txt
>result
f(x)=x^0
```

$y=x$

```fortran
  obj=Monomial1D( degree=1_I4B, varname="x" )
  call obj%display( 'f(x)=' )
```

```txt
>result
f(x)=x^1
```

$y=x^2$

```fortran
  obj=Monomial1D( degree=2_I4B, varname="x" )
  call obj%display( 'f(x)=' )
```

```txt
>result
f(x)=x^2
```

```fortran
END PROGRAM main
```
