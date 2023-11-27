# Incircle

```fortran
MODULE FUNCTION Incircle( refelem, xij ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans(4)
END FUNCTION Incircle
```
