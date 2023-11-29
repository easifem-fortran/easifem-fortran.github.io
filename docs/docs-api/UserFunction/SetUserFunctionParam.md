# SetUserFunctionParam

Set the parameters for initiating an instance of `UserFunction_`.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetUserFunctionParam(param, name, returnType, argType,  &
    & numArgs, numReturns, luaScript, luaFunctionName, returnShape)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! parameter to be constructed
    CHARACTER(*), INTENT(IN) :: name
    !! name of the function
    INTEGER(I4B), INTENT(IN) :: returnType
    !! Scalar, Vector, Matrix
    INTEGER(I4B), INTENT(IN) :: argType
    !! Constant, Space, Time, SpaceTime
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: numArgs
    !! number of argument
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: numReturns
    !! number of returns
    CHARACTER(*), OPTIONAL, INTENT(IN) :: luaScript
    !! lua script
    CHARACTER(*), OPTIONAL, INTENT(IN) :: luaFunctionName
    !! lua function name
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: returnShape(2)
    !! Shape of return type
    !! Only used when returnType is Matrix
  END SUBROUTINE SetUserFunctionParam
END INTERFACE
```

:::info `name`
Name of the function.
:::

:::info `returnType` and `numReturns`
Type of return and number of returns.

The `returnType` can take following values:

- `Scalar`, In this case `numReturns` should be 1
- `Vector`, In this case `numReturns` should be 3
- `Matrix`, In this case `numReturns` should be 9

:::

:::info `argType` and `numArgs`
Type of return and number of arguments.

The `argType` can take following values:

- `Constant`, In this case `numArgs` should be 0
- `Space`, In this case `numArgs` should be 3
- `Time`, In this case `numArgs` should be 1
- `SpaceTime`, In this case `numArgs` should be 4

:::
