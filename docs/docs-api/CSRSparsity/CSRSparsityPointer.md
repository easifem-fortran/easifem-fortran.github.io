# CSRSparsityPointer

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
