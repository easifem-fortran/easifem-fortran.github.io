---
sidebar_position: 1
date: 2023-11-28 
update: 2023-11-28 
status: stable
docs: done
extpkgs: none
category:
  - BoundaryCondition
  - Guides
tags:
  - AbstractBC
  - BoundaryCondition
  - easifemClasses
  - guides
  - DirichletBC
---

# Dirichlet boundary condition

To apply boundary condition in FEM computation, EASIFEM, provides a class called [DirichletBC_](/docs-api/DirichletBC).

:::info
`DirichletBC_` is a subclass of [AbstractBC](/docs-api/AbstractBC).
:::

To understand how `DirichletBC` works, lets consider an example of linear elasticity. Let's say we want to apply the following boundary condition.

$$
\mathbf{u} = \mathbf{U}_{0}, \text{ on } \Gamma
$$

Now, we may think that there is only one boundary condition. But in easifem this is not the case. Actually, $\mathbf{u}$, has three components in 3D (and two components in 2D). Therefore, the above boundary condition is actually boundary condition for $u_x$, $u_y$, and $u_z$. So, we have three boundary condition on a given boundary $\Gamma$.

The second point, which is quite obvious, is that every boundary condition has two things:

- The boundary
- The value (condition)

To define the boundary EASIFEM employs the [MeshSelection](/docs-api/MeshSelection) class. The value can be specified in several ways as mentioned below in this section.

:::note
Several instances of DirichletBC can have same boundary but different condition.
:::

So, to define a boundary condition we need to define the boundary and the condition.

## Defining
