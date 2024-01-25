:::info
This example shows how to initiate an instance of [Mesh](/docs-api/Mesh) by reading data from mesh file, which is in [HDF5File_](/docs-api/HDF5File) format. We will also construct an instance of [STScalarMeshField_](/docs-api/STScalarMeshField).
:::

The mesh is given below

![](./mesh.png)

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( HDF5File_ ) :: meshfile
  TYPE( Mesh_ ) :: amesh
  TYPE( STScalarMeshField_ ) :: obj
  TYPE( ParameterList_ ) :: param
```

### Step 1:

Initiate and open the mesh file which is in [HDF5File_](/docs-api/HDF5File) format.

```fortran
CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
CALL meshfile%Open()
CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

### Step 2:

Initiate an instance of [STScalarMeshField_](/docs-api/STScalarMeshField).

```fortran
CALL FPL_INIT(); CALL param%initiate()
CALL SetSTScalarMeshFieldParam( &
  & param=param, &
  & name='aScalar', &
  & varType = Space, &
  & fieldType=TypeField%Normal, &
  & engine='NATIVE_SERIAL', &
  & defineOn=Nodal, &
  & nns=6, nnt=2 )
CALL obj%Initiate( param=param, mesh=amesh )
CALL obj%Display( 'obj: ' )
```

The above code will initiate an instance of `STScalarMeshField_`, which will contain following data.

```txt
Object INITIATED: TRUE
name: aScalar
prefix: STScalarMeshField
fieldType: NORMAL              
engine: NATIVE_SERIAL
tSize: 484
defineOn: Nodal
rank: Scalar
varType: Space
shape: 
-------
   6   
val ALLOCATED: TRUE
mesh ASSOCIATED: TRUE
```

Let's try to understand the above code:

- We save data in a two dimensional array `val`.
- The number of rows in `val` for above example is `6`. This is because we have set `varType=Space`, which means the scalar data changes in `Space` inside the element. Note that the data does not change in time in an element.
- Because, we have set `varType=Space`, therefore `val(1:6)` denotes the value of scalar field at 6 nodes of element. Read more about the [Shape](/docs-api/AbstractMeshField/AbstractMeshField_) method.
- The number of columns in `val` is `484` (which is the total number of elements in the mesh), this is because the `fieldType=Regular` (i.e., changes across all the elements).

### Step 3:

```fortran
  CALL obj%Deallocate()
  CALL amesh%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
