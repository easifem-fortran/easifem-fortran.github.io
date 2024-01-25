In this example we check the CPU time required to initiate a bigger mesh.

```bash title="results"
total nodes: 116416
total elements: 231430
```

```txt
Showing Time States of Importing Mesh
==============================
AbstractMesh_Class : obj_Import() : time in importing scalar data: 2.24E-04
AbstractMesh_Class : obj_Import() : time in importing elemNumber, connectivity, intNodeNumber: 1.215E-03
AbstractMesh_Class : obj_Import() : time in setting max and min: 1.245E-03
AbstractMesh_Class : obj_Import() : time in alloc local_elemNumber, local_nptrs, elementData: 4.406E-03
AbstractMesh_Class : obj_Import() : time in making mask: 2.03E-04
AbstractMesh_Class : obj_Import() : time in making elementData: 8.753E-03
AbstractMesh_Class : obj_Import() : time in allocating nodeData: 2.006E-03
AbstractMesh_Class : obj_Import() : time in making nodeData: 1.366E-03
==============================
./meshdata/big_big_mesh.h5
==============================
```

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER(*), PARAMETER :: filename="./meshdata/big_big_mesh.h5"

  CALL e%SetQuietMode(.TRUE.)
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )

  !Open the mesh file
  CALL meshfile%Open()

  CALL obj%SetShowTime(.TRUE.)

  !Initiate an instance of `Mesh_`
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  !Display the content of mesh.
  CALL obj%DisplayMeshInfo(filename)

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```

```txt title="results"
Showing Time States of Importing Mesh
==============================
AbstractMesh_Class : obj_Import() : time in importing scalar data: 4.28E-04
AbstractMesh_Class : obj_Import() : time in importing elemNumber, connectivity, intNodeNumber: 2.49E-04
AbstractMesh_Class : obj_Import() : time in setting max and min: 1.31E-04
AbstractMesh_Class : obj_Import() : time in alloc local_elemNumber, local_nptrs, elementData: 4.2E-04
AbstractMesh_Class : obj_Import() : time in making mask: 4E-05
AbstractMesh_Class : obj_Import() : time in making elementData: 8.42E-04
AbstractMesh_Class : obj_Import() : time in allocating nodeData: 2.12E-04
AbstractMesh_Class : obj_Import() : time in making nodeData: 1.26E-04
==============================
./meshdata/big_mesh.h5
==============================
total nodes: 11836
total elements: 23270
==============================
```
