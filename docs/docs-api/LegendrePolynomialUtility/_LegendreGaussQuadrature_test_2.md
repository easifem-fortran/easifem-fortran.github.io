---
author: Vikas Sharma, Ph.D.
date: 3 Aug 2022
update: 3 Aug 2022
tags:
  - LegendreGaussQuadrature
---

# LegendrePolynomialUtility example 28

- This example shows the usage of `LegendreGaussQuadrature` method which is defined in [[LegendrePolynomialUtility]] MODULE.
- This routine returns the quadrature points for Legendre polynom.

## Module and classes

- [[LegendrePolynomialUtility]]

## Usage

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : )
  type(string) :: msg, astr
```

!!! note "test"

```fortran
  n = 1; call callme
  n = 2; call callme
  n = 5; call callme
```

!!! example "result"
    Legendre Gauss Quadrature n = 1

    |   |
    |---|
    | 0 |

    Legendre Gauss Quadrature n = 2

    |          |         |
    |----------|---------|
    | -0.57735 | 0.57735 |

    Legendre Gauss Quadrature n = 5

    |          |          |             |         |         |
    |----------|----------|-------------|---------|---------|
    | -0.90618 | -0.53847 | 2.66893E-17 | 0.53847 | 0.90618 |

!!! settings "cleanup"

```fortran
  contains
  subroutine callme
    call reallocate( pt, n )
    call LegendreGaussQuadrature( n=n, pt=pt )
    msg = "Legendre Gauss Quadrature n = " // tostring( n )
    call display(msg%chars())
    astr = MdEncode( pt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
