# Line_Quality

```fortran
MODULE FUNCTION Line_Quality( refelem, xij, measure ) RESULT( Ans )
  CLASS( ReferenceLine_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ), INTENT( IN ) :: measure
  REAL( DFP ) :: Ans
END FUNCTION Line_Quality
```
