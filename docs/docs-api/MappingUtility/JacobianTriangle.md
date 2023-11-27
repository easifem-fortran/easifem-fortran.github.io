# JacobianTriangle

Returns the Jacobian of mapping between two Triangles.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobianTriangle(from, to, xij) RESULT(ans)
    CHARACTER(*), INTENT(IN) :: from
    !! BIUNIT
    !! UNIT
    !! TRIANGLE
    CHARACTER(*), INTENT(IN) :: to
    !! BIUNIT
    !! UNIT
    !! TRIANGLE
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of general TRIANGLE
    !! number of rows=nsd
    !! number of cols=3
    !! xij is needed when `from` or `to` is TRIANGLE
    !! both `from` and to `cannot` be TRIANGLE
    REAL(DFP) :: ans
  END FUNCTION JacobianTriangle
END INTERFACE
```

:::note `from`
:::

- `BIUNIT` biunit Triangle
- `UNIT` unit Triangle
- `TRIANGLE` general linear Triangle

:::note `to`
:::

- `BIUNIT` biunit Triangle
- `UNIT` unit Triangle
- `TRIANGLE` general linear Triangle

:::note
If any of `from` or `to` is set to `TRIANGLE`, then `xij` must be provided, which represents the nodal points of a linear TRIANGLE. The number of rows in xij is `nsd` and the number of columns are 3.
:::

:::info
Both `from` and `to` cannot be set to `TRIANGLE`.
