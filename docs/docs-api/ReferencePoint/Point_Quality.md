# Point_Quality

```fortran
MODULE FUNCTION Point_Quality( refelem, xij, measure ) RESULT( Ans )
  CLASS( ReferencePoint_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ), INTENT( IN ) :: measure
  REAL( DFP ) :: Ans
END FUNCTION Point_Quality
```
