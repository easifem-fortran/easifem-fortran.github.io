# CircumCircle

Returns circum circle of triangle

```fortran
MODULE FUNCTION Circumcircle( refelem, xij ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:)
  REAL( DFP ) :: Ans(4)
    !! Ans(1) = radius and Ans(2:4) center
END FUNCTION Circumcircle
```
