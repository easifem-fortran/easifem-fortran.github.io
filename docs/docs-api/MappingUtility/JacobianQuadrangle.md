# JacobianQuadrangle

Returns the Jacobian of mapping between two Quadrangles.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobianQuadrangle(from, to, xij) RESULT(ans)
    CHARACTER(*), INTENT(IN) :: from
    !! BIUNIT
    !! UNIT
    !! QUADRANGLE
    CHARACTER(*), INTENT(IN) :: to
    !! BIUNIT
    !! UNIT
    !! QUADRANGLE
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of general QUADRANGLE
    !! number of rows=nsd
    !! number of cols=4
    !! xij is needed when `from` or `to` is QUADRANGLE
    !! both `from` and to `cannot` be QUADRANGLE
    REAL(DFP) :: ans
  END FUNCTION JacobianQuadrangle
END INTERFACE
```

:::note `from`
:::

- `BIUNIT` biunit Quadrangle
- `UNIT` unit Quadrangle
- `QUADRANGLE` general Quadrangle

:::note `to`
:::

- `BIUNIT` biunit Quadrangle
- `UNIT` unit Quadrangle
- `QUADRANGLE` general Quadrangle

:::note
If any of `from` or `to` is set to `QUADRANGLE`, then `xij` must be provided, which represents the nodal points of a linear QUADRANGLE. The number of rows in xij is `nsd` and the number of columns are 4.
:::

:::info
Both `from` and `to` cannot be set to `QUADRANGLE`.
