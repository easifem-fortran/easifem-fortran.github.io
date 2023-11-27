---
author: Vikas Sharma, Ph.D.
date: 10 Oct 2022
update: 10 Oct 2022
tags:
  - UltrasphericalQuadrature
---

# UltrasphericalPolynomialUtility example 10

This example shows the usage of `UltrasphericalQuadrature` method which is defined in [[UltrasphericalPolynomialUtility]] MODULE. This routine returns the quadrature points for Ultraspherical polynomials, also we get only inside quadrature points and their weights.

> By using this subroutine we can get Ultraspherical-Gauss, Ultraspherical-Gauss-Radau, Ultraspherical-Gauss-Lobatto quadrature points

## Module and classes

- [[UltrasphericalPolynomialUtility]]

## Usage

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, quadType
  real( dfp ), parameter :: lambda=0.5_DFP
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  logical(lgt), parameter :: onlyInside=.true.
```

!!! note "Ultraspherical-Gauss"

```fortran
  n = 5; quadType=Gauss; call callme
```

!!! example "result"
    | pt           | wt      |
    |--------------|---------|
    | -0.90618     | 0.23693 |
    | -0.53847     | 0.47863 |
    | -1.56541E-16 | 0.56889 |
    | 0.53847      | 0.47863 |
    | 0.90618      | 0.23693 |

!!! note "Ultraspherical-Radau-Left"

```fortran
  n = 5; quadType=GaussRadauLeft; call callme
```

!!! example "result"
    | pt       | wt      |
    |----------|---------|
    | -0.80293 | 0.31964 |
    | -0.39093 | 0.48539 |
    | 0.12405  | 0.52093 |
    | 0.60397  | 0.4169  |
    | 0.92038  | 0.20159 |

!!! note "Ultraspherical-Radau-Right"

```fortran
  n = 5; quadType=GaussRadauRight; call callme
```

!!! example "result"
    | pt       | wt      |
    |----------|---------|
    | -0.92038 | 0.20159 |
    | -0.60397 | 0.4169  |
    | -0.12405 | 0.52093 |
    | 0.39093  | 0.48539 |
    | 0.80293  | 0.31964 |

!!! note "Ultraspherical-Lobatto"

```fortran
  n = 5; quadType=GaussLobatto; call callme
```

!!! example "result"
    | pt          | wt      |
    |-------------|---------|
    | -0.83022    | 0.27683 |
    | -0.46885    | 0.43175 |
    | 3.41582E-16 | 0.48762 |
    | 0.46885     | 0.43175 |
    | 0.83022     | 0.27683 |

!!! settings "cleanup"

```fortran
  contains
  subroutine callme
    call reallocate( pt, n, wt, n )
    call UltrasphericalQuadrature( n=n, pt=pt, wt=wt, &
      & quadType=quadType, onlyInside=onlyInside, &
      & lambda=lambda )
    msg = "| pt | wt |"
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
