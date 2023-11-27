---
title: IntVector example 6
tags:
    - IntVector/Initiate
    - IntVector/Display
    - IntVector/Get
---

# Intvector example 6

!!! note ""
    This examples shows how to USE `Get` method to access the entries inside the [[IntVector_]]. The output results can be in various formats including the native fortran INTEGER vectors.

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
    obj1 = arange(1,10,1)
    CALL Display(obj1, "obj1: ", orient='row')
```

!!! note ""
    Lets get entries of obj1 and in obj2. For this purpose, we need to specify the DATA TYPE of RETURN variable. Here, RETURN `datatype` is  [[IntVector_]]

```fortran
    obj2=Get(obj=obj1, dataType=TypeIntVector)
    CALL Display(obj2, "obj2:", orient='row')
```

> Here, TypeIntVector is a PARAMETER defined in the easifemBase library.

!!! note ""
    Now let us get the selected values specified by the indices in `indx`.

```fortran
    obj2=Get(obj=obj1, indx=[1,3,5], datatype=TypeIntVector)
    CALL Display(obj2, "obj2:", orient='row')
```

!!! note ""
    Triplets are also supported. istart is necessary. iend, and istride are optional.

Let us get all the values.

```fortran
    obj2 = Get(obj=obj1, istart=1 , datatype=TypeIntVector)
    call Display(obj2, "obj2: all values = ", orient='row')
```

Let us get values at odd index position

```fortran
    obj2 = Get(obj=obj1, istart=1, stride=2, datatype=TypeIntVector)
    call Display(obj2, "obj2: odd index = ", orient='row')
```

Let us get values at even index positions

```fortran
    obj2 = Get(obj=obj1, istart=2, stride=2, iend=size(obj1), &
        & datatype=TypeIntVector )
    call Display(obj2, "obj2: even index = ", orient='row')
```

!!! settings ""
    Cleanup

```fortran
    CALL DEALLOCATE(obj1)
    CALL DEALLOCATE(obj2)
END PROGRAM main
```



