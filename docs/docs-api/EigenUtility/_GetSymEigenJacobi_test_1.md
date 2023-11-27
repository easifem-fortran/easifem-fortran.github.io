This example [GetSymEigenJacobi](GetSymEigenJacobi.md). This routine returns both eigenvalues and eigenvector by using Jacobi Method.

```fortran
PROGRAM main
USE easifemBase
```

```fortran
    REAL( DFP ), ALLOCATABLE :: eigenValues(:), eigenVectors(:, :), mat(:,:), exact(:)
    REAL( DFP ), PARAMETER :: tol= 1.0E-2
```

Test 1

```fortran
    mat =RESHAPE( &
      [   1.96, -6.49, -0.47, -7.20, -0.65, &
        & -6.49, 3.80, -6.39, 1.50, -6.34, &
        & -0.47,-6.39, 4.17, -1.51, 2.67, &
        & -7.20, 1.50,-1.51, 5.70, 1.80, &
        & -0.65,-6.34, 2.67, 1.80,-7.10 &
      ], [5,5])
    !!
    CALL Reallocate(eigenVectors, SIZE(mat,1), SIZE(mat,2))
    CALL Reallocate(eigenValues, SIZE(mat,1))
    !!
    CALL GetSymEigenJacobi(&
      & mat=mat, &
      & eigenValues=eigenValues, &
      & eigenVectors=eigenVectors, &
      & maxIter=SIZE(mat,1))
    !!
    exact = [-11.07, -6.23, 0.86, 8.87, 16.09]
    !!
    CALL OK( ALL(SOFTEQ(eigenValues, exact, tol)), "")
    !!
    CALL Display(MdEncode(eigenValues), "eigenValues=")
    !!
    CALL Display(MdEncode(eigenVectors), "eigenVectors=")
```

Results

Eigenvalues=

|             |          |          |          |          |
|-------------|----------|----------|----------|----------|
| 0.29807     | -0.48964 | -0.40262 | -0.37448 | -0.60751 |
| 0.5078      | 0.60526  | 0.40659  | -0.35717 | -0.28797 |
| 8.16062E-02 | -0.39915 | 0.65997  | 0.50076  | -0.38432 |
| 3.5893E-03  | 0.45637  | -0.45529 | 0.62037  | -0.44673 |
| 0.80413     | -0.16225 | -0.17246 | 0.31077  | 0.44803  |

```fortran
END PROGRAM main
```
