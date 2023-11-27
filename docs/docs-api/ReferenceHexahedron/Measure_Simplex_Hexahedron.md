# 𑗕Measure_Simplex_Hexahedron

This function returns the measure of linear hexahexron.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION Measure_Simplex_Hexahedron(refelem, xij) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    REAL(DFP), INTENT(IN) :: xij(:, :)
    REAL(DFP) :: Ans
  END FUNCTION Measure_Simplex_Hexahedron
END INTERFACE
```
