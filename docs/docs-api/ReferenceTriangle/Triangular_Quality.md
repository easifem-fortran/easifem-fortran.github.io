# Triangle_Quality

```fortran
MODULE FUNCTION Triangle_Quality( refelem, xij, measure ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ), INTENT( IN ) :: measure
  REAL( DFP ) :: Ans
END FUNCTION Triangle_Quality
```
