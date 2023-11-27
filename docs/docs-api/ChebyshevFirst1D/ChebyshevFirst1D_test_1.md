---
author: Vikas Sharma, Ph.D.
date: 26 July 2022
tags:
    - ChebyshevFirst1D
---

# ChebyshevFirst1D example 1

This example shows the usage of [[ChebyshevFirst1D_]] class.

## Modules and classes

- [[ChebyshevFirst1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(ChebyshevFirst1D_) :: obj
type(String) :: astr
integer(i4b) :: ii
```

### n=1

```fortran
  obj = ChebyshevFirst1D(varname="x", n=1)
  call Display( "T(n=1) := " )
  call obj%Display( "=>" )
```

```txt
>result
J(n=1, alpha=0.0, beta=0.0) :=
=>J_1( x ) = ( x-.000 )* 1.000* J_0
=>J_0( x ) = 1
```

### n=2

```fortran
  call blanklines( nol=5 )
  obj = ChebyshevFirst1D(varname="x", n=2)
  call Display( "J(n=2, alpha=0.0, beta=0.0) := " )
  call obj%Display( "=>" )
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
  call blanklines( nol=5 )
  obj = ChebyshevFirst1D(varname="x", n=3)
  call Display( "J(n=3, alpha=0.0, beta=0.0) := " )
  call obj%Display( "=>" )
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
  call blanklines( nol=5 )
  obj = Jacobi1D(varname="x", n=4, alpha=0.0_DFP, beta=0.0_DFP)
  call Display( "J(n=4, alpha=0.0, beta=0.0) := " )
  call obj%Display( "=>" )
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
