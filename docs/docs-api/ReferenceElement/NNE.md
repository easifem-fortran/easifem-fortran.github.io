# NNE

Returns number of nodes in element.

:::note
This method defines `Operator( .NNE. )`.
:::

```fortran
  MODULE PURE FUNCTION NNE(obj) RESULT(Ans)
    CLASS(ReferenceTopology_), INTENT(IN) :: obj
    INTEGER(I4B) :: Ans
  END FUNCTION NNE
```

```fortran
  MODULE PURE FUNCTION NNE(obj) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: Ans
  END FUNCTION NNE
```
