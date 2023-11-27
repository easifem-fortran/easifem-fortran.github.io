# Barycentric

Returns the barycentric coordinates of triangle

```fortran
MODULE FUNCTION Barycentric( refelem, xij, x ) RESULT( Ans )
  CLASS(ReferenceTriangle_), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:)
  REAL( DFP ), INTENT( IN ) :: x( : )
  REAL( DFP ) :: Ans( 3 )
END FUNCTION Barycentric
```
