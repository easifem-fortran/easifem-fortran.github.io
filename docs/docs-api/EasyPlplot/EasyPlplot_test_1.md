---
author: Vikas Sharma, Ph.D.
date: 15 Aug 2022
tags:
    - EasyPlplot/ShowProgress
---

# Easyplplot example 1

## Modules and classes

- [[EasyPlplot]]

## Usage

```fortran
PROGRAM main
  use easifemBase
  use EasyPlplot_Utilities
  integer( i4b ) :: ii, n
```

!!! note ""

```fortran
  n = 1000
  do ii = 1, n
    call showProgress( "debug-1", real(ii, kind=DFP)/n )
  end do
```

```fortran
END PROGRAM main
```