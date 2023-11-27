# ContainsPoint

```fortran
MODULE FUNCTION ContainsPoint( refelem, xij, x ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:), x(:)
  LOGICAL(LGT) :: Ans
END FUNCTION ContainsPoint
```
