# MasterCellNumber

Returns master cell number of given facet number.

If the returned cell number is zero, then it means that facet element does not have a master cell.

:::note
This routine takes local number of facet element.
:::

## Interface1

```fortran
INTERFACE
  MODULE PURE FUNCTION MasterCellNumber(obj, localElement) RESULT(ans)
    CLASS(DomainConnectivity_), INTENT(IN) :: obj
    !! Mesh connectivity data
    INTEGER(I4B), INTENT(IN) :: localElement
    !! Facet element number
    INTEGER(I4B) :: ans
    !! Cell number
  END FUNCTION MasterCellNumber
END INTERFACE
```

## Interface2

```fortran
INTERFACE
  MODULE PURE FUNCTION MasterCellNumber(obj, localElement) RESULT(ans)
    CLASS(DomainConnectivity_), INTENT(IN) :: obj
    !! Mesh connectivity data
    INTEGER(I4B), INTENT(IN) :: localElement(:)
    !! List of facet element numbers
    INTEGER(I4B) :: ans(SIZE(localElement))
    !! List of cell element numbers
  END FUNCTION MasterCellNumber
END INTERFACE
```
