---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
update: 18 August 2022
tags:
    - Monomial2D
---

# Monomial2D example 1

This example shows the usage of [[Monomial2D_]] class.

## Modules and classes

- [[Monomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial2D_) :: obj
```

Initiate the object.

$f(x,y)=1$

```fortran
  obj=Monomial2D( n1=0, n2=0, name1="x", name2="y" )
  call obj%display( 'f(x,y)=' )
```

```txt
>result
f(x,y)=x^0*y^0
```

$f(x,y)=x$

```fortran
  obj=Monomial2D( n1=1, n2=0, name1="x", name2="y" )
  call obj%display( 'f(x,y)=' )
```

```txt
>result
f(x,y)=x^1*y^0
```

$f(x,y)=y$

```fortran
  obj=Monomial2D( n1=0, n2=1, name1="x", name2="y" )
  call obj%display( 'f(x,y)=' )
```

```txt
>result
f(x,y)=x^0*y^1
```

$f(x,y)=xy$

```fortran
  obj=Monomial2D( n1=1, n2=1, name1="x", name2="y" )
  call obj%display( 'f(x,y)=' )
```

```txt
>result
f(x,y)=x^1*y^1
```

$f(x,y)=x^2*y$

```fortran
  obj=Monomial2D( n1=2, n2=1, name1="x", name2="y" )
  call obj%display( 'f(x,y)=' )
```

```txt
>result
f(x,y)=x^2*y^1
```


```fortran
END PROGRAM main
```
