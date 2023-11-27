# ElementTopology

This routine returns the topology of the reference element

- Line
- Triangle
- Quadrangle
- Tetrahedron

```fortran
  MODULE PURE FUNCTION refelem_ElementTopology1(ElemType) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: ElemType
    INTEGER(I4B) :: Ans
  END FUNCTION refelem_ElementTopology1
```

```fortran
  MODULE PURE FUNCTION refelem_ElementTopology2(obj) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: Ans
  END FUNCTION refelem_ElementTopology2
```

:::note
OPERATOR(.topology.) is an alias to ElementTopology.
:::
