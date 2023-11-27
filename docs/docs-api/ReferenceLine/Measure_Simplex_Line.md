# Measure_Simplex_Line

This function returns the measure of linear line element.

```fortran
MODULE PURE FUNCTION Measure_Simplex_Line( RefElem, XiJ ) RESULT( Ans )
  CLASS( ReferenceLine_ ), INTENT( IN ) :: RefElem
  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )
  REAL( DFP ) :: Ans
END FUNCTION Measure_Simplex_Line
```
