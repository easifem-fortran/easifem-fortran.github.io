---
title: STConvectiveMatrix
author: Vikas Sharma, Ph. D.
date: 23 Nov 2021
update: 23 Nov 2021
tags:
  - STConvectiveMatrix
---

# STConvectiveMatrix

## Theory

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial u_i}{\partial t} + c_k \frac{\partial u_i}{\partial x_k} + \cdots
$$

We would like to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta u_{iI} \quad \int_{Q_n} N^I T_a c_k \frac{\partial N^J T_b}{\partial x_k} {dQ} \quad {}^{b}u_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta u_{iI} \quad \int_{Q_n} c_k \frac{\partial N^I T_a}{\partial x_k} N^J T_b {dQ} \quad {}^{b}u_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \frac{\partial \textbf{f(U)}}{\partial x} + \frac{\partial \textbf{g(U)}}{\partial y} + \frac{\partial \textbf{h(U)}}{\partial z} + \cdots
$$

where $\textbf{U}, \textbf{f}, \textbf{g}, \textbf{h}  \in R^m$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} N^I T_a \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ}  \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} N^I T_a \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ}  \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} N^I T_a \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}h_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ}  \quad {}^{b}h_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial u_i}{\partial t} + c_k \frac{\partial u_i}{\partial x_k} + \cdots
$$

We would like to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = \delta {}^{a}u_{iI} \int_{Q_n} \frac{ \partial N^I T_a}{\partial t} c_{k}^{h} \frac{\partial N^J T_b}{\partial x_k} {dQ} \quad {}^{b}u_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a}u_{iI} \int_{Q_n} c_{k}^{h} \frac{\partial N^I T_a}{\partial x_k} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}u_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \frac{\partial \textbf{f(U)}}{\partial x} + \frac{\partial \textbf{g(U)}}{\partial y} + \frac{\partial \textbf{h(U)}}{\partial z} + \cdots
$$

where $\textbf{U}, \textbf{f}, \textbf{g}, \textbf{h}  \in R^m$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} \frac{\partial N^J T_b}{\partial t} {dQ}  \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial y} \frac{\partial N^J T_b}{\partial t} {dQ}  \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial z} \frac{\partial N^J T_b}{\partial t} {dQ}  \quad {}^{b}h_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \mathbf{A_1} \frac{\partial \textbf{U}}{\partial x} + \mathbf{A_2} \frac{\partial \textbf{U}}{\partial y} + \mathbf{A_3} \frac{\partial \textbf{U}}{\partial z} + \cdots
$$

where $\textbf{U} \in R^m$, $\mathbf{A_i} \in R^{m \times m}$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} N^I T_a [ \mathbf{A_1} ]_{ij} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_1} ]_{ji} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ}  \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} N^I T_a [\mathbf{A_2}]_{ij} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_2}]_{ji} \frac{\partial N^I T_a}{\partial y} N^J T_b {dQ}  \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} N^I T_a [\mathbf{A_3}]_{ij} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_3}]_{ji} \frac{\partial N^I T_a}{\partial z} N^J T_b {dQ}  \quad {}^{b}h_{jJ}
$$

The shape of each ${}^{4}M(:,:,a,b)$ is $(N_{NS} \times m, N_{NS} \times m)$. In this case there will be coupling between different components of $\mathbf{U}$. This coupling is due to $\mathbf{A_i}$. The structure of any of the above ${}^{4}\mathbf{M}$ is given as

$$
{}^{4}\mathbf{M}(:,:,a,b) =
\begin{bmatrix}
\mathbf{M_{11}} & \cdots & \mathbf{M_{1m}} \\
\vdots          & \ddots & \vdots \\
\mathbf{M_{m1}} & \cdots & \mathbf{M_{mm}} \\
\end{bmatrix}
$$

Each $\mathbf{M_{ij}}$ has shape $(N_{ns} \times N_{ns})$.

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \mathbf{A_1} \frac{\partial \textbf{U}}{\partial x} + \mathbf{A_2} \frac{\partial \textbf{U}}{\partial y} + \mathbf{A_3} \frac{\partial \textbf{U}}{\partial z} + \cdots
$$

where $\textbf{U} \in R^m$, $\mathbf{A_i} \in R^{m \times m}$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} [ \mathbf{A_1} ]_{ij} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_1} ]_{ji} \frac{\partial N^I T_a}{\partial x} \frac{\partial N^J T_b}{\partial t}  {dQ}  \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t}  [\mathbf{A_2}]_{ij} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_2}]_{ji} \frac{\partial N^I T_a}{\partial y} \frac{\partial N^J T_b}{\partial t}  {dQ}  \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t}  [\mathbf{A_3}]_{ij} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_3}]_{ji} \frac{\partial N^I T_a}{\partial z} \frac{\partial N^J T_b}{\partial t}  {dQ}  \quad {}^{b}h_{jJ}
$$

The shape of each ${}^{4}M(:,:,a,b)$ is $(N_{NS} \times m, N_{NS} \times m)$. In this case there will be coupling between different components of $\mathbf{U}$. This coupling is due to $\mathbf{A_i}$. The structure of any of the above ${}^{4}\mathbf{M}$ is given as

$$
{}^{4}\mathbf{M}(:,:,a,b) =
\begin{bmatrix}
\mathbf{M_{11}} & \cdots & \mathbf{M_{1m}} \\
\vdots          & \ddots & \vdots \\
\mathbf{M_{m1}} & \cdots & \mathbf{M_{mm}} \\
\end{bmatrix}
$$

Each $\mathbf{M_{ij}}$ has shape $(N_{ns} \times N_{ns})$.

Now consider the following terms in a pde.

$$
\mathbf{A_0} \frac{\partial U}{\partial t} + \mathbf{A_1} \frac{\partial U}{\partial x} + \mathbf{A_2} \frac{\partial \mathbf{U}}{\partial y} + \mathbf{A_3} \frac{\partial U}{\partial t} + \cdots
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_0}]_{ki} \frac{\partial N^I T_a}{\partial t} [ \mathbf{A_1} ]_{kj} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_1} ]_{ki} \frac{\partial N^I T_a}{\partial x} [\mathbf{A_0}]_{kj} \frac{\partial N^J T_b}{\partial t}  {dQ}  \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_0}]_{ki}\frac{\partial N^I T_a}{\partial t}  [\mathbf{A_2}]_{kj} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_2}]_{ki} \frac{\partial N^I T_a}{\partial y} [ \mathbf{A_0}]_{kj} \frac{\partial N^J T_b}{\partial t}  {dQ}  \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_0}]_{ki}\frac{\partial N^I T_a}{\partial t}  [\mathbf{A_3}]_{kj} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_3}]_{ki} \frac{\partial N^I T_a}{\partial z} [ \mathbf{A_0}]_{kj} \frac{\partial N^J T_b}{\partial t}  {dQ}  \quad {}^{b}h_{jJ}
$$

## Methods

### STConvectiveMatrix 1

Implementation: `STCM_1`

!!! note "Interface"

```fortran
CALL ConvectiveMatrix( test, trial, c, term1, term2)
```

!!! example ""

$$
M\left( {I,J,a,b} \right) = {\int_{{I_n}}^{} {\int_\Omega ^{} {{c_j}\frac{{\partial {N^I}{T_a}}}{{\partial {x_j}}} \cdot {N^J}{T_b}d\Omega dt} } }
$$

```fortran
CALL ConvectiveMatrix(test, trial, c, term1=del_x, term2=del_none, projectOn='test')
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}N^{I}T_{a}c_{j}\frac{\partial N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

```fortran
CALL ConvectiveMatrix(test, trial, c, term1=del_none, term2=del_x, projectOn='trial')
```

- `C` denotes the convective velocity. It can be Rank-1, Rank-2, Rank-3 array wrapped inside the [[FEVariable_]].
- If the convective velocity is constant in both space and time, `C` should be a rank-1, `C(:)`.
- The spatial nodal values of convective velocity, when it is constant in time domain, is given by a rank-2 array `C(:,:)`
- The temporal values of convective velocity, when it is constant in time domain, is given by a rank-2 array `C(:,:)`
- Space-time nodal values of convective velocity is given by a rank-3 array `C(:,:,:)`

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_1]] Line2 for space and time, constant velocity
- [[STConvectiveMatrix_test_2]] Line2 for space and time, spatial nodal velocity
- [[STConvectiveMatrix_test_3]] Line2 for space and time, space-time nodal velocity
- [[STConvectiveMatrix_test_4]] Line2 for space and time, constant velocity

### STConvectiveMatrix 2

Implementation: `STCM_2` and `STCM_3`

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial x}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_none, c )
```

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial y}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_none, c )
```

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial z}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_z, term2=del_none, c )
```

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot  \frac{{\partial {N^J}{T_b}}}{{\partial x}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_x, c )
```

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial y}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_y, c )
```

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial z}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_z, c )
```

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial x_{i}}} c \cdot {N^J}{T_b}d\Omega dt} } }
$$

This matrix can be computed by setting dim=-1 as shown in the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_none,c)
```

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot  \frac{{\partial {N^J}{T_b}}}{{\partial x_{i}}}d\Omega dt} } }
$$

This matrix can be computed using the following command.

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_x_all,c)
```

!!! note ""
You can learn more about this subroutine from following pages.

- [[STConvectiveMatrix_test_21]] Line2 in space and time, FEVariable is constant
- [[STConvectiveMatrix_test_22]] Line2 in space and time, FEVariable is space-nodal values
- [[STConvectiveMatrix_test_23]] Line2 in space and time, FEVariable is space-time values
- [[STConvectiveMatrix_test_24]] Triangle3 in space and Line2 in time, FEVariable is constant
- [[STConvectiveMatrix_test_25]] Triangle3 in space and Line2 in time, FEVariable is spatial nodal values
- [[STConvectiveMatrix_test_26]] Triangle3 in space and Line2 in time, FEVariable is space-time nodal values
- [[STConvectiveMatrix_test_27]] Triangle3 in space and Line2 in time, FEVariable is space-time nodal values

### STConvectiveMatrix 3

Implementation: `STCM_4` and `STCM_5`.

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial x}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_t,c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial y}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_t,c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial z}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_z, tzerm2=del_t,c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial x}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_x,c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial y}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_y,c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial z}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_z,c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial x_{i}}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_t,c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}c\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_x_all,c)
```

You can learn more about these methods from following pages 🚀💎🔗

- [[STConvectiveMatrix_test_31]]
- [[STConvectiveMatrix_test_32]]

### STConvectiveMatrix 4

Implementation: `STCM_6` and `STCM_7`.

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_x,c=c, projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial y}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_x,c=c, projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial z}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_z, term2=del_x,c=c, projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_x,c=c, projectOn="test")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial y}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_y,c=c, projectOn="test")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial z}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_z,c=c, projectOn="test")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{i}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_x,c=c, &
    & projectOn="trial")
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_i}d\Omega dt
$$

```fortran
mat2=ConvectiveMatrix( test, trial, term1=del_x, &
    & term2=del_x_all,c=c, projectOn="test")
```

You can learn more about these methods from following pages.

- [[STConvectiveMatrix_test_41]]
- [[STConvectiveMatrix_test_42]]

### STConvectiveMatrix 5

Implementation: `STCM_8`

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial t}\frac{\partial N^{J}T_{b}}{\partial x_{p}}c_{p}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_x, c)
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_y, c)
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_z, c)
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_x_all, c)
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega}\frac{\partial N^{I}T_{a}}{\partial x_{p}}c_{p}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_t, c)
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_t, c)
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_z, term2=del_t, c)
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_t, c)
    !! or
```

You can learn how to use these methods from following pages.

- [[STConvectiveMatrix_test_51]]
- [[STConvectiveMatrix_test_52]]

### STConvectiveMatrix 6

Implementation: `STCM_1b`

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{}
\rho {{c_j}\frac{{\partial {N^I}{T_a}}}{{\partial {x_j}}} \cdot
{N^J}{T_b}d\Omega dt} } }
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_none, &
        & c=c, rho=rho, projectionOn='test' )
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_none, &
        & c=c, rho=rho, projectionOn='test' )
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_none, &
        & c=c, rho=rho, projectionOn='test' )
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_z, term2=del_none, &
        & c=c, rho=rho, projectionOn='test' )
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega} \rho N^{I}T_{a}c_{j}\frac{\partial
N^{J}T_{b}}{\partial x_{j}}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_x_all, &
        & c=c, rho=rho, projectionOn='trial')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_x, &
        & c=c, rho=rho, projectionOn='trial')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_y, &
        & c=c, rho=rho, projectionOn='trial')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_none, term2=del_z, &
        & c=c, rho=rho, projectionOn='trial')
```

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_61]]

### STConvectiveMatrix 7

Implementation: `STCM_6b` and `STCM_7b`

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial x} d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_x, &
        & c=c, rho=rho, projectionOn='test')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial y}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_y, &
        & c=c, rho=rho, projectionOn='test')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial z}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_z, &
        & c=c, rho=rho, projectionOn='test')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho \frac{\partial N^{I}T_{a}}{\partial x}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_x, &
        & c=c, rho=rho, projectionOn='trial')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho \frac{\partial N^{I}T_{a}}{\partial y}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_y, &
        & c=c, rho=rho, projectionOn='trial')
```

$$
M(I,J,a,b)=\int_{I_{n}}\int_{\Omega} \rho \frac{\partial N^{I}T_{a}}{\partial z}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_z, &
        & c=c, rho=rho, projectionOn='trial')
```

You can learn more about this method from following pages.

- [[STConvectiveMatrix_test_71]]

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial x_{i}}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_x, &
        & c=c, rho=rho, projectionOn='trial')
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial x_{i}}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_x_all, &
        & c=c, rho=rho, projectionOn='test')
```

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_72]]

### STConvectiveMatrix 8

Implementation: `STCM_8b`

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho c_{p}\frac{\partial N^{I}T_{a}}{\partial x_{p}}\frac{\partial N^{J}T_{b}}{\partial t}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_x, term2=del_t, &
        & c=c, rho=rho, projectionOn='test')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_y, term2=del_t, &
        & c=c, rho=rho, projectionOn='test')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_z, term2=del_t, &
        & c=c, rho=rho, projectionOn='test')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_x_all, term2=del_t, &
        & c=c, rho=rho, projectionOn='test')
```

$$
M\left(I,J,a,b\right)=\int_{I_{n}}\int_{\Omega}\rho\frac{\partial N^{I}T_{a}}{\partial t}c_{p}\frac{\partial N^{J}T_{b}}{\partial x_{p}}d\Omega dt
$$

```fortran
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_x, &
        & c=c, rho=rho, projectionOn='trial')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_y, &
        & c=c, rho=rho, projectionOn='trial')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_z, &
        & c=c, rho=rho, projectionOn='trial')
    !! or
    mat2=ConvectiveMatrix( test, trial, term1=del_t, term2=del_x_all, &
        & c=c, rho=rho, projectionOn='trial')
```

You can learn more about this method from following pages

- [[STConvectiveMatrix_test_81]]
