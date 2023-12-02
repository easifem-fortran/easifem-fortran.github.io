# GetDataSize

Get data size.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetDataSize(obj) RESULT(ans)
    CLASS(LinearElasticModel_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetDataSize
END INTERFACE
```

| Elasticity type  | Data size |
| ---------------- | --------- |
| `Isotropic`      | 2         |
| `Anisotropic`    | 21        |
| `Orthotropic`    | 9         |
| `TransIsotropic` | 5         |
