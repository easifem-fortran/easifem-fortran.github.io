---
sidebar_position: 1
date: 2021-10-08  
update: 2023-02-13   
status: stable
docs: done
extpkgs: none
category: 
  - MeshSelection
  - BoundaryCondition
tags:
  - MeshSelection
  - BoundaryCondition
---

# MeshSelection

`MeshSelection_` class is designed for selecting the parts of the domain (mesh).

`MeshSelection` is often used when we need to assign a material to a part of domain. Also, it is used to select boundary of the domain.

Currently, we have following ways select a mesh.

1. Mesh selection by `meshID`
2. Mesh selection by node numbers
3. Mesh selection by element numbers
4. Mesh selection by bounding box

## Constructor methods

We will use the following example to understand the API of `MeshSelection_`.

<details>
<summary>Click here to see the example</summary>
<div>

import EXAMPLE35 from "./examples/_Initiate_test_1.md";

<EXAMPLE35 />

</div>
</details>

1. To construct an instance of `MeshSelection` first we set the parameters in `ParameterList_` by calling the method called [SetMeshSelectionParam](/docs-api/MeshSelection/SetMeshSelectionParam).

2. After setting the parameters you should call [Initiate](/docs-ap/MeshSelection/Initiate) method.

3. Now we will add mesh region to `MeshSelection_`. See [Add](/docs-api/MeshSelection/Add) method.

4. After you are done adding the mesh parts, do not forget to call [Set](/docs-api/MeshSelection/Set) method.

You can Display the content of `MeshSelection` by using [Display](/docs-api/MeshSelection/Display) method.

## Get methods

- To get the `meshid` you should you [GetMeshID](/docs-api/MeshSelection/GetMeshID) method
- To get the element number, use the [GetElemNum](/docs-api/MeshSelection/GetElemNum) method
- To get the node number, you should use the [GetNodeNum](/docs-api/MeshSelection/GetNodeNum) method.

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
