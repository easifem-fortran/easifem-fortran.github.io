---
sidebar_position: 1
date:  2023-03-21 
update: 2023-03-21  
status: stable 
docs: done
extpkgs: none
category: 
  - LinearAlgebra
  - Field
  - Vector
tags:
  - ScalarFieldLis
  - easifemClasses
---

# ScalarFieldLis

ScalarFieldLis represents the field of scalar variable, which using `LIS_OMP` engine.

The nodal values are defined at the spatial nodes of finite element mesh.

`ScalarFieldLis_` is a child of [ScalarField_](../ScalarField/ScalarField_.md).

```fortran
TYPE, EXTENDS(ScalarField_) :: ScalarFieldLis_
END TYPE
```

![ScalarFieldLis1](figures/ScalarFieldLis1.svg)
