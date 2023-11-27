---
sidebar_position: 2
---

# NodeData

It is a data type for storing the information of node data in mesh.

The methods related to this data-type are contained in [[Mesh_#NodeDataMethods]].

## Structure

```fortran
TYPE :: NodeData_
  INTEGER(I4B) :: globalNodeNum = 0
  INTEGER(I4B) :: localNodeNum = 0
  INTEGER(I4B) :: nodeType = INTERNAL_NODE
  INTEGER(I4B), ALLOCATABLE :: globalNodes(:)
  INTEGER(I4B), ALLOCATABLE :: globalElements(:)
  CONTAINS
  PROCEDURE, PUBLIC, PASS( obj ) :: Display => nodeData_Display
END TYPE NodeData_
```

- `globalNodeNum` Global node number
- `localNodeNum` local node number
- `nodeType` following node type are defined
  - `INTERNAL_NODE`
  - `BOUNDARY_NODE`
  - `DOMAIN_BOUNDARY_NODE`
- `globalNodes` contains the global node number surrouding the node. Note that this list does not contain self-global-node-number
- `globalElements` contains the global element number surrounding the node.
