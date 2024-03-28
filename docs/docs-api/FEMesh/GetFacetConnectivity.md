# GetFacetConnectivity

## Interface

```fortran
  MODULE PURE FUNCTION getFacetConnectivity( obj, facetElement, &
    & elementType, isMaster, facetBoundary ) RESULT( ans )
    CLASS( Mesh_ ), INTENT( IN ) :: obj
    INTEGER( I4B ), INTENT( IN ) :: facetElement
    INTEGER( I4B ), INTENT( IN ) :: elementType
    LOGICAL( LGT ), INTENT( IN ) :: isMaster
      !! if isMaster is true then connectivity of facet in master-cell
      !! is returned, otherwise connectivity of facet in slave-cell
      !! is returned. This is only applicable for internal facet element
      !! because for domain facet we do not have slave-cell.
      !! Currently, we do not support slave-cell for meshFacet because
      !! the slave of meshFacet lives in different instance of
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: facetBoundary
    INTEGER( I4B ), ALLOCATABLE :: ans( : )
  END FUNCTION getFacetConnectivity
```

```fortran
  MODULE PURE FUNCTION getFacetConnectivity( obj, globalElement, &
    & iface ) RESULT( ans )
    CLASS( Mesh_ ), INTENT( IN ) :: obj
    INTEGER( I4B ), INTENT( IN ) :: globalElement
    INTEGER( I4B ), INTENT( IN ) :: iface
    INTEGER( I4B ), ALLOCATABLE :: ans( : )
  END FUNCTION getFacetConnectivity
```
