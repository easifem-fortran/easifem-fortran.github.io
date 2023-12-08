---
sidebar_position: 3
---

# SetSTTensorMeshFieldParam

Set parameters for initiating an instance of `STTensorMeshField_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetSTTensorMeshFieldParam(param, name, &
    & fieldType, varType, engine, defineOn, dim1, dim2, nns, nnt)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: fieldType
    INTEGER(I4B), INTENT(IN) :: varType
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: defineOn
    !! Nodal, Quadrature
    INTEGER(I4B), INTENT(IN) :: dim1
    !! size in dim1
    INTEGER(I4B), INTENT(IN) :: dim2
    !! size in dim2
    INTEGER(I4B), INTENT(IN) :: nns
    !! number of nodes in space
    INTEGER(I4B), INTENT(IN) :: nnt
    !! Number of node in space
  END SUBROUTINE SetSTTensorMeshFieldParam
END INTERFACE
```

Read more about the arguments [here](/docs-api/AbstractMeshField/AbstractMeshField_).
