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

# STScalarField

`STScalarField` defines nodal values of a scalar variable (such as pressure, temperature, concentration) over the spatial-temporal nodes of space-time mesh.

This data type is useful in space-time finite element algorithms.

`STScalarField_` is a child of `AbstractNodeField_`.

```fortran
TYPE, EXTENDS(AbstractNodeField_) :: STScalarField_
  INTEGER(I4B) :: timeCompo = 0_I4B
```

![](./figures/STScalarField1.svg)
