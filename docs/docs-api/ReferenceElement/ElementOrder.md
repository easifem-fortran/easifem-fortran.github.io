# ElementOrder

Returns the order of an element

```fortran
  MODULE PURE FUNCTION Element_Order(ElemType) RESULT(Ans)
    INTEGER(I4B) :: Ans
    INTEGER(I4B), INTENT(IN) :: ElemType
  END FUNCTION Element_Order
```

```fortran
  MODULE PURE FUNCTION Element_Order_RefElem(RefElem) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: RefElem
    INTEGER(I4B) :: Ans
  END FUNCTION Element_Order_RefElem
```

:::note

`OPERATOR(.order.)` is an alias of ElementOrder.
:::
