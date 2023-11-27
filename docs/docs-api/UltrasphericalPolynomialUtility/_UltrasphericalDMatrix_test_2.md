---
author: Vikas Sharma, Ph.D.
date: 12 Oct 2022
update: 12 Oct 2022
tags:
  - UltrasphericalDMatEvenOdd
---

# UltrasphericalPolynomialUtility example 26

- This example shows the usage of `UltrasphericalDMatrix` method which is defined in [[UltrasphericalPolynomialUtility]] MODULE.
- This routine yields the differentiation matrix, $D$.
- This routine performs even odd decomposition of D matrix

> In this example $\lambda=0.0$ (that is, proportional to Legendre polynomial)

## Module and classes

- [[UltrasphericalPolynomialUtility]]

## Usage

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n, ii
  real(dfp), allocatable :: fval( : ), pt( : ), wt(:), &
    & f1val(:), error(:, :), D(:,:), e(:, :), o(:, :)
  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
```

!!! note "function"
    In this example we consider
	
$$
f(x) = sin(4\pi x)
$$

!!! note "Structure of D"

```fortran
  !!
  n = 5
  !!
  call reallocate( pt, n+1, wt, n+1, fval, n+1 )
  !!
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
  !!
  fval = func1(pt)
  !!
  D = UltrasphericalDMatrix(n=n, lambda=lambda, x=pt, quadType=quadType)
  !!
  CALL reallocate(e, int(n/2)+1, int(n/2)+1)
  CALL reallocate(o, int(n/2)+1, int(n/2)+1)
  CALL UltrasphericalDMatEvenOdd(n=n,D=D, e=e, o=o)
  !!
  CALL display(MdEncode(D), "D=")
  CALL display(MdEncode(e), "e=")
  CALL display(MdEncode(o), "o=")
```

!!! example "result"
    D =

    |         |          |         |         |          |          |
    |---------|----------|---------|---------|----------|----------|
    | -7.5    | 10.141   | -4.0362 | 2.2447  | -1.3499  | 0.5      |
    | -1.7864 | -0       | 2.5234  | -1.1528 | 0.65355  | -0.23778 |
    | 0.48495 | -1.7213  | -0      | 1.753   | -0.78636 | 0.2697   |
    | -0.2697 | 0.78636  | -1.753  | 0       | 1.7213   | -0.48495 |
    | 0.23778 | -0.65355 | 1.1528  | -2.5234 | 0        | 1.7864   |
    | -0.5    | 1.3499   | -2.2447 | 4.0362  | -10.141  | 7.5      |

    Even

    |         |         |         |
    |---------|---------|---------|
    | -7      | 8.7915  | -1.7915 |
    | -2.0241 | 0.65355 | 1.3706  |
    | 0.75465 | -2.5076 | 1.753   |

    Odd part

    |         |          |         |
    |---------|----------|---------|
    | -8      | 11.491   | -6.2809 |
    | -1.5486 | -0.65355 | 3.6763  |
    | 0.21525 | -0.9349  | -1.753  |

!!! settings "cleanup"

!!! note "Define function"

```fortran
  contains
  elemental function func1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = SIN(4.0_DFP * pi * x)
  end function func1
  !!
  elemental function dfunc1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = 4.0_DFP * pi * COS(4.0_DFP * pi * x)
  end function dfunc1
```

```fortran
end program main
```
