# MeasureSimplex

Returns the measures of a simplex.

```fortran
  MODULE PURE FUNCTION Measure_Simplex(RefElem, XiJ) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: RefElem
    REAL(DFP), INTENT(IN) :: XiJ(:, :)
    REAL(DFP) :: Ans
  END FUNCTION Measure_Simplex
```
