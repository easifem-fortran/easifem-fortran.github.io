This example shows how to initiate an instance of [Mesh_](../Mesh/Mesh_.md) by reading data from mesh file, which is in [HDF5File_](../HDF5File/HDF5File_.md) format. It also showns how to construct an instance of VectorMeshField_

The mesh is given below

![](./figures/mesh.png)

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( HDF5File_ ) :: meshfile
  TYPE( Mesh_ ) :: amesh
  TYPE( VectorMeshField_ ) :: obj
  TYPE( ParameterList_ ) :: param
```

Initiate and open the mesh file which is in [HDF5File_](../HDF5File/HDF5File_.md) format.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

Initiate an instance of VectorMeshField_.

```fortran
  CALL FPL_INIT(); CALL param%initiate()
  CALL setVectorMeshFieldParam( &
    & param=param, &
    & name='aVector', &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine='NATIVE_SERIAL', &
    & defineOn=Quadrature, &
    & spaceCompo=3, &
    & nns=6 )
  CALL obj%Initiate( param=param, mesh=amesh )
  CALL obj%Display( 'obj: ' )
```

```fortran
  CALL obj%Deallocate()
  CALL amesh%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
