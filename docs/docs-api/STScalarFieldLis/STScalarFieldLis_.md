---
sidebar_position: 1
date: 2023-03-23 
update: 2023-03-23  
status: stable 
docs:  done
extpkgs: none
category: 
  - LinearAlgebra
  - Field
  - SpaceTime
tags:
  - STScalarField
---

# STScalarFieldLis

`STScalarField` defines nodal values of a scalar variable (such as pressure, temperature, concentration) over the spatial-temporal nodes of space-time mesh.

This data type is useful in space-time finite element algorithms.

`STScalarFieldLis_` is a child of `STScalarField_`.

:::info
`STScalarFieldLis_` uses `LIS_OMP` engine.
:::

```fortran
TYPE, EXTENDS(STScalarField_) :: STScalarFieldLis_
```

![](./figures/STScalarField1.svg)
