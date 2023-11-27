---
title: FacetMatrix_Method
---

# FacetMatrix Method

## FacetMatrix 1

$$
2\mu{\bf d}\left({\bf v}\right)\cdot{\bf n}=G_{12}(J,i,j)V(j,J)
$$

$$
G_{12}(J,i,j)=\mu\frac{\partial N^{J}}{\partial x_{p}}n_{p}\delta_{ij}+\mu\frac{\partial N^{J}}{\partial x_{i}}n_{j}
$$

$$
\begin{aligned} & \int_{\Gamma_{e}}\tau\left[2\mu{\bf d}\left(\delta\bar{{\bf v}}\right)\cdot{\bf n}\right]\cdot\left[2\mu{\bf d}\left(\bar{{\bf v}}\right)\cdot{\bf n}\right]dS\\ & =\int_{\Gamma_{e}}\tau\left[2\mu{\bf d}\left(\delta\bar{{\bf v}}\right)\cdot{\bf n}\right]\cdot\left[2\mu{\bf d}\left(\bar{{\bf v}}\right)\cdot{\bf n}\right]dS\\ & =\delta V(i,I)\left(\int_{\Gamma_{e}}\tau\left[G_{12}(I,p,i)\right]\cdot\left[G_{12}(J,p,j)\right]dS\right)V(j,J) \end{aligned}
$$

## FacetMatrix2

$$
\begin{aligned} & \int_{\Gamma_{e}}\tau\left(2\mu{\bf d}\left(\delta\bar{{\bf v}}\right)\cdot{\bf n}\right)\cdot\left(2\mu{\bf d}\left(\bar{{\bf v}}\right)\cdot{\bf n}\right)dS\\ & =\delta V(i,I)\left(\int_{\Gamma_{e}}\tau G_{12}(I,p,i)G_{12}(J,p,j)dS\right)V(j,J) \end{aligned}
$$

## FacetMatrix3

$$
\int_{\Gamma_{e}}\tau\left\{ 2\mu{\bf d}\left(\delta\bar{{\bf v}}\right)\cdot{\bf n}\right\} \cdot\left(\bar{p}{\bf n}\right)dS=\delta v_{iI}\int_{\Gamma_{e}}\tau G_{12}(I,j,i)n_{j}N^{J}dSp_{J}
$$

## FacetMatrix4

$$
\int_{\Gamma_{e}}\tau\left(\delta\bar{p}{\bf n}\right)\cdot\left(2\mu{\bf d}\left(\bar{{\bf v}}\right)\cdot{\bf n}\right)dS=\delta\bar{p}_{I}\left[A\right]_{IJ}^{1j}\delta v_{jJ}
$$

$$
\left[A\right]_{IJ}^{1j}=\int_{\Gamma_{e}}\tau N^{I}n_{i}G_{12}(J,i,j)dS
$$

## FacetMatrix11

$$
\begin{aligned}\int_{\Gamma_{e}}\tau\left[\mu\frac{\partial\delta{\bf \bar{v}}}{\partial{\bf x}}\cdot{\bf n}\right]\cdot\left[\mu\frac{\partial{\bf \bar{v}}}{\partial{\bf x}}\cdot{\bf n}\right]dS & =\int_{\Gamma_{e}}\tau\left[\mu\frac{\partial\delta v_{iI}N^{I}}{\partial x_{p}}n_{p}\right]\left[\mu\frac{\partial v_{iJ}N^{J}}{\partial x_{q}}n_{q}\right]dS\\ & =\delta v_{iI}\left[\int_{\Gamma_{e}}\tau\left[\mu\frac{\partial N^{I}}{\partial x_{p}}n_{p}\right]\left[\mu\frac{\partial N^{J}}{\partial x_{q}}n_{q}\right]dS\right]v_{iJ} \end{aligned}
$$

## FacetMatrix12

$$
\begin{aligned}\int_{\Gamma_{e}}\frac{\partial\delta{\bf \bar{v}}}{\partial{\bf x}}\cdot{\bf n}\cdot\frac{\partial{\bf \bar{v}}}{\partial{\bf x}}\cdot{\bf n}dS & =\int_{\Gamma_{e}}\frac{\partial\delta v_{iI}N^{I}}{\partial x_{p}}n_{p}\frac{\partial v_{iJ}N^{J}}{\partial x_{q}}n_{q}dS\\ & =\delta v_{iI}\left[\int_{\Gamma_{e}}\frac{\partial N^{I}}{\partial x_{p}}n_{p}\frac{\partial N^{J}}{\partial x_{q}}n_{q}dS\right]v_{iJ} \end{aligned}
$$

## FacetMatrix13

$$
\begin{aligned}\int_{\Gamma_{e}}\tau\left(\mu\nabla\delta{\bf v}\cdot{\bf n}\right)\cdot\left(\bar{p}{\bf n}\right)dS & =\int_{\Gamma_{e}}\tau\mu\frac{\partial\delta v_{i}}{\partial x_{p}}n_{p}n_{i}\bar{p}dS\\ & =\int_{\Gamma_{e}}\tau\mu\frac{\partial\delta v_{iI}N^{I}}{\partial x_{p}}n_{p}n_{i}\bar{p}_{J}N^{J}dS\\ & =\delta v_{iI}\left[\int_{\Gamma_{e}}\tau\mu\frac{\partial N^{I}}{\partial x_{p}}n_{p}n_{i}N^{J}dS\right]\bar{p}_{J} \end{aligned}
$$

## FacetMatrix14

$$
\begin{aligned}\int_{\Gamma_{e}}\tau\delta\bar{p}{\bf n}\left(\mu\nabla{\bf v}\cdot{\bf n}\right)dS & =\int_{\Gamma_{e}}\tau\delta\bar{p}n_{i}\mu\frac{\partial v_{i}}{\partial x_{p}}n_{p}dS\\ & =\int_{\Gamma_{e}}\tau\bar{p}_{I}N^{I}n_{i}\mu\frac{\partial\delta v_{iI}N^{J}}{\partial x_{p}}n_{p}dS\\ & =\delta p_{I}\left[\int_{\Gamma_{e}}\tau\mu N^{I}\frac{\partial N^{J}}{\partial x_{p}}n_{p}n_{i}dS\right]\delta v_{iJ} \end{aligned}
$$

## FacetMatrix15

$$
\begin{aligned}\int_{\Gamma_{e}}\left[\mu\nabla\delta{\bf v}\cdot{\bf n}\right]\cdot\left\{ \tau\nabla\bar{p}\right\} dS & =\int_{\Gamma_{e}}\left[\mu\frac{\partial\delta v_{i}}{\partial x_{p}}n_{p}\right]\cdot\left\{ \tau\frac{\partial\bar{p}}{\partial x_{i}}\right\} dS\\ & =\int_{\Gamma_{e}}\left[\mu\frac{\partial\delta v_{iI}N^{I}}{\partial x_{p}}n_{p}\right]\cdot\left\{ \tau\frac{\partial\bar{p}_{J}N^{J}}{\partial x_{i}}\right\} dS\\ & =\delta v_{iI}\int_{\Gamma_{e}}\left[\mu\frac{\partial N^{I}}{\partial x_{p}}n_{p}\right]\cdot\left\{ \tau\frac{\partial N^{J}}{\partial x_{i}}\right\} dS\bar{p}_{J} \end{aligned}
$$

## FacetMatrix21

$$
\begin{aligned}\int_{\Gamma_{e}}\tau\delta p{\bf n}\cdot\nabla pdS & =\int_{\Gamma_{e}}\tau\delta p_{I}N^{I}{\bf n}\cdot\nabla\left(p_{J}N^{J}\right)dS\\ & =\delta p_{I}\left(\int_{\Gamma_{e}}\tau N^{I}{\bf n}\cdot\nabla N^{J}dS\right)p_{J} \end{aligned}
$$

