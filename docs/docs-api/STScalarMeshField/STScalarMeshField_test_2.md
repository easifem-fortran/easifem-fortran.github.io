This example shows how to initiate an instance of [Mesh_](../Mesh/Mesh_.md) by reading data from mesh file, which is in [HDF5File_](../HDF5File/HDF5File_.md) format. It also showns how to construct an instance of STScalarMeshField.
The mesh is given below

![](./figures/mesh.png)

Import modules and declare variables

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( HDF5File_ ) :: meshfile
  TYPE( Mesh_ ) :: amesh
  TYPE( STScalarMeshField_ ) :: obj
  TYPE( ParameterList_ ) :: param
```

Initiate and open the mesh file which is in [[HDF5File_]] format.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

Initiate an instance of STScalarMeshField_.

```fortran
  CALL FPL_INIT(); CALL param%initiate()
  CALL setSTScalarMeshFieldParam( &
    & param=param, &
    & name='aScalar', &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine='NATIVE_SERIAL', &
    & defineOn=Nodal, &
    & nns=6, &
    & nnt=3 )
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
