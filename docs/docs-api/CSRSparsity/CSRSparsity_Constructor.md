# CSRSparsity constructor

EASIFEM also has `CSRSparsity` and `CSRSparsityPointer` functions. They can be used to create an instance of [[CSRSparsity_]]. The later returns the pointer to the newly created instance of [[CSRSparsity_]] object. The usage are given below.

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
