---
title: IntVector example 5
tags:
    - IntVector/Initiate
    - IntVector/Display
    - IntVector/IN
---

# Intvector example 2

!!! note ""
    This examples shows how to use Operator(.in.) to find out if an integer set is a subset of another integer set.

## Modules and classes

- [[IntVector_]]

## Usage


``` fortran
PROGRAM main
USE easifemBase
TYPE(IntVector_) :: obj1, obj2
```

!!! note ""
    Initiate an instance of [[IntVector_]]

```fortran
obj1 = [1,2,3]
obj2 = [1,2,3]
```

!!! note ""
    Using opertor(.in.) for native fortran integer vectors

```fortran
CALL OK(obj1%val .in. obj2%val, "operator(.in.)")
CALL OK(obj1 .in. obj2, "operator(.in.)")
```

Let us try anoter test.

```fortran
obj1 = [1,2,3]
obj2 = [3,2,1]
CALL OK(obj1%val .in. obj2%val, "operator(.in.)")
CALL OK(obj1 .in. obj2, "operator(.in.)")
```

Let us try one more test

```fortran
obj1 = [1,2,3]
obj2 = [1,4,6,3,3,2,2]
CALL OK( obj1%val .in. obj2%val, "operator(.in.)")
CALL OK( obj1 .in. obj2, "operator(.in.)")
```

The following test should fail.

```fortran
obj1 = [1,2,5]
CALL OK( obj1%val .in. obj2%val, "operator(.in.)-should-fail")
CALL OK( obj1 .in. obj2, "operator(.in.)-should-fail")
```

The following test should fail.

```fortran
obj1 = [1,2,5,6]
CALL OK( obj1 .in. obj2, "operator(.in.)-should-fail")
```


!!! settings ""
    Cleanup

```fortran
END PROGRAM main
```



