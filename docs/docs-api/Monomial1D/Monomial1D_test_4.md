---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial1D/EvalGradient
    - Monomial1D/Grad
---

# Monomial1D example 4

This example shows the usage of `EvalGradient` and `Grad` operator for [[Monomial1D_]] class.

## Modules and classes

- [[Monomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial1D_) :: y0, y1, y2, y3, ans
```

Initiate the object.

$y=1$

```fortran
  y0=Monomial1D( degree=0_I4B, varname="x" )
  CALL Display( y0%evalgradient( x=1.0_DFP ), "f(1)="  )
```

```txt
>result
f(1)=0.00000
```

$y=x$

```fortran
  y1=Monomial1D( degree=1_I4B, varname="x" )
  CALL Display( y1%EvalGradient(1.0_DFP), "f(1)="  )
```

```txt
>result
f(1)=1.00000
```

$y=x^{2}$

```fortran
  y2=Monomial1D( degree=2_I4B, varname="x" )
  CALL Display( y2%EvalGradient(1.0_DFP), "f(1)="  )
```

```txt
>result
f(1)=2.00000
```

We can also get the gradient of the monomial

```fortran
  ans = y2%Grad()
  CALL ans%display("grad of y2 f(x) = ")
```

```txt
>result
grad of y2 f(x) =x^1
```

```fortran
END PROGRAM main
```
