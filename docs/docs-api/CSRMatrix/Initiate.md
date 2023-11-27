# Initiate

`Initiate()` method constructs an instance of `CSRMatrix_`.

At present, there are 6 interfaces to `initiate` method. You can see their interface and examples below.

Calling example:

```fortran
CALL Initiate(CSRMatrix_::obj, Integer::ncol, Integer::nrow &
  & [, DOF_::idof, DOF_::jdof, CHAR::MatrixProp] )
!!
CALL Initiate(CSRMatrix_::obj, CSRSparsity_::csr [, CHAR::matrixProp])
!!
CALL Initiate(CSRMatrix_:: obj, Real::A(:), Integer::IA(:), Integer::JA(:) &
  & [, CHAR::MatrixProp])
!!
CALL Initiate(CSRMatrix_::obj, CSRMatrix_::obj2)
!!
CALL Initiate(CSRMatrix_::obj, CSRMatrix_::obj2, &
  & Integer::i1, Integer::i2, Integer::j1, Integer::j2)
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Initiate(obj, ncol, nrow, idof, jdof, matrixProp)" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, ncol, nrow, idof, jdof, matrixProp)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: ncol
    !! number of columns in sparse matrix
    INTEGER(I4B), INTENT(IN) :: nrow
    !! number of rows in sparse matrix
    TYPE(DOF_), OPTIONAL, INTENT(IN) :: idof, jdof
    !! degree of freedom object; It contains information like
    !! storage format (NODES_FMT, DOF_FMT), and names of physical variable
    !! space-time component in each physical variables
    !! Total number of nodes used for these physical variables
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: MatrixProp
    !! Matrix is `SYM`, `UNSYM`
  END SUBROUTINE Initiate
END INTERFACE
```

If user has information about the number of rows `nrow`, number of columns `ncol` of sparse matrix, then the above interface can be used to initiate an instance of `CSRMatrix_`.

- `dof` and `matrixProp` are optional.
- `dof` is [DOF](../DOF/DOF_.md) object, and it is used to initiate `obj%csr`, [CSRSparsity](../CSRSparsity/CSRSparsity_.md) field.

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE52 from "./_Initiate_test_1.md";

<EXAMPLE52 />

</TabItem>

<TabItem value="example2" label="️܀ Example 2">

import EXAMPLE53 from "./_Initiate_test_2.md";

<EXAMPLE53 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>

</Tabs>

<Tabs>

<TabItem value="iface2" label="Initiate(obj, csr, matrixProp)">

We can also initiate the sparse matrix by providing an instance of [CSRSparsity](../CSRSparsity/CSRSparsity_.md).

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, csr, matrixProp)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRSparsity_), INTENT(IN) :: csr
    !! number of columns in sparse matrix
    !! number of rows in sparse matrix
    !! degree of freedom object; It contains information like
    !! storage format (NODES_FMT, DOF_FMT), and names of physical variable
    !! space-time component in each physical variables
    !! Total number of nodes used for these physical variables
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: MatrixProp
    !! Matrix is `SYM`, `UNSYM`
  END SUBROUTINE Initiate
END INTERFACE
```

In the above call, [CSRSparsity](../CSRSparsity/CSRSparsity_.md) object, `csr`, should be initiated by the user before passing it to the routine. This is because `initiate` uses information such as `ncol, nrow, nnz` stored inside `csr`.

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iface3" label="Interface 3">

We can also pass `INT::IA(:)`, `INT:JA(:)` and matrix value `REAL::A(:)` to `Initiate()` method for constructing the sparse matrix. The interface is given below.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, A, IA, JA, MatrixProp)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: A(:)
    INTEGER(I4B), INTENT(IN) :: IA(:), JA(:)
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: MatrixProp
  END SUBROUTINE Initiate
END INTERFACE
```

This subroutine will allocate memory for `csr`, which is an instance of [CSRSparsity](../CSRSparsity/CSRSparsity_.md).

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iface4" label="Interface 4">

EASIFEM also provides an assignment operator for copying contents of one sparse matrix into another sparse matrix. The syntax is given below.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, obj2)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRMatrix_), INTENT(IN) :: obj2
  END SUBROUTINE Initiate
END INTERFACE
```

The above call is equivalent to `obj=obj2`, and it will also copy `obj%csr`.

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iface5" label="Interface 5">

We can also create a csrmatrix from a subset of another csrmatrix.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, obj2, i1, i2, j1, j2)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRMatrix_), INTENT(IN) :: obj2
    INTEGER(I4B), INTENT(IN) :: i1, i2
    INTEGER(I4B), INTENT(IN) :: j1, j2
  END SUBROUTINE Initiate
END INTERFACE
```

Symbolically the above call is equivalent to `obj=obj2(i1:i2, j1:j2)`, and it will allocate memory for `obj%csr`.

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>
