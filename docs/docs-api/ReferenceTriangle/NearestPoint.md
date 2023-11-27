# NearestPoint

```fortran
MODULE SUBROUTINE NearestPoint( refelem, xij, x, xn, dist )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:), x(:)
  REAL( DFP ) , INTENT (INOUT ) :: xn(:)
  REAL( DFP ), INTENT (OUT) :: dist
END SUBROUTINE NearestPoint
```
