# Methods

## ConvectiveMatrix 1

Interface:

```fortran
  MODULE PURE FUNCTION ConvectiveMatrix(test, trial, term1, &
      & term2, opt) RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    INTEGER(I4B), INTENT(IN) :: term1
    !! del_x, del_y, del_z, del_x_all, del_none
    INTEGER(I4B), INTENT(IN) :: term2
    !! del_x, del_y, del_z, del_x_all, del_none
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! Option for number of diagonal copies
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION ConvectiveMatrix
```

Following matrices can be calculated based on the value of `term1` and `term2`.

- `term1=del_none, term2=del_x`

$$
C(I,J)=\int_{\Omega}N^{I}\frac{\partial N^{J}}{\partial x}d\Omega
$$

- `term1=del_none, term2=del_y`

$$
C(I,J)=\int_{\Omega}N^{I}\frac{\partial N^{J}}{\partial y}d\Omega
$$

- `term1=del_none, term2=del_z`

$$
C(I,J)=\int_{\Omega}N^{I}\frac{\partial N^{J}}{\partial z}d\Omega
$$

- `term1=del_x, term2=del_none`

$$
C(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial x}N^{J}d\Omega
$$

- `term1=del_y, term2=del_none`

$$
C(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial y}N^{J}d\Omega
$$

- `term1=del_z, term2=del_none`

$$
C(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial z}N^{J}d\Omega
$$

- `term1=del_none, term2=del_x_all` **opt=1**

$$
C_{i1}(I,J)=\int_{\Omega}N^{I}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

- `term1=del_none, term2=del_x_all` **opt=2**

$$
C_{1i}(I,J)=\int_{\Omega}N^{I}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

- `term1=del_x_all, term2=del_none` **opt=1**

$$
C_{i1}(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial x_{i}}N^{J}d\Omega
$$

- `term1=del_x_all, term2=del_none` **opt=2**

$$
C_{1i}(I,J)=\int_{\Omega}\frac{\partial N^{I}}{\partial x_{i}}N^{J}d\Omega
$$

## Convective Matrix 2

Interface:

```fortran
  MODULE PURE FUNCTION ConvectiveMatrix(test, trial, c, crank, term1, &
      & term2, opt) RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    TYPE(FEVariable_), INTENT(IN) :: c
    !! scalar variable
    TYPE(FEVariableScalar_), INTENT(IN) :: crank
    !! scalar variable
    INTEGER(I4B), INTENT(IN) :: term1
    !! del_x, del_y, del_z, del_x_all, del_none
    INTEGER(I4B), INTENT(IN) :: term2
    !! del_x, del_y, del_z, del_x_all, del_none
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! number of copies
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION ConvectiveMatrix
```

!!! note ""
Here $c$ is some scalar variable, it may be some constant, function of space coordinates given in terms of spatial nodal variable or quadrature variable

Following matrices can be computed by using this interface:

- `term1=del_none, term2=del_x`

$$
M(I,J) = \int_{\Omega} c N^I \frac{\partial N^J}{\partial x} d{\Omega}
$$

- `term1=del_none, term2=del_y`

$$
M(I,J) = \int_{\Omega} c N^I \frac{\partial N^J}{\partial y} d{\Omega}
$$

- `term1=del_none, term2=del_z`

$$
M(I,J) =  \int_{\Omega} c N^I \frac{\partial N^J}{\partial z} d{\Omega}
$$

- `term1=del_none, term2=del_x_all` **opt=1**

$$
C_{i1}(I,J)=\int_{\Omega}\rho N^{I}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

- `term1=del_none, term2=del_x_all` **opt=2**

$$
C_{1i}(I,J)=\int_{\Omega}\rho N^{I}\frac{\partial N^{J}}{\partial x_{i}}d\Omega
$$

- `term1=del_x, term2=del_none`

$$
M(I,J) = \int_{\Omega} c \frac{\partial N^I}{\partial x} N^J d{\Omega}
$$

- `term1=del_y, term2=del_none`

$$
M(I,J) =  \int_{\Omega} c \frac{\partial N^I}{\partial y} N^J d{\Omega}
$$

- `term1=del_z, term2=del_none`

$$
M(I,J) =  \int_{\Omega} c \frac{\partial N^I}{\partial z} N^J d{\Omega}
$$

- `term1=del_x_all, term2=del_none` **opt=1**

$$
C_{i1}(I,J)=\int_{\Omega}\rho\frac{\partial N^{I}}{\partial x_{i}}N^{J}d\Omega
$$

- `term1=del_x_all, term2=del_none` **opt=2**

$$
C_{1i}(I,J)=\int_{\Omega}\rho\frac{\partial N^{I}}{\partial x_{i}}N^{J}d\Omega
$$

You can learn more from examples given below:

- [[ConvectiveMatrix_test_21]] Line2 [[ReferenceLine_]]
- [[ConvectiveMatrix_test_22]] Line2 [[ReferenceLine_]], c is nodal variable
- [[ConvectiveMatrix_test_23]] Line2 [[ReferenceLine_]], c is quadrature variable
- [[ConvectiveMatrix_test_24]] linear [[ReferenceTriangle_]]
- [[ConvectiveMatrix_test_25]] high order [[ReferenceTriangle_]]
- [[ConvectiveMatrix_test_26]] mixed FEM [[ReferenceTriangle_]]
- [[ConvectiveMatrix_test_27]] linear [[ReferenceQuadrangle_]]
- [[ConvectiveMatrix_test_28]] higher order [[ReferenceQuadrangle_]]
- [[ConvectiveMatrix_test_29]] mixed FEM [[ReferenceQuadrangle_]]
- [[ConvectiveMatrix_test_30]] linear [[ReferenceTetrahedron_]]
- [[ConvectiveMatrix_test_31]] higher order [[ReferenceTetrahedron_]]
- [[ConvectiveMatrix_test_32]] mixed FEM [[ReferenceTetrahedron_]]

## ConvectiveMatrix 3

Interface:

```fortran
  MODULE PURE FUNCTION ConvectiveMatrix(test, trial, c, crank, term1, &
      & term2, opt) RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    CLASS(ElemshapeData_), INTENT(IN) :: trial
    TYPE(FEVariable_), INTENT(IN) :: c
    !! It can be a scalar or vector variable
    TYPE(FEVariableVector_), INTENT(IN) :: crank
    !! It can be a scalar or vector variable
    INTEGER(I4B), INTENT(IN) :: term1
    !! del_x, del_y, del_z, del_x_all, del_none
    INTEGER(I4B), INTENT(IN) :: term2
    !! del_x, del_y, del_z, del_x_all, del_none
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: opt
    !! number of copies
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION ConvectiveMatrix
```

!!! note "Convective velocity"
`C(:,:)` is a two dimensional array. It represents the spatial nodal values of _convective velocity_. The shape of `C` is `(NSD, NNS)`. The first index of `C` denotes the spatial coordinates. The second index denotes the spatial nodal number. In this case, _convective velocity_ varies in the space.

!!! note "Convective velocity"
`C(:)` is a vector. It represents the spatial coordinates of _convective velocity_. The shape of `C` is `(NSD)`. The first index of `C` denotes the spatial coordinates. In this case, _convective velocity_ remains constant in the space.

Following matrices can be computed from this interface:

- `term1=del_none, term2=del_x`

$$
M(I,J) = \int_{\Omega} N^I c_k \frac{\partial N^J}{\partial x_k} d{\Omega}
$$

- `term1=del_x, term2=del_none`

$$
M(I,J) = \int_{\Omega} c_k \frac{\partial N^I}{\partial x_k} N^J d{\Omega}
$$

You can learn about this method from following pages

- [[ConvectiveMatrix_test_1]] ⚙ Line2 [[ReferenceLine_]] Constant velocity
- [[ConvectiveMatrix_test_2]] ⚙ Line2 [[ReferenceLine_]] Nodal values of velocity
- [[ConvectiveMatrix_test_3]] ⚙ Line2 [[ReferenceLine_]] Quadrature values of velocity
- [[ConvectiveMatrix_test_4]] ⚙ Line3 [[ReferenceLine_]] Nodal values of velocity
- [[ConvectiveMatrix_test_5]] ⚙ Line3 [[ReferenceLine_]] Quadrature values of velocity
- [[ConvectiveMatrix_test_6]] ⚙ mixed FEM for [[ReferenceLine_]]
- [[ConvectiveMatrix_test_7]] ⚙ for [[ReferenceTriangle_]]
- [[ConvectiveMatrix_test_8]] ⚙ for [[ReferenceTriangle_]] higher order
- [[ConvectiveMatrix_test_9]] ⚙ for [[ReferenceTriangle_]] mixed FEM
- [[ConvectiveMatrix_test_10]] ⚙ for [[ReferenceQuadrangle_]]
- [[ConvectiveMatrix_test_11]] ⚙ for [[ReferenceQuadrangle_]] for higher order
- [[ConvectiveMatrix_test_12]] ⚙ for [[ReferenceQuadrangle_]] for mixed FEM
- [[ConvectiveMatrix_test_13]] ⚙ for [[ReferenceTetrahedron_]]
- [[ConvectiveMatrix_test_14]] ⚙ for [[ReferenceTetrahedron_]] for higher order
- [[ConvectiveMatrix_test_15]] ⚙ for [[ReferenceTetrahedron_]] for mixed FEM

## TODO

Now consider the following terms in a PDE.

$$
\frac{\partial \mathbf{U}}{\partial t} + [\mathbf{A_1}] \frac{\partial \mathbf{U} }{\partial x} + [\mathbf{A_2}] \frac{\partial \mathbf{U}}{\partial y} + [\mathbf{A_3}] \frac{\partial \mathbf{U}}{\partial z} + \cdots
$$

where, $\mathbf{U} \in R^m$, and $[\mathbf{A_i}] \in R^{(m\times m)}$. For this we may need to compute the following matrices.

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} N^I [\mathbf{A_1}]_{ij} \frac{\partial N^J}{\partial x} d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{A_1}]_{ji} \frac{\partial N^I}{\partial x} N^J d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} N^I [\mathbf{A_2}]_{ij} \frac{\partial N^J}{\partial y} d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{A_2}]_{ji} \frac{\partial N^I}{\partial y} N^J d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} N^I [\mathbf{A_3}]_{ij} \frac{\partial N^J}{\partial z} d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{A_3}]_{ji} \frac{\partial N^I}{\partial z} N^J d{\Omega} \quad U_{jJ}
$$

- [ ] TODO Implement these methods.

We may want to compute following matrices

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{B}]_{ki} N^I [\mathbf{A_1}]_{kj} \frac{\partial N^J}{\partial x} d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{A_1}]_{ki} \frac{\partial N^I}{\partial x} [\mathbf{B}]_{kj} N^J d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{B}]_{ki} N^I [\mathbf{A_2}]_{kj} [\mathbf{B}]_{kj} \frac{\partial N^J}{\partial y} d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{A_2}]_{ki} \frac{\partial N^I}{\partial y} N^J d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{B}]_{ki} N^I [\mathbf{A_3}]_{kj} \frac{\partial N^J}{\partial z} d{\Omega} \quad U_{jJ}
$$

$$
{}^{2}M(I,J) = \delta U_{iI} \int_{\Omega} [\mathbf{A_3}]_{ki} \frac{\partial N^I}{\partial z} [\mathbf{B}]_{kj} N^J d{\Omega} \quad U_{jJ}
$$

- [ ] TODO Implement these methods.

## Examples

|                                              |                                              |                                             |
| :------------------------------------------- | :------------------------------------------- | :------------------------------------------ | --- |
| [🩱 Example 1](ConvectiveMatrix_test_1.md)   | [👬 Example 2](ConvectiveMatrix_test_2.md)   | [🧵 Example 3](ConvectiveMatrix_test_3.md)  |     |
| [🍀 Example 4](ConvectiveMatrix_test_4.md)   | [🕵️‍♀️ Example 5](ConvectiveMatrix_test_5.md)   | [🔯 Example 6](ConvectiveMatrix_test_6.md)  |     |
| [🙈 Example 7](ConvectiveMatrix_test_21.md)  | [🏋️ Example 8](ConvectiveMatrix_test_22.md)  | [😇 Example 9](ConvectiveMatrix_test_23.md) |     |
| [⛺ Example 10](ConvectiveMatrix_test_24.md) | [🕴️ Example 11](ConvectiveMatrix_test_25.md) |                                             |
