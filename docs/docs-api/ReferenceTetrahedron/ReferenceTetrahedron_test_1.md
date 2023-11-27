---
author: Vikas Sharma, Ph.D.
date: 10 Aug 2022
tags:
  - ReferenceTetrahedron
  - ReferenceTetrahedron/Initiate
  - ReferenceTetrahedron/Display
---

# ReferenceTetrahedron example 1

## Modules and classes

- [[ReferenceTetrahedron_]]

## Usage

``` fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  type( test_referenceTetrahedron_ ) :: obj
  real( dfp ) :: avar
  integer( i4b ), parameter :: nsd=3_I4B
```

!!! note "Initiate"
    Initiate an instance of [[ReferenceTetrahedron_]]

```fortran
  CALL obj%Initiate(nsd=nsd)
  CALL obj%display( 'Obj : ' )
```

```fortran
END PROGRAM main
```
