# JacobianHexahedron

Returns the Jacobian of mapping between two Hexahedrons.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobianHexahedron(from, to, xij) RESULT(ans)
    CHARACTER(*), INTENT(IN) :: from
    !! BIUNIT
    !! UNIT
    !! HEXAHEDRON
    CHARACTER(*), INTENT(IN) :: to
    !! BIUNIT
    !! UNIT
    !! HEXAHEDRON
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of general HEXAHEDRON
    !! number of rows=nsd
    !! number of cols=4
    !! xij is needed when `from` or `to` is HEXAHEDRON
    !! both `from` and to `cannot` be HEXAHEDRON
    REAL(DFP) :: ans
  END FUNCTION JacobianHexahedron
END INTERFACE
```

:::note `from`
:::

- `BIUNIT` biunit Hexahedron
- `UNIT` unit Hexahedron
- `HEXAHEDRON`, a general Hexahedron

:::note `to`
:::

- `BIUNIT` biunit Hexahedron
- `UNIT` unit Hexahedron
- `HEXAHEDRON`, a general Hexahedron

:::note
If any of `from` or `to` is set to `HEXAHEDRON`, then `xij` must be provided, which represents the nodal points of a linear HEXAHEDRON. The number of rows in xij is `3` and the number of columns are 8.
:::

:::info
Both `from` and `to` cannot be set to `HEXAHEDRON`.
