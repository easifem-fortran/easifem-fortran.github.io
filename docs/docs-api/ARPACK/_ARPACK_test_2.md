This is a test program for SymLargestEigenVal routine.

## Import modules

```fortran
PROGRAM main
USE easifemBase
Implicit none
```

## Understanding the arguments

Arguments to SAUPD

| Argument | Type           | Intent | Value                   |
|----------|----------------|--------|-------------------------|
| IDO      | Int            | INOUT  | 0                       |
| BMAT     | Char(1)        | IN     | I                     |
| N        | Int            | IN     | SIZE(A,1)               |
| WHICH    | Char(2)        | IN     | LA                      |
| NEV      | Int            | IN     | 1                       |
| TOL      | Real32         | IN     | 1.0E-10                 |
| RESID    | Real32(N)      | INOUT  | NA, as info `.EQ.` 0      |
| NCV      | Int            | IN     | `3*N`                     |
| V        | Real32(N, NCV) | OUT    |                         |
| LDV      | Int            | IN     | SIZE(V,1)               |
| IPARAM   | Int (11)       | INOUT  | See below               |
| IPNTR    | Int (11)       | OUT    | NA                      |
| WORKD    | Real32(`3*N`)    | INOUT  | NA                      |
| WORKL    | Real32(LWORKL) | OUT    | NA                      |
| LWORKL   | Int            | IN     | at least NCV**2 + 8*NCV |
| INFO     | Int            | INOUT  | 0                       |

Arguments to IPARAM:

|             |         | Options   | Selected value | Intent         |
|-------------|---------|-----------|----------------|----------------|
| IPARAM (1)  | ISHIFT  | 1,2       | 1              | IN             |
| IPARAM (2)  | LEVEC   |           |                | IN: Deprecated |
| IPARAM (3)  | MAXITER |           | `3*N`          | IN             |
| IPARAM (4)  | NB      | 1         | 1              | IN             |
| IPARAM (5)  | NCONV   |           |                | OUT            |
| IPARAM (6)  | IUPD    |           |                | IN: Deprecated |
| IPARAM (7)  | MODE    | 1,2,3,4,5 | 1              | IN             |
| IPARAM (8)  | NP      |           | NA             | IN:            |
| IPARAM (9)  | NUMOP   |           |                | OUT            |
| IPARAM (10) | NUMOPB  |           |                | OUT            |
| IPARAM (11) | NUMREO  |           |                | OUT            |

## Declare variables

```fortran
REAL( DFP ) :: maxEV
REAL( DFP ), ALLOCATABLE :: mat(:,:)
INTEGER( I4B ) :: ncv
```

Getting the algebraic largest eigenvalue of a diagonal matrix.

```fortran title="Algebraic Largest Eigenvalue"
  mat = zeros(100,100, 1.0_DFP)
  call SetDiag(mat=mat, d=arange(1, SIZE(mat,1)), diagNo=0)
  maxEV = SymLargestEigenVal(mat=mat)
  CALL Display(maxEV, "maxEV=")
```

Getting the absolute largest eigenvalue of a diagonal matrix. In this case we
provide extra argument `which="LM"`.

:::note
default value of `which` is `"LA"` which stands for largest ALGEBRAIC eigenvalue.
:::

```fortran title="Absolute Largest Eigenvalue"
  call SetDiag(mat=mat, d=arange(1, SIZE(mat,1)), diagNo=0)
  mat(SIZE(mat,1), SIZE(mat,2) ) = -1000
  maxEV = SymLargestEigenVal(mat=mat, which="LM" )
  CALL Display(maxEV, "max absolute EV=")
```

:::caution When `which="LA"`, the returned eigenvalue can be positive.
:::

```fortran
END PROGRAM main
```
