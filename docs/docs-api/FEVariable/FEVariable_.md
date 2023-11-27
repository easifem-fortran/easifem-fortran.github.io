# Structure

## Constructor methods

### NodalVariable

!!! note "NodalVariable"
This method creates a nodal variable. The common interface is as follows.

    ```fortran
    obj=NodalVariable(val,rank,vartype)
    ```

💎 `rank` can be

    - `TypeFEVariableScalar`
    - `TypeFEVariableVector`
    - `TypeFEVariableMatrix`

🚀 `vartype` can be

- `TypeFEVariableConstant`
- `TypeFEVariableSpace`
- `TypeFEVariableTime`
- `TypeFEVariableSpaceTime`

You can learn more about this method from [[FEVariable_test_1]].

### QuadratureVariable

!!! note "QuadratureVariable"
This method creates a quadrature variable. The common interface is as follows.

    ```fortran
    obj=QuadratureVariable(val,rank,vartype)
    ```

💎 `rank` can be

    - `TypeFEVariableScalar`
    - `TypeFEVariableVector`
    - `TypeFEVariableMatrix`

🚀 `vartype` can be

- `TypeFEVariableConstant`
- `TypeFEVariableSpace`
- `TypeFEVariableTime`
- `TypeFEVariableSpaceTime`

You can learn more about this method from

- [[FEVariable_test_1]].
- [[FEVariable_test_2]].
- [[FEVariable_test_3]].

### Deallocate

!!! note "Deallocate"
This method deallocates the data stored inside the [[FEVariable_]] instance.

## Get methods

### SIZE

### SHAPE

### Get

## Addition (+)

!!! notes "+"
Add two instance of [[FEVariable_]].

!!! note ""
A quadrature variable can be added to only a quadrature variable, unless one of the variable is constant.

!!! note ""
A nodal variable can be added to only a nodal variable, unless one of the variable is a constant.

!!! note ""
The rank of `obj1` and `obj2` should be the same, if none of the obj1 and obj2 are scalars.

!!! note ""
A Scalar FEVariable can be added to a Vector and Matrix FEVariable.

| Defined on    | obj1      | obj2      | result    |
| ------------- | --------- | --------- | --------- |
| NodalVariable | constant  | constant  | constant  |
|               | constant  | space     | space     |
|               | constant  | time      | time      |
|               | constant  | spacetime | spacetime |
|               | space     | constant  | space     |
|               | space     | space     | space     |
|               | time      | constant  | time      |
|               | time      | time      | time      |
|               | spacetime | constant  | spacetime |
|               | spacetime | spacetime | spacetime |
|               |           |           |           |

You can learn more about this method from the following pages

- [[FEVariable_test_11a]] Scalar, Nodal Variable
- [[FEVariable_test_11b]] Scalar, Nodal Variable
- [[FEVariable_test_11c]] Scalar, Quadrature Variable
- [[FEVariable_test_11d]] Scalar, Quadrature Variable

- [[FEVariable_test_12a]] Vector, Nodal Variable
- [[FEVariable_test_12b]] Vector, Nodal Variable
- [[FEVariable_test_12c]] Vector, Quadrature Variable
- [[FEVariable_test_12d]] Vector, Quadrature Variable

- [[FEVariable_test_13a]] Matrix, Nodal Variable
- [[FEVariable_test_13b]] Matrix, Nodal Variable
- [[FEVariable_test_13c]] Matrix, Quadrature Variable
- [[FEVariable_test_13d]] Matrix, Quadrature Variable

## Subtraction (-)

!!! notes "+"
Substract two instance of [[FEVariable_]].

!!! warning ""
A quadrature variable can be subtract only from another quadrature variable

!!! warning ""
A nodal variable can be subtracted from another nodal variable

!!! warning ""
The rank of `obj1` and `obj2` should be the same

| Defined on    | obj1      | obj2      | result    |
| ------------- | --------- | --------- | --------- |
| NodalVariable | constant  | constant  | constant  |
|               | constant  | scalar    | scalar    |
|               | constant  | time      | time      |
|               | constant  | spacetime | spacetime |
|               | scalar    | constant  | scalar    |
|               | scalar    | scalar    | scalar    |
|               | time      | constant  | time      |
|               | time      | time      | time      |
|               | spacetime | constant  | spacetime |
|               | spacetime | spacetime | spacetime |
|               |           |           |           |

You can learn more about this method from the following pages

- [[FEVariable_test_21a]] Scalar, Nodal
- [[FEVariable_test_21b]] Scalar, Nodal
- [[FEVariable_test_21c]] Scalar, Quadrature
- [[FEVariable_test_21d]] Scalar, Quadrature

- [[FEVariable_test_22a]] Vector, Nodal
- [[FEVariable_test_22b]] Vector, Nodal
- [[FEVariable_test_22c]] Vector, Quadrature
- [[FEVariable_test_22d]] Vector, Quadrature

- [[FEVariable_test_23a]] Matrix, Nodal
- [[FEVariable_test_23b]] Matrix, Nodal
- [[FEVariable_test_23c]] Matrix, Quadrature
- [[FEVariable_test_23d]] Matrix, Quadrature

## Multiplication (\*)

!!! notes "+"
Multiply two instance of [[FEVariable_]].

!!! warning ""
A quadrature variable can be multiply with another quadrature variable

!!! warning ""
A nodal variable can be multiplies with another nodal variable

!!! warning ""
The rank of `obj1` and `obj2` should be the same

| Defined on    | obj1      | obj2      | result    |
| ------------- | --------- | --------- | --------- |
| NodalVariable | constant  | constant  | constant  |
|               | constant  | scalar    | scalar    |
|               | constant  | time      | time      |
|               | constant  | spacetime | spacetime |
|               | scalar    | constant  | scalar    |
|               | scalar    | scalar    | scalar    |
|               | time      | constant  | time      |
|               | time      | time      | time      |
|               | spacetime | constant  | spacetime |
|               | spacetime | spacetime | spacetime |
|               |           |           |           |

You can learn more about this method from the following pages

- [[FEVariable_test_31a]] Scalar, Nodal
- [[FEVariable_test_31b]] Scalar, Nodal
- [[FEVariable_test_31c]] Scalar, Quadrature
- [[FEVariable_test_31d]] Scalar, Quadrature

- [[FEVariable_test_32a]] Vector, Nodal
- [[FEVariable_test_32b]] Vector, Nodal
- [[FEVariable_test_32c]] Vector, Quadrature
- [[FEVariable_test_32d]] Vector, Quadrature

- [[FEVariable_test_33a]] Matrix, Nodal
- [[FEVariable_test_33b]] Matrix, Nodal
- [[FEVariable_test_33c]] Matrix, Quadrature
- [[FEVariable_test_33d]] Matrix, Quadrature

## Division

!!! notes "/"
Division two instance of [[FEVariable_]].

!!! warning ""
A quadrature variable can be divided by another quadrature variable

!!! warning ""
A nodal variable can be divided by another nodal variable

!!! warning ""
The rank of `obj1` and `obj2` should be the same

| Defined on    | obj1      | obj2      | result    |
| ------------- | --------- | --------- | --------- |
| NodalVariable | constant  | constant  | constant  |
|               | constant  | scalar    | scalar    |
|               | constant  | time      | time      |
|               | constant  | spacetime | spacetime |
|               | scalar    | constant  | scalar    |
|               | scalar    | scalar    | scalar    |
|               | time      | constant  | time      |
|               | time      | time      | time      |
|               | spacetime | constant  | spacetime |
|               | spacetime | spacetime | spacetime |
|               |           |           |           |

You can learn more about this method from the following pages

- [[FEVariable_test_41a]] Scalar, Nodal
- [[FEVariable_test_41b]] Scalar, Nodal
- [[FEVariable_test_41c]] Scalar, Quadrature
- [[FEVariable_test_41d]] Scalar, Quadrature

- [[FEVariable_test_42a]] Vector, Nodal
- [[FEVariable_test_42b]] Vector, Nodal
- [[FEVariable_test_42c]] Vector, Quadrature
- [[FEVariable_test_42d]] Vector, Quadrature

- [[FEVariable_test_43a]] Matrix, Nodal
- [[FEVariable_test_43b]] Matrix, Nodal
- [[FEVariable_test_43c]] Matrix, Quadrature
- [[FEVariable_test_43d]] Matrix, Quadrature

## POWER

!!! note ""
ans = obj \*\* n, where n is an integer.

You can learn more about this method from the following pages

- [[FEVariable_test_51]] Scalar, Nodal
- [[FEVariable_test_52]] Scalar, Quadrature

- [[FEVariable_test_53]] Vector, Nodal
- [[FEVariable_test_54]] Vector, Quadrature

- [[FEVariable_test_55]] Matrix, Nodal
- [[FEVariable_test_56]] Matrix, Quadrature

## ABS

!!! note ""
absolute value of elements of [[FEVariable_]].

You can learn more about this method from the following pages

- [[FEVariable_test_61]] Scalar, Nodal
- [[FEVariable_test_62]] Scalar, Quadrature

- [[FEVariable_test_63]] Vector, Nodal
- [[FEVariable_test_64]] Vector, Quadrature

- [[FEVariable_test_65]] Matrix, Nodal
- [[FEVariable_test_66]] Matrix, Quadrature

## DOT_PRODUCT

## NORM2

## Set methods

## IO methods
