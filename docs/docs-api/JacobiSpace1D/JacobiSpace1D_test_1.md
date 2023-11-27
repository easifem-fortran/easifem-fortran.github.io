---
author: Vikas Sharma, Ph.D.
date: 18 Oct 2022
tags:
    - JacobiSpace1D
    - JacobiSpace1D_Pointer
    - JacobiSpace1D/GetParam
---

# JacobiSpace1D example 1

- This example shows how to construct an instance of [[JacobiSpace1D_]].
- Following methods are tested.
- [[JacobiSpace1D_#JacobiSpace1D function]]
- [[JacobiSpace1D_#JacobiSpace1D_Pointer]]
- [[JacobiSpace1D_#GetParam]]

## Modules and classes

- [[JacobiSpace1D_]]

## Usage

```fortran
PROGRAM main
use easifembase
use easifemclasses
implicit none
type(JacobiSpace1D_) :: obj
class(AbstractOrthopolSpace1D_), pointer :: aptr
```

!!! note "Constructor"
    Construct an instance of `JacobiSpace1D_` by specifying $\alpha>-1.0$ and $\beta>-1.0$.

```fortran
  obj = JacobiSpace1D(alpha=0.0_DFP, beta=0.0_DFP)
```

!!! note "Display"
    Display the contents of `obj`

```fortran
  CALL obj%display("obj = ")
```

!!! example "result"
      domain=
      --------
      -1.00000
      1.00000
      alpha=0.00000
      beta=0.00000

!!! note "JacobiSpace1D_Pointer"

```fortran
  aptr => JacobiSpace1D_Pointer(alpha=0.0_DFP, beta=0.0_DFP)
  call aptr%Display("aptr= ")
```

!!! example "result"
      domain=
      --------
      -1.00000
      1.00000
      alpha=0.00000
      beta=0.00000

!!! note "GetParam"

```fortran
  CALL Display(obj%GetParam(), "alpha, beta = ")
```

!!! note "Deallocate"

```fortran
  CALL obj%Deallocate()
  CALL aptr%Deallocate()
  Deallocate(aptr)
```

```fortran
END PROGRAM main
```
