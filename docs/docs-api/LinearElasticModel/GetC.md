# GetC

Get $C$ matrix.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetC(obj, C)
    CLASS(LinearElasticModel_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: C(:, :)
  END SUBROUTINE GetC
END INTERFACE
```

:::info
In the case of plane-stress or plane-strain, this routine only access 3-by-3 block of $C$.
:::
