# Initiate

## Interface

```fortran
  MODULE SUBROUTINE initiate( obj, ncol, nrow, idof, jdof )
    TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
    INTEGER( I4B ), INTENT( IN ) :: ncol, nrow
    TYPE( DOF_ ), OPTIONAL, INTENT( IN ) ::  idof
    TYPE( DOF_ ), OPTIONAL, INTENT( IN ) ::  jdof
  END SUBROUTINE initiate
```

## Getting started

In order to construct an instance of `CSRSparsity` we need to specify `nrow` `ncol` and [DOF](../DOF/DOF_.md) object. By using [DOF](../DOF/DOF_.md) object we can specify the degrees of freedom structure inside `CSRMatrix_`. Then one can use the #CSRSparsity/Initiate method as shown below.

```fortran
CALL Initiate( CSRSparisty_::obj, INT::nrow, INT::ncol, DOF_::dof )
```

Here, `dof` is optional, if this argument is absent then DOF object has the following structure:

- `name`=["K"]
- `tNodes`=[nrow]
- `spaceCompo`=[1]
- `timeCompo`=[1].

Working example is given below based on this concept.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( CSRSparsity_ ) :: obj
TYPE( DOF_ ) :: dofobj
INTEGER( I4B ) :: i
CALL Initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT )
CALL Initiate( obj, ncol=12, nrow=12, dof=dofobj )
CALL Display( obj, "CSRSparsity : " )
CALL Deallocate( obj )
END PROGRAM main
```

For multi-physics applications following example will be helpful.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( CSRSparsity_ ) :: obj
TYPE( DOF_ ) :: dofobj
INTEGER( I4B ) :: i
CALL Initiate( obj=dofobj, tNodes=[20, 10], names=['V', 'P'], &
  & spaceCompo=[3, 1], timeCompo=[1, 1], storageFMT=FMT_DOF )
CALL Initiate( obj, ncol=(.tnodes. dofobj), nrow=(.tNodes. dofobj),  &
  & dof=dofobj )
CALL Display( obj, "CSRSparsity : " )
CALL Deallocate( obj )
END PROGRAM main
```

EASIFEM also has an assignment operator (=) to initiate an instance of `CSRSparsity_`.

```fortran
MODULE SUBROUTINE initiate( obj, obj2 )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj2
END SUBROUTINE initiate
```

However, if you have `IA` and`JA` indices, then you can initiate the `CSRSparsity_` object using the following command.

```fortran
MODULE SUBROUTINE initiate( obj, IA, JA )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: IA( : ), JA( : )
END SUBROUTINE initiate
```
