# Quadrangle_Quality

This function returns the quality of quadrangle element.

## Interface

```fortran
MODULE FUNCTION Quadrangle_Quality( refelem, xij, measure ) RESULT( Ans )
  CLASS( ReferenceQuadrangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ), INTENT( IN ) :: measure
  REAL( DFP ) :: Ans
END FUNCTION Quadrangle_Quality
```
