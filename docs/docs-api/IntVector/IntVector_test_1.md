---
title: IntVector example 1
tags:
    - IntVector/Allocate
    - IntVector/IsAllocated
    - IntVector/IsInitiated
    - IntVector/Deallocate
    - IntVector/Size
    - IntVector/Shape
    - IntVector/GetTotalDimension
---

# Intvector example 1

Testing and showing usage of methods defined in [[IntVector_#Constructor-methods]]

## Modules and classes

- [[IntVector_]]

## Usage


```fortran
PROGRAM main
USE easifemBase
TYPE(IntVector_) :: obj
```

!!! note ""
    Initiate an instance of [[IntVector_]] by specifying size.

```fortran
CALL ALLOCATE(obj=obj, dims=10)
```

!!! note ""
    Let us check if obj is initiated or not.

```fortran
CALL OK(IsAllocated(obj), "IsAllocated(obj)")
```

Alternatively, we can use the method called `isInitiated`

```fortran
CALL OK(IsInitiated(obj), "IsInitiated(obj)")
```

!!! note ""
    Size of the  [[IntVector_]]

```fortran
CALL OK( SIZE(obj) .EQ. 10, "SIZE(obj)")
```

!!! note ""
    Shape of the  [[IntVector_]]

```fortran
CALL OK( ALL(SHAPE(obj) .EQ. [10]), "SHAPE(obj)")
```

!!! note ""
    GetTotalDimension of the  [[IntVector_]]

```fortran
CALL OK( GetTotalDimension(obj) .EQ. 1, "GetTotalDimension(obj)")
```

!!! settings ""
    Cleanup.

```fortran
CALL DEALLOCATE(obj)
END PROGRAM main
```
