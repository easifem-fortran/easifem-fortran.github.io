---
sidebar_position: 3
---

# Orthotropic elasticity

Orthotropic materials belongs to the category of anisotropic materials, because their properties change when measured from different directions. The orthotropic linear elastic materials have material properties at a particular point which differ along three orthogonal axes, where each axis has twofold rotational symmetry. These directional differences in strength can be quantified with Hankinson's equation.

A familiar example of an orthotropic material is wood. In wood, one can define three mutually perpendicular directions at each point in which the properties are different. It is most stiff (and strong) along the grain (axial direction), because most cellulose fibrils are aligned that way. It is usually least stiff in the radial direction (between the growth rings), and is intermediate in the circumferential direction. This anisotropy was provided by evolution, as it best enables the tree to remain upright.

![](https://upload.wikimedia.org/wikipedia/commons/0/0b/Taxus_wood.jpg)

:::note
Orthotropic materials have three orthogonal planes of symmetry. If the basis vectors $(e_{1},e_{2},e_{3})$ are normals to the planes of symmetry then the coordinate transformation relations imply that
:::

:::info
We need total 9 parameters to describe an Orthotropic material.
:::

$C$ matrix has following form:

$$
C=\begin{bmatrix}C_{11} & C_{12} & C_{13} & 0 & 0 & 0\\
C_{12} & C_{22} & C_{23} & 0 & 0 & 0\\
C_{13} & C_{23} & C_{33} & 0 & 0 & 0\\
0 & 0 & 0 & C_{44} & 0 & 0\\
0 & 0 & 0 & 0 & C_{55} & 0\\
0 & 0 & 0 & 0 & 0 & C_{66}
\end{bmatrix}
$$

Inverse of $C$ is given by following:

$$
C^{-1} = \left[\begin{array}{cccccc}
\frac{1}{E_{11}} & -\frac{\nu_{12}}{E_{22}} & -\frac{\nu_{13}}{E_{33}}\\
-\frac{\nu_{21}}{E_{11}} & \frac{1}{E_{22}} & -\frac{\nu_{23}}{E_{33}}\\
-\frac{\nu_{31}}{E_{11}} & -\frac{\nu_{32}}{E_{22}} & \frac{1}{E_{33}}\\
& & & \frac{1}{G_{12}}\\
& & & & \frac{1}{G_{23}}\\
& & & & & \frac{1}{G_{13}}
\end{array}\right]
$$

Here,

- $\nu_{ij}$ is related to the contraction in $i$th direction when extension is appplied to $j$the direction.
