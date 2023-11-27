# RefCoord

This method returns the coordinates of reference element. This method is for internal use only.

:::note
This method should be implemented by child classes. This is because, the reference coordinates depend upon the element type, functional space of finite elements $H1, HDiv, HCurl$, and type of basis function, that is, Lagrange polynomial, Hierarchical polynomial, and Orthogonal polynomial.
:::

## Interface

```fortran
ABSTRACT INTERFACE
  FUNCTION refelem_RefCoord(obj, baseInterpol, baseContinuity) RESULT(ans)
    IMPORT AbstractRefElement_, I4B, DFP
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: baseInterpol
    CHARACTER(*), INTENT(IN) :: baseContinuity
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION refelem_RefCoord
END INTERFACE
```

