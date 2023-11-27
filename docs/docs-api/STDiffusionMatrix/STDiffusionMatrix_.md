# Introduction

## Theory

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}a_{i}b_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

$$
M(I,J)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}a_{i}b_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

## Methods

### STDiffusionMatrix 1

General interface is given below.

```fortran
  mat4 = STDiffusionMatrix(test, trial)
  mat2 = DiffusionMatrix(test, trial)
```

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega
$$

### STDiffusionMatrix 2

General interface is given below.

```fortran
  mat4 = STDiffusionMatrix(test, trial, k)
  mat2 = DiffusionMatrix(test, trial, k)
```

!!! example ""

$$
M(I,J)=\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega
$$

Here, $\rho$ is a scalar [[FEVariable_]], therefore, we can obtain this matrix by following call.

```fortran
  mat4 = STDiffusionMatrix(test, trial, k=rho)
  mat2 = DiffusionMatrix(test, trial, k=rho)
```

!!! example ""

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega
$$

Here, $k_{ij}$ is a diffusion tensor [[FEVariable_]], therefore, we can obtain this matrix by following call.

```fortran
  mat4 = STDiffusionMatrix(test, trial, k=k)
  mat2 = DiffusionMatrix(test, trial, k=k)
```

### STDiffusionMatrix 3

The general interface in this category is given below.

```fortran
  mat4 = STDiffusionMatrix(test, trial, c1, c2)
  mat2 = DiffusionMatrix(test, trial, c1, c2)
```

!!! note "c1"
  c1 is a [[FEVariable_]], which can be a scalar, vector, or a matrix.

!!! note "c2"
  c2 is a [[FEVariable_]], which can be a scalar, vector, or a matrix.

!!! note ""
  9 types of matrices can be formed from this routine.

!!! example "scalar-scalar"

!!! example "scalar-vector"

!!! example "scalar-matrix"

$$
M(I,J)=\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}k_{ij}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega
$$

Here $\rho$ is a scalar and $k$ is a matrix (rank-2 tensor) [[FEVariable_]]. This matrix can be obtained by following expression.

```fortran
  mat4 = STDiffusionMatrix(test, trial, c1=rho, c2=k)
  mat2 = DiffusionMatrix(test, trial, c1=rho, c2=k)
```

### STDiffusionMatrix 4

Generic interface is given below.

```fortran
  mat4 = STDiffusionMatrix(test, trial, c1, c2, c3)
  mat2 = DiffusionMatrix(test, trial, c1, c2, c3)
```

$$
M(I,J)=\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}a_{i}b_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega
$$
