# SetMeshSelectionParam

Set the parameters to initiate an instance of `MeshSelection_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetMeshSelectionParam(param,  &
    & prefix, &
    & isSelectionByMeshID, &
    & isSelectionByElemNum,  &
    & isSelectionByBox,  &
    & isSelectionByNodeNum)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: prefix
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByMeshID
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByElemNum
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByBox
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByNodeNum
  END SUBROUTINE SetMeshSelectionParam
END INTERFACE
```

:::info `prefix`
Prefix for parameter. You should use `GetPrefix` method.
:::

:::note `isSelectionByMeshID`
Set it to `.true.` when mesh is selected by using the mesh-id.
:::

:::info `isSelectionByElemNum`
Set it to `.true.` when the mesh is selected by using the global element number.
:::

:::info `isSelectionByBox`
Set it to `.true.` when the mesh is selected by using the bounding boxes.
:::

:::info `isSelectionByNodeNum`
Set it to `.true.` when the mesh is selected by using the node numbers.
:::
