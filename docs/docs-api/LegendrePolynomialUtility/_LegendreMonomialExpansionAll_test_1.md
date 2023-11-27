---
author: Vikas Sharma, Ph.D.
date: 6 Sept 2022
update: 6 Sept 2022
tags:
  - LegendreMonomialExpansionAll
---

# LegendrePolynomialUtility example 10

This example shows the usage of `LegendreMonomialExpansionAll` method which is defined in [[LegendrePolynomialUtility]] MODULE. This routine returns the monomial expansion.

## Module and classes

- [[LegendrePolynomialUtility]]

## Usage

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: coeff(:, :)
  type(string) :: astr
```

!!! note "LegendreMonomialExpansionAll"

```fortran
  n = 5; call callme
```

!!! example "result"
    | P0 | P1 | P2   | P3   | P4    | P5    |
    |----|----|------|------|-------|-------|
    | 1  | 0  | -0.5 | -0   | 0.375 | 0     |
    | 0  | 1  | 0    | -1.5 | -0    | 1.875 |
    | 0  | 0  | 1.5  | 0    | -3.75 | -0    |
    | 0  | 0  | 0    | 2.5  | 0     | -8.75 |
    | 0  | 0  | 0    | 0    | 4.375 | 0     |
    | 0  | 0  | 0    | 0    | 0     | 7.875 |

!!! note "LegendreMonomialExpansion"

```fortran
  n = 5; call callme2
```

!!! example "result"
    | x0  | x1 | x2 | x3 | x4 | x5 |
    |  --- |  --- |  --- |  --- |  --- |  --- |
    | 0 | 1.875 | -0 | -8.75 | 0 | 7.875 |

!!! settings "cleanup"

```fortran
  contains
  subroutine callme
    coeff=LegendreMonomialExpansionAll( n=n )
    astr = MdEncode( coeff )
    call display( astr%chars(), "" )
  end subroutine callme
  !!
  subroutine callme2
    astr = MdEncode( LegendreMonomialExpansion( n=n ) )
    call display( astr%chars(), "" )
  end subroutine callme2
```

```fortran
end program main
```
