:::caution
Note this routine destroys the matrix at output.
:::

## Modules and classes

## Usage

```fortran
PROGRAM main
USE easifemBase
```

```fortran
    REAL( DFP ), ALLOCATABLE :: mat0(:,:), mat(:,:), w(:), exact(:)
    REAL( DFP ), PARAMETER :: tol= 1.0E-2
```

!!! note "Test-1"

```fortran
    mat =RESHAPE( &
      [   1.96, -6.49, -0.47, -7.20, -0.65, &
        & -6.49, 3.80, -6.39, 1.50, -6.34, &
        & -0.47,-6.39, 4.17, -1.51, 2.67, &
        & -7.20, 1.50,-1.51, 5.70, 1.80, &
        & -0.65,-6.34, 2.67, 1.80,-7.10 &
      ], [5,5])
    mat0=mat
    !!
    CALL Reallocate(w, SIZE(mat,1))
    CALL GetSymEigenValues_(mat=mat, eigenValues=w)
    !!
    exact = [-11.07, -6.23, 0.86, 8.87, 16.09]
    !!
    CALL OK( ALL(SOFTEQ(w, exact, tol)), "")
    !!
    CALL Display(MdEncode(ABS(mat0-mat)), "mat0-mat=")
```

:::caution
At output `mat` is changed, the difference is given below.
`mat0-mat=`

|         |        |         |         |        |
|---------|--------|---------|---------|--------|
| 0.79415 | 10.448 | 0.47892 | 7.5634  | 0.5773 |
| 0       | 1.5357 | 2.4282  | 1.5005  | 5.6309 |
| 0       | 0      | 1.599   | 7.8722  | 2.3714 |
| 0       | 0      | 0       | 0.85741 | 8.9405 |
| 0       | 0      | 0       | 0       | 0      |
:::

```fortran
END PROGRAM main
```
