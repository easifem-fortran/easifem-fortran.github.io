---
sidebar_position: 1
date: 2023-03-25 
update: 2023-03-25  
status: stable 
docs: done
extpkgs: none
category: 
  - Field
  - LinearAlgebra
  - VectorField
tags:
  - VectorField
  - easifemClasses
---

# VectorField

`VectorField_` defines the nodal value of a vector variable (such as velocity, displacement) at the spatial nodes of finite element mesh.

`VectorField_` is a child of `AbstractNodeField_`.

## Structure

```fortran
TYPE, EXTENDS(AbstractNodeField_) :: VectorField_
  INTEGER(I4B) :: spaceCompo = 0_I4B
```
