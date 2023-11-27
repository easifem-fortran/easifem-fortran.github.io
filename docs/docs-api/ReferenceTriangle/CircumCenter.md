# CircumCenter

Returns the circum-center of the triangle

```fortran
MODULE FUNCTION CircumCentre(  refelem, xij ) RESULT(CAns )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans(3)
END FUNCTION CircumCentre
```
