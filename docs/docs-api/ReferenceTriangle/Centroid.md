# Centroid

Returns the centroid of a triangle.

```fortran
MODULE FUNCTION Centroid( refelem, xij ) RESULT( Ans )
  CLASS(ReferenceTriangle_), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans(3)
END FUNCTION Centroid
```
