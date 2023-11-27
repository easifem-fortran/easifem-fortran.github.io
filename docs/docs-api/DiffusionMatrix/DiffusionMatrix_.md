# Structure

## Diffusion matrix 1

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial x_{i}}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

Interface:

```fortran
PURE FUNCTION DiffusionMatrix(test, trial, opt) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    REAL(DFP), ALLOCATABLE :: ans(:, :)
END FUNCTION DiffusionMatrix
```

## Diffusion matrix 2

$$
M(I,J)=\int_{\Omega}\rho\frac{\partial N^{I}}{\partial x_{i}}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, k, krank, opt) &
    & RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: k
    !! scalar
    TYPE(FEVariableScalar_), INTENT( IN ) :: krank
    !! scalar fe variable
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 3

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial x_{i}}a_{i}a_{j}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, k, krank, opt) &
    & RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: k
    !! vector
    TYPE(FEVariableVector_), INTENT( IN ) :: krank
    !! vector
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 4

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, k, krank, opt) &
    & RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: k
    !! matrix
    TYPE(FEVariableMatrix_), INTENT(IN) :: krank
    !! matrix
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 5

$$
M(I,J)=\int\rho_{1}\rho_{2}\frac{\partial N^{I}}{\partial x_{i}}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Scalar
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Scalar
    TYPE(FEVariableScalar_), INTENT( IN ) :: c1rank
    !! Scalar
    TYPE(FEVariableScalar_), INTENT( IN ) :: c2rank
    !! Scalar
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 6

$$
M(I,J)=\int\rho\frac{\partial N^{I}}{\partial x_{i}}v_{i}v_{j}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Scalar
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Vector
    TYPE(FEVariableScalar_), INTENT( IN ) :: c1rank
    !! Scalar
    TYPE(FEVariableVector_), INTENT( IN ) :: c2rank
    !! Vector
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 7

$$
M(I,J)=\int\rho_{1}\frac{\partial N^{I}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Scalar
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Matrix
    TYPE(FEVariableScalar_), INTENT( IN ) :: c1rank
    !! Scalar
    TYPE(FEVariableMatrix_), INTENT( IN ) :: c2rank
    !! Matrix
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 8:

$$
M(I,J)=\int\rho\frac{\partial N^{I}}{\partial x_{i}}v_{i}v_{j}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Vector
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Scalar
    TYPE(FEVariableVector_), INTENT( IN ) :: c1rank
    !! Vector
    TYPE(FEVariableScalar_), INTENT( IN ) :: c2rank
    !! Scalar
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 9:

$$
M(I,J)=\int\frac{\partial N^{I}}{\partial x_{i}}v_{i}w_{j}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Vector
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Vector
    TYPE(FEVariableVector_), INTENT( IN ) :: c1rank
    !! Vector
    TYPE(FEVariableVector_), INTENT( IN ) :: c2rank
    !! Vector
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 10:

$$
M(I,J)=\int\frac{\partial N^{I}}{\partial x_{i}}v_{p}b_{pi}v_{q}b_{qj}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Vector
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Matrix
    TYPE(FEVariableVector_), INTENT( IN ) :: c1rank
    !! Vector
    TYPE(FEVariableMatrix_), INTENT( IN ) :: c2rank
    !! Matrix
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 11:

$$
M(I,J)=\int\rho_{1}\frac{\partial N^{I}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Matrix
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Scalar
    TYPE(FEVariableMatrix_), INTENT( IN ) :: c1rank
    !! Matrix
    TYPE(FEVariableScalar_), INTENT( IN ) :: c2rank
    !! Scalar
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 12:

$$
M(I,J)=\int\frac{\partial N^{I}}{\partial x_{i}}b_{ip}v_{p}b_{jq}v_{q}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

Interface:

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Matrix
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Vector
    TYPE(FEVariableMatrix_), INTENT( IN ) :: c1rank
    !! Matrix
    TYPE(FEVariableVector_), INTENT( IN ) :: c2rank
    !! Vector
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 13:

$$
M(I,J)=\int\frac{\partial N^{I}}{\partial x_{i}}b_{ip}c_{pj}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, c1, c2, c1rank, &
    & c2rank, opt ) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: c1
    !! Matrix
    CLASS(FEVariable_), INTENT(IN) :: c2
    !! Matrix
    TYPE(FEVariableMatrix_), INTENT( IN ) :: c1rank
    !! Matrix
    TYPE(FEVariableMatrix_), INTENT( IN ) :: c2rank
    !! Matrix
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! ncopy
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 14:

**opt=[1]**

$$
\left[M\right]_{IJ}^{ij}=\int\frac{\partial N^{I}}{\partial x_{i}}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

**opt=[2]**

$$
\left[M\right]_{IJ}^{ij}=\int\frac{\partial N^{I}}{\partial x_{j}}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, opt) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    INTEGER( I4B ), INTENT( IN ) :: opt( 1 )
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```

## Diffusion matrix 15:

**opt=[1]**

$$
\left[M\right]_{IJ}^{ij}=\int\rho\frac{\partial N^{I}}{\partial x_{i}}\frac{\partial N^{J}}{\partial x_{j}}d\Omega
$$

**opt=[2]**

$$
\left[M\right]_{IJ}^{ij}=\int\rho\frac{\partial N^{I}}{\partial x_{j}}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

```fortran
  MODULE PURE FUNCTION DiffusionMatrix(test, trial, k, krank, opt) &
    & RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    !! test function
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    !! trial function
    CLASS(FEVariable_), INTENT(IN) :: k
    !! scalar
    TYPE(FEVariableScalar_), INTENT( IN ) :: krank
    !! scalar fe variable
    INTEGER( I4B ), INTENT( IN ) :: opt(1)
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION DiffusionMatrix
```
