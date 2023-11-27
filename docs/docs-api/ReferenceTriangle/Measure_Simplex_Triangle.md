# Measure_Simplex_Triangle

This function returns the measure of linear triangle.

## Interface

```fortran
MODULE PURE FUNCTION Measure_Simplex_Triangle( RefElem, XiJ ) RESULT( Ans )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: RefElem
  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )
  REAL( DFP ) :: Ans
END FUNCTION Measure_Simplex_Triangle
```
