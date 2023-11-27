# Inradius

```fortran
MODULE FUNCTION Inradius( refelem, xij ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans
END FUNCTION Inradius
```
