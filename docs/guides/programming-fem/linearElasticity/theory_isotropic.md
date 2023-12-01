---
sidebar_position: 2 
---

# Isotropic elasticity

In the case of isotropic linear elasticity, we need only two material parameters to describe the $C$ tensor (or, stress-strain relationship). The following choices of material parameters are popular.

- Lame parameters: $\lambda$ and $\mu$
- Young's modulus $E$ and shear modulus $G$
- Young's modulus $E$ and Poisson's ration $\nu$

In terms of Lame parameter $C$ is given by following relationship.

$$
C_{ijkl}=\lambda\delta_{ij}\delta_{kl}+\mu\left(\delta_{ik}\delta_{jl}+\delta_{il}\delta_{jk}\right)
$$

The stress-strain relationship is given by following:

$$
\sigma_{ij}=\lambda\varepsilon_{kk}\delta_{ij}+2\mu\varepsilon_{ij}
$$

or

$$
\sigma_{ij}=\left(3\lambda+ 2\mu\right)\frac{\varepsilon_{kk}}{3}\delta_{ij}+2\mu\text{dev}\left(\varepsilon_{ij}\right)
$$

where $\text{dev}(\varepsilon)$ is the Deviatoric strain tensor which is given by

$$
\text{dev}(\varepsilon) = \varepsilon - \frac{1}{3} \text{tr}(\varepsilon) \textbf{1}
$$

The term $\left(3\lambda+ 2\mu \right)$ is also known as the bulk modulus of the material.

The Voigt form of the stiffness tensor $C$ in terms of $E$ and $\nu$ is given by following expression:

$$
C = \frac{E}{(1+\nu)(1-2\nu)}\left[\begin{array}{cccccc}
1-\nu & \nu & \nu\\
\nu & 1-\nu & \nu\\
\nu & \nu & 1-\nu\\
& & & \frac{1-2\nu}{2}\\
& & & & \frac{1-2\nu}{2}\\
& & & & & \frac{1-2\nu}{2}
\end{array}\right]
$$

Similary, the inverse of $C$ is given by:

$$
C^{-1} =\frac{1}{E}\left[\begin{array}{cccccc}
1 & -\nu & -\nu\\
-\nu & 1 & -\nu\\
-\nu & -\nu & 1\\
& & & 2+2\nu\\
& & & & 2+2\nu\\
& & & & & 2+2\nu
\end{array}\right]
$$

## Plane stress

In the case of plane-stress, we use the following relationship between stress and strain.

$$
\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}=\frac{E}{1-\nu^{2}}\begin{bmatrix}1 & \nu & 0\\
\nu & 1 & 0\\
0 & 0 & \frac{1-\nu}{2}
\end{bmatrix}\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}
$$

$$
\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}=\frac{1}{E}\begin{bmatrix}1 & -\nu & 0\\
-\nu & 1 & 0\\
0 & 0 & 2+2\nu
\end{bmatrix}\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}
$$

## Plane strain

Similary, in the case of plane-strain, we use the following relationship between stress and strain.

$$
\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}=\frac{E}{(1+\nu)(1-2\nu)}\begin{bmatrix}1-\nu & \nu & 0\\
\nu & 1-\nu & 0\\
0 & 0 & \frac{1-2\nu}{2}
\end{bmatrix}\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}
$$

$$
\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}=\frac{1+\nu}{E}\begin{bmatrix}1-\nu & -\nu & 0\\
-\nu & 1-\nu & 0\\
0 & 0 & 2
\end{bmatrix}\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}
$$
