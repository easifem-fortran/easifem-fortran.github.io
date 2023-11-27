---
author: Vikas Sharma, Ph.D.
date: 4 Sept 2022
tags:
    - MultiIndices
    - MultiIndices/Initiate
    - MultiIndices/Deallocate
    - MultiIndices/Display
    - MultiIndices/GetMultiIndices
---

# MultiIndices example 3

## Modules and classes

- [[MultiIndices_]]

## Usage

```fortran
PROGRAM main
USE easifemBase
type(multiindices_) :: obj
integer(i4b) :: n, d
integer(i4b), allocatable :: indices(:,:)
```

!!! note "Initiate"
    Initiate the object.

```fortran
  obj=MultiIndices(n=0, d=1)
  indices = GetMultiIndices(obj=obj, upto=.true.)
  CALL Display(indices, "indices=")
```

!!! example "result"
    indices=
    --------
      0  0

!!! note "n=1, d=1"

```fortran
  obj=MultiIndices(n=1, d=1)
  indices = GetMultiIndices(obj, .true.)
  CALL Display(transpose(indices), "indices=")
```

!!! example "result"
    indices=
    --------
    0  0
    0  1
    1  0

!!! note "n=2, d=1"

```fortran
  obj=MultiIndices(n=2, d=1)
  indices = GetMultiIndices(obj, .true.)
  CALL Display(transpose(indices), "indices=")
```

!!! example "result"
    indices=
    --------
    0  0
    0  1
    1  0
    0  2
    1  1
    2  0

!!! note "n=2, d=2"

```fortran
  obj=MultiIndices(n=2, d=2)
  indices = GetMultiIndices(obj, .true.)
  CALL Display(transpose(indices), "indices=")
```

!!! example "result"
    indices=
    --------
    0  0  0
    0  0  1
    0  1  0
    1  0  0
    0  0  2
    0  1  1
    0  2  0
    1  0  1
    1  1  0
    2  0  0

!!! note "n=2, d=3"

```fortran
  obj=MultiIndices(n=2, d=3)
  indices = GetMultiIndices(obj, .true.)
  CALL Display(transpose(indices), "indices=")
```

!!! example "result"
    indices=
    --------
    0  0  0  0
    0  0  0  1
    0  0  1  0
    0  1  0  0
    1  0  0  0
    0  0  0  2
    0  0  1  1
    0  0  2  0
    0  1  0  1
    0  1  1  0
    0  2  0  0
    1  0  0  1
    1  0  1  0
    1  1  0  0
    2  0  0  0

```fortran
END PROGRAM main
```
