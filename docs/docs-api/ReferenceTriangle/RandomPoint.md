# RandomPoint

```fortran
MODULE FUNCTION RandomPoint( refelem, xij, n, seed ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ) :: n, seed
  REAL( DFP ) :: Ans(3, n)
END FUNCTION RandomPoint
```
