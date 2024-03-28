# GetLocalFacetID

## Interface

```fortran
  MODULE PURE FUNCTION getLocalFacetID( obj, facetElement, &
    & elementType, isMaster, facetBoundary ) RESULT( ans )
    CLASS( Mesh_ ), INTENT( IN ) :: obj
    INTEGER( I4B ), INTENT( IN ) :: facetElement
    INTEGER( I4B ), INTENT( IN ) :: elementType
    LOGICAL( LGT ), INTENT( IN ) :: isMaster
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: facetBoundary
    INTEGER( I4B ) :: ans
  END FUNCTION getLocalFacetID
```
