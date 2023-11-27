---
sidebar_position: 2
title: Structure
---

`AbstractNodeField_` is an abstract class which represents the field of nodal variables in finite element method.

`AbstractNodeField_` is a child of [AbstractField\_](../AbstractField/AbstractField_.md).

The nodal field is associated with the nodes of a finite element mesh. These variables can be of following types:

- `SCALAR`
- `VECTOR`
- `SPACE-TIME(ST) SCALAR`
- `SPACE-TIME(ST) VECTOR`.

## Structure

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractField_) :: AbstractNodeField_
  INTEGER(I4B) :: tSize = 0
  !! Total length of the nodal field = tdof * tNodes
  TYPE(RealVector_) :: realVec
  !! Vector of reals to contains the nodes
  TYPE(DOF_) :: dof
  !! Degree of freedom object, which contains the information about
  !! how the different components are stored inside the realVec
```

:::note `tSize`
:::

Total length of the nodal field = `tdof * tNodes`

:::note `realVec`
:::

Real vector, it contains the value. 

:::note `dof`
:::

Degree of freedom object. Read more about it [here](../DOF/DOF_).




![AbstractNodeField1](./figures/AbstractNodeField1.svg)

:::note How to extend?
In order to extend the abstract class `AbstractNodeField` one should implement the methods given in [AbstractField\_](../AbstractField/AbstractField_.md) as well as the following methods:
:::
