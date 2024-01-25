---
sidebar_position: 1
date:  2023-03-21 
update: 2023-03-21  
status: stable 
docs: done
extpkgs:
  - lis
category: 
  - LinearAlgebra
  - Fields
  - Vectors
  - Lis
tags:
  - vectors
  - fields
  - easifemClasses
  - lis
  - extpkgs
---

# ScalarMeshField

`ScalarMeshField` is a subclass of [AbstractMeshField](/docs-api/AbstractMeshField). It is used to store scalar variables defined on elements of mesh. We can define the variable either on the nodes of the finite element, or we can define these variables on the quadrature points.

- By defining `varType` we can control how the scalar field changes inside an element.
- By defining `fieldType`, we can control how the scalar field over the elements of mesh.

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
