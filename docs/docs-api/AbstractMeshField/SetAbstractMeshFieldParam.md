---
id: SetAbstractMeshFieldParam
aliases:
  - SetAbstractMeshFieldParam
tags: []
sidebar_position: 2
---

# SetAbstractMeshFieldParam

This routine sets the parameters necessary for constructing an instance of `AbstractMeshField_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetAbstractMeshFieldParam(param, prefix, name, &
    & fieldType, engine, defineOn, varType, rank, s)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: prefix
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: fieldType
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: defineOn
    INTEGER(I4B), INTENT(IN) :: varType
    INTEGER(I4B), INTENT(IN) :: rank
    INTEGER(I4B), INTENT(IN) :: s(:)
  END SUBROUTINE SetAbstractMeshFieldParam
END INTERFACE
```
