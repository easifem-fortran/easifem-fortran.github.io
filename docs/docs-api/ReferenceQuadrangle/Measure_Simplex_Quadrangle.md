# Measure_Simplex_Quadrangle

This function returns the area of linear quadrangle.

## Interface

```fortran
MODULE PURE FUNCTION Measure_Simplex_Quadrangle( RefElem, XiJ ) RESULT( Ans )
  CLASS( ReferenceQuadrangle_ ), INTENT( IN ) :: RefElem
  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )
  REAL( DFP ) :: Ans
END FUNCTION Measure_Simplex_Quadrangle
```
