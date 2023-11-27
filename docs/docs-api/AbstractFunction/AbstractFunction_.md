# AbstractFunction

To handle analytical functions following abstract functions have been defined in EASIFEM.

- `AbstractFunction_` all functions are children of this.
- `AbstractFunction1D_` abstract function in one variable
- `AbstractFunction2D_` abstract function of two variables
- `AbstractFunction3D_` abstract function of three variables
- `AbstractFunctionND_` abstract function of N variables

## Structure

```fortran
TYPE, ABSTRACT :: AbstractFunction_
CONTAINS
  PROCEDURE, PUBLIC, PASS(Obj) :: Deallocate => func_Deallocate
END TYPE AbstractFunction_
```

import Tabs from '@theme/Tabs';

<Tabs defaultValue="0" values={[{label: 'AbstractFunction', value: '0'},
{label: 'AbstractFunction1D', value: '1'},
{label: 'AbstractFunction2D', value: '2'},
{label: 'AbstractFunction3D', value: '3'},
{label: 'AbstractFunctionND', value: '4'}]}>

import TabItem from '@theme/TabItem';

<TabItem value="0">

```fortran
TYPE, ABSTRACT :: AbstractFunction_
CONTAINS
  PROCEDURE, PUBLIC, PASS(Obj) :: Deallocate => func_Deallocate
END TYPE AbstractFunction_
```

</TabItem>

<TabItem value="1">

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunction_) :: AbstractFunction1D_
  TYPE(String) :: varname
END TYPE AbstractFunction1D_
```

</TabItem>

<TabItem value="2">

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunction_) :: AbstractFunction2D_
  TYPE(String) :: varname(2)
END TYPE AbstractFunction2D_
```

</TabItem>

<TabItem value="3">

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunction_) :: AbstractFunction3D_
  TYPE(String) :: varname(3)
END TYPE AbstractFunction3D_
```

</TabItem>

<TabItem value="4">

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunction_) :: AbstractFunctionND_
  TYPE(String), ALLOCATABLE :: varname(:)
END TYPE AbstractFunctionND_
```

</TabItem>

</Tabs>

:::note

Following classes are children of `Abstract1D_`

- [Polynomial1D\_](../Polynomial1D/Polynomial1D_.md)

:::

## Methods

AbstractFunctions are equipied with following methdods:

- `Deallocate()` To deallocate/ destroy the instance/variable.
- `Eval` Evaluate the function
- `EvalGradient` Evaluate the first gradient.
- `GetVarName` return the name of agrumnets of the function.

### Eval

`Eval` method evaluates the function. For `AbstractFunction1D,2D,3D` it is an ELEMENTAL function. In case of `AbstractFunctionND` it is only PURE.

<Tabs defaultValue="1" values={[{label: 'AbstractFunction1D', value: '1'},
{label: 'AbstractFunction2D', value: '2'},
{label: 'AbstractFunction3D', value: '3'},
{label: 'AbstractFunctionND', value: '4'}]}>

<TabItem value="1">

`Eval` method for `AbstractFunction1D_`

```fortran
ABSTRACT INTERFACE
  RECURSIVE PURE FUNCTION Eval(obj, x) RESULT(ans)
    IMPORT AbstractFunction1D_, DFP
    CLASS(AbstractFunction1D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION Eval
END INTERFACE
```

</TabItem>

<TabItem value="2">

`Eval` method for `AbstractFunction2D_`

```fortran
ABSTRACT INTERFACE
  ELEMENTAL FUNCTION Eval(obj, x, y) RESULT(ans)
    IMPORT AbstractFunction2D_, DFP
    CLASS(AbstractFunction2D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP), INTENT(IN) :: y
    REAL(DFP) :: ans
  END FUNCTION Eval
END INTERFACE
```

</TabItem>

<TabItem value="3">

`Eval` method for `AbstractFunction3D_`

```fortran
ABSTRACT INTERFACE
  ELEMENTAL FUNCTION Eval(obj, x, y, z) RESULT(ans)
    IMPORT AbstractFunction3D_, DFP
    CLASS(AbstractFunction3D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP), INTENT(IN) :: y
    REAL(DFP), INTENT(IN) :: z
    REAL(DFP) :: ans
  END FUNCTION Eval
END INTERFACE
```

</TabItem>

<TabItem value="4">

`Eval` method for `AbstractFunctionND_`

```fortran
ABSTRACT INTERFACE
  PURE FUNCTION Eval(obj, x) RESULT(ans)
    IMPORT AbstractFunctionND_, DFP
    CLASS(AbstractFunctionND_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans
  END FUNCTION Eval
END INTERFACE
```

</TabItem>

</Tabs>

### EvalGradient

`EvalGradient` computes the first derivative of the function at given argument.

<Tabs defaultValue="1" values={[ {label: 'AbstractFunction1D', value: '1'},
{label: 'AbstractFunction2D', value: '2'},
{label: 'AbstractFunction3D', value: '3'},
{label: 'AbstractFunctionND', value: '4'}]}>

<TabItem value="1">

```fortran
ABSTRACT INTERFACE
  RECURSIVE PURE FUNCTION EvalGradient(obj, x) RESULT(ans)
    IMPORT AbstractFunction1D_, DFP
    CLASS(AbstractFunction1D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION EvalGradient
END INTERFACE
```

:::info
EvalGradient method for `AbstractFunction1D_`
:::

</TabItem>

<TabItem value="2">

```fortran
ABSTRACT INTERFACE
  ELEMENTAL FUNCTION EvalGradient(obj, x, y, dim) RESULT(ans)
    IMPORT AbstractFunction2D_, DFP, I4B
    CLASS(AbstractFunction2D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP), INTENT(IN) :: y
    INTEGER(I4B), INTENT(IN) :: dim
    REAL(DFP) :: ans
  END FUNCTION EvalGradient
END INTERFACE
```

:::info
Here, `dim` denotes the argument with respect to which the derivative is computed.
:::

</TabItem>

<TabItem value="3">

```fortran
ABSTRACT INTERFACE
  ELEMENTAL FUNCTION EvalGradient(obj, x, y, z, dim)  &
    & RESULT(ans)
    IMPORT AbstractFunction3D_, DFP, I4B
    CLASS(AbstractFunction3D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP), INTENT(IN) :: y
    REAL(DFP), INTENT(IN) :: z
    INTEGER(I4B), INTENT(IN) :: dim
    REAL(DFP) :: ans
  END FUNCTION EvalGradient
END INTERFACE
```

:::info
Here, `dim` denotes the argument with respect to which the derivative is computed.
:::

</TabItem>

<TabItem value="4">

```fortran
ABSTRACT INTERFACE
  PURE FUNCTION EvalGradient(obj, x, dim) RESULT(ans)
    IMPORT AbstractFunctionND_, DFP, I4B
    CLASS(AbstractFunctionND_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x(:)
    INTEGER(I4B), INTENT(IN) :: dim
    REAL(DFP) :: ans
  END FUNCTION EvalGradient
END INTERFACE
```

:::info
Here, `dim` denotes the argument with respect to which the derivative is computed.
:::

</TabItem>

</Tabs>

### GetVarName

`GetVarName` returns the variable name as an instance of `String`.
