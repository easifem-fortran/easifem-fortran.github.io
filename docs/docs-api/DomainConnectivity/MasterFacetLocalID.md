# MasterFacetLocalID

Returns the local facet id in master cell.

:::note
This routine takes local number of facet element.
:::

## Interface1

```fortran
INTERFACE
  MODULE PURE FUNCTION MasterFacetLocalID(obj, localElement) RESULT(ans)
    CLASS(DomainConnectivity_), INTENT(IN) :: obj
    !! Mesh connectivity object
    INTEGER(I4B), INTENT(IN) :: localElement
    !! Facet element number
    INTEGER(I4B) :: ans
    !! Local facet ID
  END FUNCTION MasterFacetLocalID
END INTERFACE
```

## Interface2

```fortran
INTERFACE
  MODULE PURE FUNCTION MasterFacetLocalID(obj, localElement) RESULT(ans)
    CLASS(DomainConnectivity_), INTENT(IN) :: obj
    !! Mesh connectivity data
    INTEGER(I4B), INTENT(IN) :: localElement(:)
    !! List of facet element numbers
    INTEGER(I4B) :: ans(SIZE(localElement))
    !! List of local facet IDs
  END FUNCTION MasterFacetLocalID
END INTERFACE
```
