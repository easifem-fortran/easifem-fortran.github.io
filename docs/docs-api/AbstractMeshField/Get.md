---
id: Get
aliases:
  - Get
tags: []
sidebar_position: 6
---

# Get

Get data from the `AbstractMeshField_`

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Get(obj, globalElement, fevar)
    CLASS(AbstractMeshField_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement
    TYPE(FEVariable_), INTENT(INOUT) :: fevar
  END SUBROUTINE Get
END INTERFACE
```
