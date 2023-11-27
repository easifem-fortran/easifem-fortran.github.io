# JacobianTetrahedron

Returns the Jacobian of mapping between two Tetrahedrons.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobianTetrahedron(from, to, xij) RESULT(ans)
    CHARACTER(*), INTENT(IN) :: from
    !! BIUNIT
    !! UNIT
    !! TETRAHEDRON
    CHARACTER(*), INTENT(IN) :: to
    !! BIUNIT
    !! UNIT
    !! TETRAHEDRON
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of general TETRAHEDRON
    !! number of rows=nsd
    !! number of cols=4
    !! xij is needed when `from` or `to` is TETRAHEDRON
    !! both `from` and to `cannot` be TETRAHEDRON
    REAL(DFP) :: ans
  END FUNCTION JacobianTetrahedron
END INTERFACE
```

:::note `from`
:::

- `BIUNIT` biunit Tetrahedron
- `UNIT` unit Tetrahedron
- `TETRAHEDRON` General linear Tetrahedron

:::note `to`
:::

- `BIUNIT` biunit Tetrahedron
- `UNIT` unit Tetrahedron
- `TETRAHEDRON` General linear Tetrahedron

:::note
If any of `from` or `to` is set to `TETRAHEDRON`, then `xij` must be provided, which represents the nodal points of a linear TETRAHEDRON. The number of rows in xij is `3` and the number of columns are 4.
:::

:::info
Both `from` and `to` cannot be set to `TETRAHEDRON`.
