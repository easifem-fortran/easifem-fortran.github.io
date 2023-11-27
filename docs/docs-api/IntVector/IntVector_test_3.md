---
title: IntVector example 3
tags:
    - IntVector/IntVector
    - IntVector/Display
---

# Intvector example 3

!!! example ""
    This example shows how to initiate an instance of [[IntVector_]] by using a function called [[IntVector_#IntVector]]

## Modules and classes

- [[IntVector_]]

## Usage

!!! note ""
    Initiate an instance of [[IntVector_]] by specifying size.

``` fortran
PROGRAM main
USE easifemBase
TYPE(IntVector_) :: obj1
```

!!! note ""
    Let us first ALLOCATE the scalar instance of [[IntVector_]] obj1. We will set its size to 10. The lower bound is 1 and upper bound is 10.

```fortran
obj1 = IntVector(tSize=10)
CALL display(obj1, "obj1=")
```

!!! note ""
    We can also initiate an instance of [[IntVector_]] by the vector of INTEGER.

```fortran
obj1 = IntVector([2, 3])
CALL display(obj1, "obj1=")
```

!!! note ""
   ASSIGNMENT OPERATOR can be used instead of calling above initiate method.

```fortran
obj1=[1,2,3]
CALL display(obj1, "obj1=")
```

!!! settings ""
    Cleanup

```fortran
END PROGRAM main
```
