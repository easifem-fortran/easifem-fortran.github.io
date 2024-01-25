# Initiate

Initiate an instance of `CSRSparsity_`.

## Interface 1

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE Initiate1(obj, ncol, nrow, idof, jdof, nnz)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: ncol, nrow
    TYPE(DOF_), OPTIONAL, INTENT(IN) :: idof
    !! DOF for row
    TYPE(DOF_), OPTIONAL, INTENT(IN) :: jdof
    !! DOF for column
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnz
    !! number of nonzeros
  END SUBROUTINE Initiate1
END INTERFACE Initiate
```

Here, `dof` is optional, if this argument is absent then DOF object has the following structure:

- `name`=["K"]
- `tNodes`=[nrow]
- `spaceCompo`=[1]
- `timeCompo`=[1].

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE8 from "./examples/_Initiate_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Assignment operator

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE obj_initiate2(obj, obj2)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    TYPE(CSRSparsity_), INTENT(IN) :: obj2
  END SUBROUTINE obj_initiate2
END INTERFACE Initiate
```

## Initiate by raw data

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE obj_initiate3(obj, IA, JA)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: IA(:), JA(:)
  END SUBROUTINE obj_initiate3
END INTERFACE Initiate
```

- This routine constructs `CSRSparsity_` instance by using the
  indices `IA` and `JA`
- This routine is helpful in reading data from files.
- This routine calls `Initiate` method
  without `dof` argument. So this type of initiation does not contain
  useful information about the degree of freedoms.

## Initiate by `CSRSparsity` function

EASIFEM also has `CSRSparsity` and `CSRSparsityPointer` functions. They can be used to create an instance of `CSRSparsity_`. The later returns the pointer to the newly created instance of `CSRSparsity_` object. The usage are given below.

```fortran
MODULE FUNCTION CSRSparsity( nrow, ncol, dof ) RESULT( Ans )
  INTEGER( I4B ), INTENT( IN ) :: nrow
  INTEGER( I4B ), INTENT( IN ) :: ncol
  TYPE( DOF_ ), OPTIONAL, INTENT( IN ) :: dof
  TYPE( CSRSparsity_ ) :: ans
END FUNCTION CSRSparsity
```

```fortran
MODULE FUNCTION CSRSparsity( IA, JA ) RESULT( Ans )
  INTEGER( I4B ), INTENT( IN ) :: IA(:)
  INTEGER( I4B ), INTENT( IN ) :: JA(:)
  TYPE( CSRSparsity_ ) :: ans
END FUNCTION CSRSparsity
```

## Getting the pointer

By using CSRSparsityPointer method we can get the pointer to `CSRSparsity_`.

```fortran
MODULE FUNCTION CSRSparsityPointer( nrow, ncol, dof ) RESULT( Ans )
  INTEGER( I4B ), INTENT( IN ) :: nrow
  INTEGER( I4B ), INTENT( IN ) :: ncol
  TYPE( DOF_ ), OPTIONAL, INTENT( IN ) :: dof
  TYPE( CSRSparsity_ ), POINTER :: ans
END FUNCTION CSRSparsityPointer
```

```fortran
MODULE FUNCTION CSRSparsityPointer( IA, JA ) RESULT( Ans )
  INTEGER( I4B ), INTENT( IN ) :: IA(:)
  INTEGER( I4B ), INTENT( IN ) :: JA(:)
  TYPE( CSRSparsity_ ), POINTER :: ans
END FUNCTION CSRSparsityPointer
```
