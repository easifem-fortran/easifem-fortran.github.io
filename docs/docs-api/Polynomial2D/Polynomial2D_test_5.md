---
author: Vikas Sharma, Ph.D.
date: 12 Aug 2022
tags:
    - Polynomial2D
    - Polynomial2D/Grad
---

# Polynomial2D example 5

This example shows the usage of [[Polynomial2D_]] class.

## Modules and classes

- [[Polynomial2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Polynomial2D_) :: f1, f2
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
  call f1%initiate( coeff, degree, "x", "y" )
  call f1%display( 'f(x,y)=' )
```

!!! note "Grad"
$$
\frac{df}{dx} = 1+y
$$

```fortran
    f2 = f1 .GRAD. 1
    call f2%display( "dfdx=" )
```

!!! example "result"
$$
ans=+1x^0*y^0+1x^0*y^1
$$

!!! note "Grad"
$$
\frac{df}{dy} = 1+x
$$

```fortran
    f2 = f1 .GRAD. 2
    call f2%display( "dfdy=" )
```

!!! example "result"
$$
dfdy=+1x^0*y^0+1x^1*y^0
$$

```fortran
END PROGRAM main
```
