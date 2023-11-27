This example shows the usage of `SymLargestEigenValue`.

In this example we will calculate many largest eigenvalues.

## Import modules

```fortran
PROGRAM main
USE easifemBase
Implicit none
```

## Declare variables

```fortran
REAL( DFP ), ALLOCATABLE :: maxEV(:), mat(:,:)
INTEGER( I4B ) :: ncv
```

Getting the first five algebraic largest eigenvalues of a diagonal matrix.

```fortran title="Algebraic Largest Eigenvalue"
  mat = zeros(100,100, 1.0_DFP)
  call SetDiag(mat=mat, d=arange(1, SIZE(mat,1)), diagNo=0)
  maxEV = SymLargestEigenVal(mat=mat, nev=5)
  CALL Display(maxEV, "maxEV=")
```

```txt title="results"
 maxEV=
-------
 96.000
 97.000
 98.000
 99.000
100.000
```

Getting the first five absolute largest eigenvalues of a diagonal matrix. In this case we
provide extra argument `which="LM"`.

:::note
default value of `which` is `"LA"` which stands for largest absolute eigenvalue.
:::

```fortran title="Absolute Largest Eigenvalue"
  call SetDiag(mat=mat, d=arange(1, SIZE(mat,1)), diagNo=0)
  mat(SIZE(mat,1), SIZE(mat,2) ) = -1000
  maxEV = SymLargestEigenVal(mat=mat, nev=5, which="LM" )
  CALL Display(maxEV, "max absolute EV=")
```

```txt title="results"
max absolute EV=
----------------
       96.00
       97.00
       98.00
       99.00
    -1000.00
```

:::caution When `which="LA"`, the returned eigenvalue can be positive.
:::

```fortran
END PROGRAM main
```
