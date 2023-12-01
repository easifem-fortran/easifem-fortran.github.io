---
sidebar_position: 1
date: 2023-03-15
update: 2023-03-15
status: stable
docs: done
extpkgs: none
category:
  - Materials
  - MaterialModels
tags:
  - materials
  - models
  - materialModels
  - easifemClasses
---

# AbstractMaterial

`AbstractMaterial_` class is designed to handle the material properties in simulations. This class currently has following sub-classes.

- [SolidMaterial](/docs-api/SolidMaterial)
- `PorousMaterial`
- `FluidMaterial`

You can see the structure of `AbstractMaterial` [here](./AbstractMaterial_.md).

:::info
`AbstractMaterial_` contains materials in a vector of [UserFunction](/docs-api/UserFunction). Therefore, you should know read about `UserFunction` before getting started with the [AbstractMaterial_](./AbstractMaterial_.md).
:::

## How to initiate?

To initiate an instance of `AbstractMaterial_` follow the following steps:

1. First, we will call [SetAbstractMaterialParam](./SetAbstractMaterialParam.md) method.
2. Then, we will call [Initiate](./Initiate.md) method.
3. After we have initiated an instance of `AbstractMaterial_`, we will ADD material to it by calling [AddMaterial](./AddMaterial.md). Note that this routine just register a material name and allocate space for defining materal as a `UserFunction`.
4. After registering a material, we can get the pointer of [UserFunction](/docs-api/UserFunction) by calling the method [](./GetMaterialPointer.md). We should initiate this pointer as described in the documentation of [UserFunction](/docs-api/UserFunction).

:::info TOML
You can also initiate the material from `toml` configuration and by using the method called [ImportFromToml](./ImportFromToml.md)
:::

:::success HDF5File
You can also initiate the material from `hdf5file` by using the method called [Import](./Import.md)
:::

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
