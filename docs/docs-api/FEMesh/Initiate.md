---
sidebar_position: 7
---

# Initiate

Initiate an instance of Mesh.

# Structure

```fortran
INTERFACE
  MODULE SUBROUTINE obj_Initiate(obj, hdf5, group)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh object
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    !! Mesh file in hdf5 file format
    CHARACTER(*), INTENT(IN) :: group
    !! location in HDF5 file
  END SUBROUTINE obj_Initiate
END INTERFACE
```

## Examples

### Converting mesh from Gmsh to easifem format

<details>
<summary>Click here to see example</summary>
<div>

import EXAMPLE22 from "./examples/_Initiate_test_1.md";

<EXAMPLE22 />

</div>
</details>

### Reading surface mesh in 2D

<details>
<summary>Examples</summary>
<div>

import EXAMPLE43 from "./examples/_Initiate_test_2.md";

<EXAMPLE43 />

</div>
</details>

### Reading curve mesh in 2D

<details>
<summary>Examples</summary>
<div>

import EXAMPLE59 from "./examples/_Initiate_test_4.md";

<EXAMPLE59 />

</div>
</details>

