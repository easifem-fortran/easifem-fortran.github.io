---
id: Add
aliases:
  - Add
tags: []
sidebar_position: 5
---

# Add

Add data to `AbstractMeshField`.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Add(obj, globalElement, scale, fevar)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement
    REAL(DFP), INTENT(IN) :: scale
    TYPE(FEVariable_), INTENT(IN) :: fevar
  END SUBROUTINE Add
END INTERFACE
```
