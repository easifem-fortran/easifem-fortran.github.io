# JacobianLine

Returns the Jacobian of mapping between two lines.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobianLine(from, to, xij) RESULT(ans)
    CHARACTER(*), INTENT(IN) :: from
    !! BIUNIT
    !! UNIT
    !! LINE
    CHARACTER(*), INTENT(IN) :: to
    !! BIUNIT
    !! UNIT
    !! LINE
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of general line (segment)
    !! number of rows=1
    !! number of cols=2
    !! xij is needed when from or to are LINE
    !! both from and to cannot be LINE
    REAL(DFP) :: ans
  END FUNCTION JacobianLine
END INTERFACE
```

:::note `from`
:::

- `BIUNIT` biunit line
- `UNIT` unit line
- `LINE` general LINE

:::note `to`
:::

- `BIUNIT` biunit line
- `UNIT` unit line
- `LINE` general LINE

:::note
If any of `from` or `to` is set to `LINE`, then `xij` must be provided, which represents the end points of a line segment.
:::

:::info
Both `from` and `to` cannot be set to `LINE`.
:::
