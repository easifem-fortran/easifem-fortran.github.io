---
sidebar_position: 3
---

# SetAbstractBCParam

Set the parameter for initiating the `AbstractBC_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE SetAbstractBCParam(param, prefix, &
    & name, idof, nodalValueType, isNormal, isTangent, &
    & useExternal, isUserFunction)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: prefix
    CHARACTER(*), OPTIONAL, INTENT(IN) :: name
    !! name of boundary condition
    !! default is AbstractBC
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: idof
    !! degree of freedom number
    !! default is 0
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nodalValueType
    !! Space, Time, SpaceTime, Constant
    !! default is -1
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isUserFunction
    !! set true when userfucntion is used; default is false
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isNormal
    !! default is false
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTangent
    !! default is false
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: useExternal
    !! default is false
  END SUBROUTINE SetAbstractBCParam
END INTERFACE
```

:::info `prefix`
You can get `prefix` by calling [GetPrefix](./GetPrefix) method.
:::

:::note `idof`
Degree of freedom number.
:::

:::info `nodalValueType`
Type of boundary condition. It can take following values:

- `Constant` => It means boundary condition is constant in space and time
- `Space` => It means boundary condition changes in space direction, but constant in time direction
- `Time` => It means boundary condition changes in time direction, but constant in space direction
- `SpaceTime` => It means boundary condition changes in both space and time directions

:::

:::note `isUserFunction`
If the boundary condition is specified through [UserFunction](../UserFunction), then it `isUserFunction` should be set to `.TRUE.`.
:::

:::info `isNormal`
In vector variable problem when the normal component is given, then you can set `isNormal` to `.TRUE.`
:::

:::note `isTangent`
In vector variable problem when the tangent component is given, then you can set `isTangent` to `.TRUE.`
:::

:::info `useExternal`
When the boundary condition is stored outside the `AbstractBC_`.
:::

</TabItem>

<TabItem value="example" label= "܀ See example">

import EXAMPLE13 from "./_Initiate_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
