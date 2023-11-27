---
author: Vikas Sharma, Ph.D.
date: 18 Oct 2022
tags:
    - JacobiSpace1D_Pointer
    - JacobiSpace1D/GetZeros
---

# JacobiSpace1D example 4

- Following methods are tested.
- [[JacobiSpace1D_#JacobiSpace1D_Pointer]]
- [[JacobiSpace1D_#GetZeros]]

## Modules and classes

- [[JacobiSpace1D_]]

## Usage

```fortran
PROGRAM main
use easifembase
use easifemclasses
implicit none
class(AbstractOrthopolSpace1D_), pointer :: aptr
real(dfp), allocatable :: ans(:)
integer(i4b) :: n
```

!!! note "JacobiSpace1D_Pointer"
    Construct an instance of `JacobiSpace1D_` by specifying $\alpha>-1.0$ and $\beta>-1.0$.

```fortran
  aptr => JacobiSpace1D_Pointer(alpha=0.0_DFP, beta=0.0_DFP)
```

!!! note "GetZeros"

```fortran
  n = 10
  ans = aptr%GetZeros(n=n)
  CALL Display(MdEncode(ans), "zeros="//char_lf)
```

!!! example "result"
    zeros=

    |          |          |          |         |          |         |        |         |         |         |
    |----------|----------|----------|---------|----------|---------|--------|---------|---------|---------|
    | -0.97391 | -0.86506 | -0.67941 | -0.4334 | -0.14887 | 0.14887 | 0.4334 | 0.67941 | 0.86506 | 0.97391 |

!!! note "cleanup"

```fortran
  CALL aptr%Deallocate()
  Deallocate(aptr)
```

```fortran
END PROGRAM main
```
