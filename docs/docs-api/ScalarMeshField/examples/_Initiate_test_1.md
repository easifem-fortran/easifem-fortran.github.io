### Example 1 (Initiate by Parameter)

:::info
This example shows how to initiate an instance of [Mesh](/docs-api/Mesh) by reading data from mesh file, which is in [HDF5File_](/docs-api/HDF5File) format. We will also construct an instance of [ScalarMeshField_](/docs-api/ScalarMeshField).
:::

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( HDF5File_ ) :: meshfile
  TYPE( Mesh_ ) :: amesh
  TYPE( ScalarMeshField_ ) :: obj
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

Initiate an instance of [ScalarMeshField_](/docs-api/ScalarMeshField).

```fortran
CALL FPL_INIT(); CALL param%initiate()
CALL SetScalarMeshFieldParam( &
  & param=param, &
  & name='aScalar', &
  & varType = Constant, &
  & fieldType=TypeField%normal, &
  & engine='NATIVE_SERIAL', &
  & defineOn=Nodal, &
  & nns=6 )
CALL obj%Initiate( param=param, mesh=amesh )
CALL obj%Display( 'obj: ' )
```

The above code will initiate an instance of `ScalarMeshField_`, which will contain following data.

```txt
Object INITIATED: TRUE
name: aScalar
prefix: ScalarMeshField
fieldType: NORMAL              
engine: NATIVE_SERIAL
tSize: 484
defineOn: Nodal
rank: Scalar
varType: Constant
shape: 
-------
   6   
   0   
   0   
   0   
   0   
   0   
val: ALLOCATED
mesh: ASSOCIATED
```

Let's try to understand the following situation:

- We save data in a two dimensional array `val`.
- The number of rows in `val` for above example is `1`. Because, we have set `varType=Constant`, all nodes (we have specified 6 nodes) in an element have same value of scalar field. Read more about the [Shape](/docs-api/AbstractMeshField/Shape) method.
- The number of columns in `val` is `484`, which denotes the total number of elements in the mesh.

### Step 3:

```fortran
  CALL obj%Deallocate()
  CALL amesh%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
