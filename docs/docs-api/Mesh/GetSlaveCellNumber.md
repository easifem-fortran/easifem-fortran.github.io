# GetSlaveCellNumber

## Interface

```fortran
  MODULE PURE FUNCTION getSlaveCellNumber( obj, facetElement, &
    & elementType, facetBoundary ) RESULT( ans )
    CLASS( Mesh_ ), INTENT( IN ) :: obj
    INTEGER( I4B ), INTENT( IN ) :: facetElement
    INTEGER( I4B ), INTENT( IN ) :: elementType
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: facetBoundary
    INTEGER( I4B ) :: ans
  END FUNCTION getSlaveCellNumber
```
