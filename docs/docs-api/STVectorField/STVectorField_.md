---
sidebar_position: 1
date:  2023-03-25 
update: 2023-03-25   
status: stable
docs: done
extpkgs: none
category: 
  - Field
  - STVectorField
  - LinearAlgebra
tags:
  - STVectorField
---

# STVectorField

`STVectorField_` is defined for handling computation of vector field in space-time finite element methods.

`STVectorField_` is a child of `AbstractNodeField_`.

```fortran
TYPE, EXTENDS(AbstractNodeField_) :: STVectorField_
  INTEGER(I4B) :: spaceCompo = 0_I4B
  INTEGER(I4B) :: timeCompo = 0_I4B
```

![](./figures/STVectorField1.svg)
