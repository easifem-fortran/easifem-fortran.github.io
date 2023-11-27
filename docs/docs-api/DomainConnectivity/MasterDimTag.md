# MasterDimTag

Returns (dim, entityNum) of master cell.

:::note
This routine takes local number of facet element.
:::

## Interface1

```fortran
INTERFACE
  MODULE PURE FUNCTION MasterDimTag(obj, localElement) RESULT(ans)
    CLASS(DomainConnectivity_), INTENT(IN) :: obj
    !! Mesh connectivity object
    INTEGER(I4B), INTENT(IN) :: localElement
    !! Facet element number
    INTEGER(I4B) :: ans(2)
    !! dim, entityNum
  END FUNCTION MasterDimTag
END INTERFACE
```

## Interface2

```fortran
INTERFACE
  MODULE PURE FUNCTION MasterDimTag(obj, localElement) RESULT(ans)
    CLASS(DomainConnectivity_), INTENT(IN) :: obj
    !! Mesh connectivity data
    INTEGER(I4B), INTENT(IN) :: localElement(:)
    !! List of facet element numbers
    INTEGER(I4B) :: ans(2, SIZE(localElement))
    !! dim, entityNum
  END FUNCTION MasterDimTag
END INTERFACE
```
