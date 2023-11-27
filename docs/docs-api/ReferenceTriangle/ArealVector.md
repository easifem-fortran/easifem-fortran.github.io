# ArealVector

Returns the area vector.

```fortran
MODULE FUNCTION ArealVector( refelem, xij ) RESULT( Ans )
  CLASS(ReferenceTriangle_), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans( 3 )
END FUNCTION ArealVector
```
