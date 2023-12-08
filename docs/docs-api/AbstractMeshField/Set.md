---
id: Set
aliases:
  - Set
tags: []
sidebar_position: 4
---

# Set

Set data in `AbstractMeshField_`.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface 1 (Set by using FEVariable)

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj, globalElement, fevar)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement
    TYPE(FEVariable_), INTENT(IN) :: fevar
  END SUBROUTINE Set
END INTERFACE
```

## Interface 2 (Set by using UserFunction)

We can use [Set](/docs-api/AbstractMeshField/Set) method and the [UserFunction](/docs-api/UserFunction) to set the values in `AbstractMeshField_`. The interface of this method is given below.

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj, func, dom, timeVec)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    CLASS(UserFunction_), INTENT(INOUT) :: func
    CLASS(Domain_), INTENT(INOUT) :: dom
    REAL(DFP), OPTIONAL, INTENT(IN) :: timeVec(:)
  END SUBROUTINE Set
END INTERFACE
```

## Interface 3 (Set by using Materials)

```fortran
INTERFACE
  MODULE SUBROUTINE Set3(obj, material, name, dom, timeVec)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    CLASS(AbstractMaterial_), INTENT(INOUT) :: material
    !! Abstract material
    CHARACTER(*), INTENT(IN) :: name
    !! name of the AbstractMeshField
    CLASS(Domain_), INTENT(INOUT) :: dom
    !! domain to access the node coord
    REAL(DFP), OPTIONAL, INTENT(IN) :: timeVec(:)
    !! time vector when the var type is `Time` or `SpaceTime`
  END SUBROUTINE Set3
END INTERFACE
```
