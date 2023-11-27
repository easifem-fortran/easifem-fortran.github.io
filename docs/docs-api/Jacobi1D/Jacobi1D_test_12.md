---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - Jacobi1D
---

# Jacobi1D example 12

This example shows the usage of [[Jacobi1D_]] class. We test orthonormal Jacobi polynomial  in this case.

## Modules and classes

- [[Jacobi1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Jacobi1D_) :: obj
type(String) :: astr
integer(i4b) :: ii, n
real( dfp ), parameter :: alpha=0.0, beta=0.0
logical( lgt ), parameter :: isOrthonormal = .TRUE., isMonic=.FALSE.
```

### n=1

```fortran
  n=1
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &
    & isOrthonormal=isOrthonormal, isMonic=isMonic )
  call Display( "J(n=1, alpha=0.0, beta=0.0) := " )
  call obj%Display( "=>" )
  call obj%Deallocate()
```

```txt
>result
J(n=1, alpha=0.0, beta=0.0) :=
=>J_1( x ) = ( x-.000 )* 1.000* J_0
=>J_0( x ) = 1
```

### n=2

```fortran
  n=2
  call blanklines( nol=5 )
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &
    & isOrthonormal=isOrthonormal, isMonic=isMonic)
  call Display( "J(n=2, alpha=0.0, beta=0.0) := " )
  call obj%Display( "=>" )
  call obj%Deallocate()
```

```txt
>result
J(n=2, alpha=0.0, beta=0.0) :=
=>J_2( x ) = ( x-.000 )* 1.500* J_1( x ) - .333* 1.500* J_0( x )
=>J_1( x ) = ( x-.000 )* 1.000* J_0
=>J_0( x ) = 1
```

### n=3

```fortran
  n=3
  call blanklines( nol=5 )
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &
    & isOrthonormal=isOrthonormal, isMonic=isMonic)
  call Display( "J(n=3, alpha=0.0, beta=0.0) := " )
  call obj%Display( "=>" )
  call obj%Deallocate()
```

```txt
>result
J(n=3, alpha=0.0, beta=0.0) :=
=>J_3( x ) = ( x-.000 )* 1.667* J_2( x ) - .267* 2.500* J_1( x )
=>J_2( x ) = ( x-.000 )* 1.500* J_1( x ) - .333* 1.500* J_0( x )
=>J_1( x ) = ( x-.000 )* 1.000* J_0
=>J_0( x ) = 1
```

### n=4

```fortran
  n = 4
  call blanklines( nol=5 )
  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &
    & isOrthonormal=isOrthonormal, isMonic=isMonic)
  call Display( "J(n=4, alpha=0.0, beta=0.0) := " )
  call obj%Display( "=>" )
  call obj%Deallocate()
```

```txt
>result
J(n=4, alpha=0.0, beta=0.0) :=
=>J_4( x ) = ( x-.000 )* 1.750* J_3( x ) - .257* 2.917* J_2( x )
=>J_3( x ) = ( x-.000 )* 1.667* J_2( x ) - .267* 2.500* J_1( x )
=>J_2( x ) = ( x-.000 )* 1.500* J_1( x ) - .333* 1.500* J_0( x )
=>J_1( x ) = ( x-.000 )* 1.000* J_0
=>J_0( x ) = 1
```

```fortran
END PROGRAM main
```
