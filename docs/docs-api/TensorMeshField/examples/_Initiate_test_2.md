### Example 2

:::info
This example shows how to initiate an instance of [Mesh](/docs-api/Mesh) by reading data from mesh file, which is in [HDF5File_](/docs-api/HDF5File) format. We will also construct an instance of [VectorMeshField_](/docs-api/VectorMeshField).
:::

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( HDF5File_ ) :: meshfile
  TYPE( Mesh_ ) :: amesh
  TYPE( VectorMeshField_ ) :: obj
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

Initiate an instance of [VectorMeshField_](/docs-api/VectorMeshField).

```fortran
CALL FPL_INIT(); CALL param%initiate()
CALL SetVectorMeshFieldParam( &
  & param=param, &
  & name='aVector', &
  & varType = Constant, &
  & fieldType=TypeField%Constant, &
  & engine='NATIVE_SERIAL', &
  & defineOn=Nodal, &
  & nns=6,  &
  & spaceCompo=amesh%GetNSD() )
CALL obj%Initiate( param=param, mesh=amesh )
CALL obj%Display( 'obj: ' )
```

The above code will initiate an instance of `VectorMeshField_`, which will contain following data.

```txt
Object INITIATED: TRUE
name: aVector
prefix: VectorMeshField
fieldType: CONSTANT            
engine: NATIVE_SERIAL
tSize: 1
defineOn: Nodal
rank: Vector
varType: Constant
shape: 
-------
   2   
val ALLOCATED: TRUE
mesh ASSOCIATED: TRUE
```

Let's try to understand the above code:

- We save data in a two dimensional array `val`.
- The number of rows in `val` for above example is `1` (this is because the vector data is constant inside the element).
- Because, we have set `varType=Constant`, all nodes (we have specified 6 nodes) in an element have same vector value. Read more about the [Shape](/docs-api/AbstractMeshField/AbstractMeshField_) method.
- The number of columns in `val` is `1`, this is because the `fieldType=Constant` (i.e., constant across all the elements).

### Step 3:

```fortran
  CALL obj%Deallocate()
  CALL amesh%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
