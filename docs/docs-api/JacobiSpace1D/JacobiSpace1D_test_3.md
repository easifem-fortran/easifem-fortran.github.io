---
author: Vikas Sharma, Ph.D.
date: 18 Oct 2022
tags:
    - JacobiSpace1D_Pointer
    - JacobiSpace1D/GetLeadingCoeff
    - JacobiSpace1D/GetLeadingCoeffRatio
    - JacobiSpace1D/GetNormSqr
    - JacobiSpace1D/GetNormSqrRatio
    - JacobiSpace1D/GetNormSqr2
---

# JacobiSpace1D example 3

- Following methods are tested.
- [[JacobiSpace1D_#JacobiSpace1D_Pointer]]
- [[JacobiSpace1D_#GetLeadingCoeff]]
- [[JacobiSpace1D_#GetLeadingCoeffRatio]]
- [[JacobiSpace1D_#GetNormSqr]]
- [[JacobiSpace1D_#GetNormSqrRatio]]
- [[JacobiSpace1D_#GetNormSqr2]]

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

!!! note "GetLeadingCoeff"

```fortran
  CALL Display(aptr%GetLeadingCoeff(n=2_I4B), "k_2=")
  CALL Display(aptr%GetLeadingCoeff(n=3_I4B), "k_3=")
```

!!! note "GetLeadingCoeffRatio"

```fortran
  CALL Display(aptr%GetLeadingCoeffRatio(n=2_I4B), "k_3/k_2=")
```

!!! note "GetNormSqr"

```fortran
  CALL Display(aptr%GetNormSqr(n=2_I4B), "h_2=")
  CALL Display(aptr%GetNormSqr(n=3_I4B), "h_3=")
```

!!! note "GetNormSqrRatio"

```fortran
  CALL Display(aptr%GetNormSqrRatio(n=2_I4B), "h_3/h_2=")
```

!!! note "GetNormSqr2"

```fortran
  CALL Display(aptr%GetNormSqr2(n=5_I4B), "h=")
```

!!! note "cleanup"

```fortran
  CALL aptr%Deallocate()
  Deallocate(aptr)
```

```fortran
END PROGRAM main
```
