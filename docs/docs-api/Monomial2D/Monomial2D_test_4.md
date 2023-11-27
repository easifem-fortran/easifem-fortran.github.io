---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Monomial2D
    - Monomial2D/Eval
    - Monomial2D/EvalGradient
---

# Monomial2D example 4

This example shows the usage of [[Monomial2D_]] class. We test `Eval` and `EvalGradient` methods.

## Modules and classes

- [[Monomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial2D_) :: ans, f1, f2, f3
integer(I4B) :: degree(2)
character(len=256) :: varname(2)
```

!!! note "Initiate"
    Initiate the object.
	
$$
f(x,y)=x^2 y
$$

```fortran
  f1=Monomial2D( 2, 1, "x", "y" )
```

!!! note "Eval"
    Evaluating values.

```fortran
  call display( f1%eval(1.0_DFP, 1.0_DFP), "f(1,1)=" )
  call display( f1%eval(2.0_DFP, 3.0_DFP), "f(2,3)=" )
```

!!! example "result"
    f(1,1)=1.00000
    f(2,3)=12.0000

!!! note "EvalGradient"
    Evaluating gradient
	
$$
\frac{df}{dx} = 2xy
$$

```fortran
  call display( f1%evalGradient(1.0_DFP, 1.0_DFP, dim=1_I4B), &
    & "dfdx(1,1)=" )
  call display( f1%evalGradient(2.0_DFP, 3.0_DFP, dim=1_I4B), &
    & "dfdx(2,3)=" )
```

!!! example "result"
    dfdx(1,1)=2.00000
    dfdx(2,3)=12.0000

!!! note "EvalGradient"
    Evaluating gradient
	
$$
\frac{df}{dy} = x^2
$$

```fortran
  call display( f1%evalGradient(1.0_DFP, 1.0_DFP, dim=2_I4B), &
    & "dfdy(1,1)=" )
  call display( f1%evalGradient(2.0_DFP, 3.0_DFP, dim=2_I4B), &
    & "dfdy(2,3)=" )
```

!!! example "results"
    dfdy(1,1)=1.00000
    dfdy(2,3)=4.00000

```fortran
END PROGRAM main
```
