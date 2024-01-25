---
sidebar_position: 3
---

# SetScalarMeshFieldParam

Set parameters for initiating an instance of `ScalarMeshField`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetScalarMeshFieldParam(param, name, fieldType, varType, &
    & engine, defineOn, nns)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: fieldType
    INTEGER(I4B), INTENT(IN) :: varType
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: defineOn
    !! Nodal, Quadrature
    INTEGER(I4B), INTENT(IN) :: nns
    !! Number of node in space
  END SUBROUTINE SetScalarMeshFieldParam
END INTERFACE
```

Read more about the arguments [here](/docs-api/AbstractMeshField/AbstractMeshField_).

:::info `varType`
`varType` can take following values:

- `Constant`
- `Scalar`, in this case `nns` denotes the number of nodes in `space` in an element.
- `Time`, in this case `nnt` denotes the number of nodes in `time` in an element.

:::
