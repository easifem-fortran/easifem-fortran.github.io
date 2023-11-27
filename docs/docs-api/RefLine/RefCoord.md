# RefCoord

This method returns the coordinates of reference element. This method is for internal use only.

:::note
The nodal coordinates of reference element depends on the conformity of basis functions, that is, $H1$, $HDiv$, $HCurl$, and type of basis function, that is, Lagrange polynomial, Hierarchical polynomial, and Orthogonal polynomial.
:::

## Interface

```fortran
INTERFACE
  FUNCTION RefCoord(obj, baseInterpol, baseContinuity) RESULT(ans)
    IMPORT AbstractRefElement_, I4B, DFP
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: baseInterpol
    CHARACTER(*), INTENT(IN) :: baseContinuity
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION RefCoord
END INTERFACE
```

