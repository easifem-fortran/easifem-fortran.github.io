# Set

Set the value of boundary condition.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface

```fortran
INTERFACE Set
  MODULE SUBROUTINE bc_Set(obj, constantNodalValue, spaceNodalValue, &
    & timeNodalValue, spaceTimeNodalValue, userFunction)
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    REAL(DFP), OPTIONAL, INTENT(IN) :: constantNodalValue
    REAL(DFP), OPTIONAL, INTENT(IN) :: spaceNodalValue(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: timeNodalValue(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: spaceTimeNodalValue(:, :)
    TYPE(UserFunction_), POINTER, OPTIONAL, INTENT(IN) :: userFunction
  END SUBROUTINE bc_Set
END INTERFACE Set
```

:::info `constantNodalValue`
When the `AbstractBC_` is configured for `nodalValueType=Constant`, we must provide `constantNodalValue`.
:::

:::note `spaceNodalValue`
When the `AbstractBC_` is configured for `nodalValueType=Space`, we must provide `spaceNodalValue`.
:::

:::note `timeNodalValue`
When the `AbstractBC_` is configured for `nodalValueType=Time`, we must provide `timeNodalValue`.
:::

:::note `spaceTimeNodalValue`
When the `AbstractBC_` is configured for `nodalValueType=SpaceTime`, we must provide `spaceTimeNodalValue`.
:::

:::note `userFunction`
When the `AbstractBC_` is configured for `isUserFunction=True`, we must provide `userFunction`.
:::
