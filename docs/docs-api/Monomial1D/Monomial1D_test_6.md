---
author: Vikas Sharma, Ph.D.
date: 17 Oct 2022
tags:
    - Monomial1D/GetDegree
---

# Monomial1D example 6

- This example shows the usage of `GetDegree` method defined in [[Monomial1D_]] class.
- This routine returns the degree of monomial.

## Modules and classes

- [[Monomial1D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Monomial1D_) :: m1, m2
integer(i4b) :: ii, n
```

!!! note "Create monomial"

```fortran
  m1 = Monomial1D(degree=10, varname="x")
  n = m1%GetDegree()
  CALL OK( n .EQ. 10, "" )
```

```fortran
END PROGRAM main
```
