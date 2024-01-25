# GetNNZ

This function returns the number of non zeros.

Calling example

```fortran
ans = GetNNZ(obj)
ans = GetNNZ(obj, from="U"|"L"|"D"|"A" )
ans(1:3) = GetNNZ(obj, from=[""] )
```

This routine has three interfaces as shown below.

## Interface

<Tabs>

<TabItem value="interface" label="܀ GetNNZ( obj )" default>

```fortran
MODULE PURE FUNCTION GetNNZ( obj ) RESULT( Ans )
  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj
  INTEGER( I4B ) :: Ans
END FUNCTION GetNNZ
```

In this case we get all the number of non-zeros in the sparse matrix.

</TabItem>

<TabItem value="interface2" label="܀ GetNNZ( obj, from )">

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNNZ(obj, from) RESULT(Ans)
    TYPE(CSRSparsity_), INTENT(IN) :: obj
    CHARACTER(1), INTENT(IN) :: from
    INTEGER(I4B) :: Ans
  END FUNCTION GetNNZ
END INTERFACE
```

In this case we can get number of non-zeros in upper triangular, lower-triangular, diagonal part of the sparse matrix.

- "U" nnz in upper triangular part, j > i.
- "L" nnz in lower triangular part, i > j.
- "D" nnz in diagonal part, i=j.
- "A" nnz in whole matrix, L+U+D.

</TabItem>

<TabItem value="interface3" label="܀ GetNNZ( obj, from )">

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNNZ(obj, from) RESULT(Ans)
    TYPE(CSRSparsity_), INTENT(IN) :: obj
    CHARACTER(1), INTENT(IN) :: from(1)
    INTEGER(I4B) :: Ans(3)
  END FUNCTION GetNNZ
END INTERFACE
```

This function can return number of non-zeros in upper triangular, lower-triangular, diagonal part of the sparse matrix.

- ans(1) nnz in U.
- ans(2) nnz in L.
- ans(3) nnz in D.
- `from` is a dummy argument which is not referred (used by this routine), it is used here to create a unique interface.

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>
