---
author: Vikas Sharma, Ph.D.
date: 10 Aug 2022
tags:
  - ReferencePrism
  - ReferencePrism/Initiate
  - ReferencePrism/Display
---

# ReferencePrism example 1

## Modules and classes

- [[ReferencePrism_]]

## Usage

``` fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  type( test_referencePrism_ ) :: obj
  real( dfp ) :: avar
  integer( i4b ), parameter :: nsd=3_I4B
```

!!! note "Initiate"
    Initiate an instance of [[ReferencePrism_]]

```fortran
  CALL obj%Initiate(nsd=nsd)
  CALL obj%display( 'Obj : ' )
```

```fortran
END PROGRAM main
```
