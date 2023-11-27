---
title: IntVector example 7
tags:
    - IntVector/Initiate
    - IntVector/Display
    - IntVector/Get
---

# Intvector example 7

!!! note ""
    This examples shows how to USE `Get` method to access the entries inside the [[IntVector_]]. The output results can be in various formats including the native fortran INTEGER vectors.

## Modules and classes

- [[IntVector_]]

## Usage


``` fortran
PROGRAM main
    USE easifemBase
    TYPE(IntVector_) :: obj1, obj2, obj(4)
```

!!! note ""
    Initiate an instance of [[IntVector_]]

```fortran
    obj(1) = [1,2]
    obj(2) = [3,4,5]
    obj(3) = [6,7,8]
    obj(4) = [9,10]
```

!!! note ""
    Let us serialized the entries of obj(1:4) and get the values in a scalar instance of intvector. Here, RETURN `datatype` is  [[IntVector_]]

```fortran
    obj2=Get(obj=obj, dataType=TypeIntVector)
    CALL Display(obj2, "obj2:", orient='row')
```

!!! note ""
    Now let us get first two values from each obj(1:4) and packed them in an instance of intvector.

```fortran
    obj2=Get(obj=obj, indx=[1,2], datatype=TypeIntVector)
    CALL Display(obj2, "obj2:", orient='row')
```

!!! error ""
    Note that in the each entry in the indx should be in the bound of obj(1:4).



> Here, TypeIntVector is a PARAMETER defined in the easifemBase library.

!!! note ""
    Now let us get the selected values specified by the indices in `indx`.

!!! settings ""
    Cleanup

```fortran
    CALL DEALLOCATE(obj1)
    CALL DEALLOCATE(obj2)
END PROGRAM main
```



