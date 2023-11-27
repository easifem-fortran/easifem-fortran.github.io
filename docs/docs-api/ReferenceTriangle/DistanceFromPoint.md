# DistanceFromPoint

```fortran
MODULE FUNCTION DistanceFromPoint( refelem, xij, x ) &
  & RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:), x(:)
  REAL( DFP ) :: Ans
END FUNCTION DistanceFromPoint
```
