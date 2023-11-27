---
author: Vikas Sharma, Ph.D.
date: 18 Oct 2022
tags:
    - JacobiSpace1D
    - JacobiSpace1D_Pointer
    - JacobiSpace1D/GetRecurrenceCoeff
    - JacobiSpace1D/GetRecurrenceCoeff2
    - JacobiSpace1D/GetAlpha
    - JacobiSpace1D/GetBeta
---

# JacobiSpace1D example 2

- This example shows how to  get the recurrence coefficients.
- Following methods are tested.
- [[JacobiSpace1D_#GetRecurrenceCoeff]]
- [[JacobiSpace1D_#GetRecurrenceCoeff2]]
- [[JacobiSpace1D_#GetAlpha]]
- [[JacobiSpace1D_#GetBeta]]

## Modules and classes

- [[JacobiSpace1D_]]

## Usage

```fortran
PROGRAM main
use easifembase
use easifemclasses
implicit none
class(AbstractOrthopolSpace1D_), pointer :: aptr
real(dfp), allocatable :: coeff(:,:)
integer(i4b) :: n
```

!!! note "JacobiSpace1D_Pointer"
    Construct an instance of `JacobiSpace1D_` by specifying $\alpha>-1.0$ and $\beta>-1.0$.

```fortran
  aptr => JacobiSpace1D_Pointer(alpha=0.0_DFP, beta=0.0_DFP)
```

!!! note "GetRecurrenceCoeff"

```fortran
  n = 10
  coeff = aptr%GetRecurrenceCoeff(n=n)
  call display(MdEncode(coeff), "coeff="//CHAR_LF)
```

!!! example "result"
    coeff=

    | $\alpha_{n}$ | $\beta_{n}$ |
    |--------------|-------------|
    | 0            | 2           |
    | 0            | 0.33333     |
    | 0            | 0.26667     |
    | 0            | 0.25714     |
    | 0            | 0.25397     |
    | 0            | 0.25253     |
    | 0            | 0.25175     |
    | 0            | 0.25128     |
    | 0            | 0.25098     |
    | 0            | 0.25077     |

!!! note "GetRecurrenceCoeff2"

```fortran
  n = 10
  coeff = aptr%GetRecurrenceCoeff2(n=n)
  call display(MdEncode(coeff), "coeff2="//CHAR_LF)
```

!!! example "result"
    coeff2=

    | $a_{n}$ | $b_{n}$ | $c_{n}$ |
    |---------|---------|---------|
    | 1       | -0      | 1.4142  |
    | 1.5     | 0       | 0.5     |
    | 1.6667  | 0       | 0.66667 |
    | 1.75    | 0       | 0.75    |
    | 1.8     | 0       | 0.8     |
    | 1.8333  | 0       | 0.83333 |
    | 1.8571  | 0       | 0.85714 |
    | 1.875   | 0       | 0.875   |
    | 1.8889  | 0       | 0.88889 |
    | 1.9     | 0       | 0.9     |

!!! note "GetAlpha"

```fortran
  CALL Display(aptr%GetAlpha(n=2_I4B), "alpha_2=")
```

!!! note "GetBeta"

```fortran
  CALL Display(aptr%GetBeta(n=2_I4B), "beta_2=")
```

!!! note "cleanup"

```fortran
  CALL aptr%Deallocate()
  Deallocate(aptr)
```

```fortran
END PROGRAM main
```
