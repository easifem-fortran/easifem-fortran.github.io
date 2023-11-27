---
author: Vikas Sharma, Ph.D.
date: 6 Sept 2022
update: 6 Sept 2022
tags:
  - LegendreGradientEval
---

# LegendrePolynomialUtility example 9

This example shows the usage of `LegendreGradientEval` method which is defined in [[LegendrePolynomialUtility]] MODULE. This routine evaluates gradient of Legendre polynomial of order n, at several points.

## Module and classes

- [[LegendrePolynomialUtility]]

## Usage

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:), x(:), exact(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
```

!!! note "Legendre-Gauss"

```fortran
  n = 3
  x = [-1.0, 0.0, 1.0]; call callme
  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)
  call ok( ALL(SOFTEQ(ans, exact, tol )))
```

!!! settings "cleanup"

```fortran
  contains
  subroutine callme
    ans= LegendreGradientEval( n=n, x=x )
  end subroutine callme
```

```fortran
end program main
```
