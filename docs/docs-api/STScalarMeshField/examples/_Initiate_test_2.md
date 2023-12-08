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
  & varType = Constant, &
  & fieldType=TypeField%Constant, &
  & engine='NATIVE_SERIAL', &
  & defineOn=Nodal, &
  & nns=6,  &
  & nnt=2 )
CALL obj%Initiate( param=param, mesh=amesh )
CALL obj%Display( 'obj: ' )
```

The above code will initiate an instance of `STScalarMeshField_`, which will the contain following data.

```txt
Object INITIATED: TRUE
name: aScalar
prefix: STScalarMeshField
fieldType: CONSTANT            
engine: NATIVE_SERIAL
tSize: 1
defineOn: Nodal
rank: Scalar
varType: Constant
shape: 
-------
   1   
val ALLOCATED: TRUE
mesh ASSOCIATED: TRUE
```

Let's try to understand the above code:

- We save data in a two dimensional array `val`.
- The number of rows in `val` for above example is 1. This is because the scalar data is constant in space and time inside the element. Because, we have set `varType=Constant`, all nodes (we have specified 6 nodes in space and 2 nodes in time) in an element has constant value. Read more about the [Shape](/docs-api/AbstractMeshField/AbstractMeshField_) method.
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
