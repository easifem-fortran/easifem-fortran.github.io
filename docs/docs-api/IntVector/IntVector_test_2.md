---
title: IntVector example 2
tags:
    - IntVector/Initiate
    - IntVector/Display
---

# Intvector example 2

## Modules and classes

- [[IntVector_]]

## Usage

!!! note ""
    Initiate an instance of [[IntVector_]] by specifying size.

``` fortran
PROGRAM main
USE easifemBase
TYPE(IntVector_), ALLOCATABLE :: obj( : )
TYPE(IntVector_) :: obj1
INTEGER( I4B ) :: tsize( 4 )
```

!!! note ""
    Let us first ALLOCATE the scalar instance of [[IntVector_]] obj1. We will set its size to 10. The lower bound is 1 and upper bound is 10.

```fortran
CALL Initiate(obj=obj1, tSize=10)
CALL display(obj1, "obj1=")
```

!!! note ""
    Let us now initiate the instance of [[IntVector_]] by specifying the upper and lower bounds.

```fortran
CALL Initiate(obj1, 11, 20)
CALL display(obj1, "obj1=")
```

!!! message ""
    In the above CALL the lowerbound is 11 and upperbound is 20.

!!! note ""
    We can also initiate an instance of [[IntVector_]] by the vector of INTEGER.

```fortran
CALL Initiate(obj1, [2, 3])
CALL display(obj1, "obj1=")
```

!!! note ""
   ASSIGNMENT OPERATOR can be used instead of calling above initiate method.

```fortran
obj1=[1,2,3]
CALL display(obj1, "obj1=")
```

!!! note ""
    The CALL given below will ALLOCATE the vector `obj(:)` WITH 4 elements. The sizes of obj(1:4) are given in `tsize(1:4)`.

```fortran
tsize = [5,5,10,10]
CALL Initiate(obj=obj, tSize=tsize)
```

!!! note ""
    Display the contents.

```fortran
CALL display( obj, msg = "test2")
```

!!! settings ""
    Cleanup

```fortran
END PROGRAM main
```



