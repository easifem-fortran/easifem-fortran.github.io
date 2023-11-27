# Structure

`MeshSelection_` class is designed to select parts of `domain_` object.

It selects the `mesh_` by using `meshID` , `elemNum`, `nodeNum` and/or `boundingBox`.

This class can be used to map material properties to meshes. In general it can be used to tag mesh entities.

![[MeshSelection_workflow.svg]]

```fortran
TYPE :: MeshSelection_
  PRIVATE
  LOGICAL(LGT), PUBLIC :: isInitiated = .FALSE.
  LOGICAL(LGT), PUBLIC :: isSelectionByMeshID = .FALSE.
  LOGICAL(LGT), PUBLIC :: isSelectionByElemNum = .FALSE.
  LOGICAL(LGT), PUBLIC :: isSelectionByBox = .FALSE.
  LOGICAL(LGT), PUBLIC :: isSelectionByNodeNum = .FALSE.
  TYPE(IntVector_) :: pointMeshID
  TYPE(IntVector_) :: curveMeshID
  TYPE(IntVector_) :: surfaceMeshID
  TYPE(IntVector_) :: volumeMeshID
  TYPE(IntVector_) :: pointElemNum
  TYPE(IntVector_) :: curveElemNum
  TYPE(IntVector_) :: surfaceElemNum
  TYPE(IntVector_) :: volumeElemNum
  TYPE(IntVector_) :: nodeNum
```

- `isInitiated`, True if an instance of MeshSelection is initiated
- `isSelectionByMeshID`, True if the mesh selection is done by specifying the mesh id
- `isSelectionByElemNum`, True if the mesh slection is done by specifying the global element number
- `isSelectionByBox`, True if the mesh selection is done by specifying the bounding box
- `isSelectionByNodeNum`, True if the mesh selection is done by specifying global node numbers
- `pointMeshID`, It denotes the IDs of mesh which has xidim=0, that is point mesh
- `curveMeshID`, It denotes the IDs of mesh which has xidim=1, that is, curve mesh
- `surfaceMeshID`, It denotes the IDs of mesh which has xidim=2, that is, surface mesh
- `volumeMeshID`, It denotes the IDs of mesh which has xidim=3, that is, volume mesh
- `pointElemNum`, It denotes the global element numbers that are used to select the mesh, and belongs to the point mesh
- `curveElemNum`, It denotes the global element numbers that are used to select the mesh, and belongs to the curve mesh
- `surfaceElemNum`, It denotes the global element numbers that are used to select the mesh, and belongs to the surface mesh
- `volumeElemNum`, It denotes the global element numbers that are used to select the mesh, and belongs to the volume mesh
- `nodeNum`, It denotes the global node number that are used to select the mesh
