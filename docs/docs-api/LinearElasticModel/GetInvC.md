# GetInvC

Get $C^{-1}$ matrix.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetInvC(obj, invC)
    CLASS(LinearElasticModel_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: invC(:, :)
  END SUBROUTINE GetInvC
END INTERFACE
```

:::info
In the case of plane-stress or plane-strain, this routine only access 3-by-3 block of $invC$.
:::
