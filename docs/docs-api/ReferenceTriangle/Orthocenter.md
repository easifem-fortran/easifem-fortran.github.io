# Orthocenter

```fortran
MODULE FUNCTION Orthocenter( refelem, xij ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans( 3 )
END FUNCTION Orthocenter
```
