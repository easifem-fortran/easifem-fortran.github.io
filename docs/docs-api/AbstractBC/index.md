---
sidebar_position: 1
date: 2023-02-12
update: 2023-02-12
status: stable
docs: done
extpkgs: none
category:
  - BoundaryCondition
tags:
  - AbstractBC
  - BoundaryCondition
  - easifemClasses
---

# AbstractBC

`AbstractBC` class handles the boundary condition in finite element methods. Currently, it has following subclasses.

- [DirichletBC](/docs-api/DirichletBC)
- [NeumannBC](/docs-api/NeumannBC)
- [NitscheBC](/docs-api/NitscheBC)

## Construction methods

There are three methods for constructing an instance of `AbstractBC`.

1. Construction by `Parameters`
2. Construction by importing data from `HDF5File`
3. Construction by importing data from `Toml` file.

### Construction by paramters

1. The first step is to set the necessary Parameters by calling the method called [SetAbstractBCParam](/docs-api/AbstractBC/SetAbstractBCParam).

2. In the second step, we define a boundary. To this end, we will use the [MeshSelection](/docs-api/MeshSelection).

3. In the third step, we call [Initiate](/docs-api/AbstractBC/Initiate) method. To initiate an instance of `AbstractBC`, we need to pass the boundary, paramters, and domain.

4. In the fourth step, we call [Set](/docs-api/AbstractBC/Set) method to set the value of boundary condition.

### Construction by `HDF5File`

We can also construct an instance of `AbstractBC` by importing data from `HDF5File`. See, [Import](/docs-api/AbstractBC/Import) method.

### Construction by `Toml` file

We can also construct an instance of `AbstractBC` by importing data from `Toml` file. See, [ImportFromToml](/docs-api/AbstractBC/ImportFromToml) method.

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
