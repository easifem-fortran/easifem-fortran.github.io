# GetParam

Get the values of field of `AbstractBC_`.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE GetParam
  MODULE PURE SUBROUTINE bc_GetQuery(obj, isInitiated, &
    & isSelectionByBox, isSelectionByMeshID, isSelectionByElemNum, &
    & isSelectionByNodeNum, idof, isTangent, isNormal, useFunction, &
    & nodalValueType, useExternal, isUserFunction)
    CLASS(AbstractBC_), INTENT(IN) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isInitiated
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByBox
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByMeshID
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByElemNum
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByNodeNum
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isTangent
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isNormal
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: useFunction
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: idof
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: nodalValueType
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: useExternal
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isUserFunction
  END SUBROUTINE bc_GetQuery
END INTERFACE GetParam
```
