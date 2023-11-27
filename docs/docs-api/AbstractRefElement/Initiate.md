# Initiate

Initiate an instance of reference element

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE refelem_Initiate(obj, nsd, baseContinuity, baseInterpol)
    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nsd
      !! Spatial dimension of element
    CHARACTER(*), INTENT(IN) :: baseContinuity
      !! Continuity or Conformity of basis function.
      !! H1 * Default
      !! HDiv
      !! HCurl
      !! DG
    CHARACTER(*), INTENT(IN) :: baseInterpol
      !! Basis function family used for interpolation
      !! LagrangeInterpolation, LagrangePolynomial
      !! SerendipityInterpolation, SerendipityPolynomial
      !! HierarchyInterpolation, HierarchyPolynomial
      !! OrthogonalInterpolation, OrthogonalPolynomial
      !! HermitInterpolation, HermitPolynomial
  END SUBROUTINE refelem_Initiate
END INTERFACE
```
