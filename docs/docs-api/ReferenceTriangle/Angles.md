# Angles

Returns three angles of a triangle

```fortran
MODULE FUNCTION Angles( refelem, xij ) RESULT( Ans )
  CLASS(ReferenceTriangle_), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans(3)
END FUNCTION Angles
```
