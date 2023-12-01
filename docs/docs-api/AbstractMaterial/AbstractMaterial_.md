---
sidebar_position: 2
---

# Structure

`AbstractMaterial_` is an abstract class for defining material and its behavior.

```fortran
TYPE, ABSTRACT :: AbstractMaterial_
  PRIVATE
  LOGICAL(LGT) :: isInit = .FALSE.
  INTEGER(I4B) :: tProperties = 0_I4B
  !! Total number of properties
  TYPE(String) :: name
    !! name of the material
  TYPE(FhashTable_) :: tbl
  !! Hash table for name to index mapping
  TYPE(UserFunctionPointer_), ALLOCATABLE :: matProps(:)
  !! material properties
END TYPE AbstractMaterial_
```
