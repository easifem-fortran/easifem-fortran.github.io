---
id: SetVectorMeshFieldParam
aliases:
  - SetVectorMeshFieldParam
tags: []
sidebar_position: 3
---

# SetVectorMeshFieldParam

Set parameters for initiating an instance of `SetVectorMeshFieldParam`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetVectorMeshFieldParam(param, name, &
    & fieldType, varType, engine, defineOn, spaceCompo, nns)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: fieldType
    INTEGER(I4B), INTENT(IN) :: varType
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: defineOn
    !! Nodal, Quadrature
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    !! space compo
    INTEGER(I4B), INTENT(IN) :: nns
    !! Number of node in space
  END SUBROUTINE SetVectorMeshFieldParam
END INTERFACE
```

Read more about the arguments [here](/docs-api/AbstractMeshField/AbstractMeshField_).
