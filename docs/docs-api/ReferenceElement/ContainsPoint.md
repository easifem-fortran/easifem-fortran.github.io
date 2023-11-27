# ContainsPoint

Returns true if the given point is inside the element

```fortran
  MODULE FUNCTION contains_point(refelem, xij, x) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    REAL(DFP), INTENT(IN) :: xij(:, :)
    REAL(DFP), INTENT(IN) :: x(:)
    LOGICAL(LGT) :: Ans
  END FUNCTION contains_point
```
