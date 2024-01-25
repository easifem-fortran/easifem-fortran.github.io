---
sidebar_position: 3
---

# SetSTScalarMeshFieldParam

Set parameters for initiating an instance of `STScalarMeshField`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetSTScalarMeshFieldParam(param, name, &
    & fieldType, varType, engine, defineOn, nns, nnt)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: fieldType
    INTEGER(I4B), INTENT(IN) :: varType
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: defineOn
    !! Nodal, Quadrature
    INTEGER(I4B), INTENT(IN) :: nns
    !! Number of node in space
    INTEGER(I4B), INTENT(IN) :: nnt
    !! Number of node in time
  END SUBROUTINE SetSTScalarMeshFieldParam
END INTERFACE
```

Read more about the arguments [here](/docs-api/AbstractMeshField/AbstractMeshField_).
