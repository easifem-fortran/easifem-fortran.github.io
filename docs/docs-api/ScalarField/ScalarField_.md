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
  - ScalarField
  - easifemClasses
---

# ScalarField

ScalarField represents the field of scalar variable.

The nodal values are defined at the spatial nodes of finite element mesh.

`ScalarField_` is a child of [AbstractNodeField_](../AbstractNodeField/AbstractNodeField_.md).

```fortran
TYPE, EXTENDS(AbstractNodeField_) :: ScalarField_
END TYPE
```

![](./figures/ScalarField1.svg)
