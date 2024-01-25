### Example 4

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
  & varType =Time, &
  & fieldType=TypeField%Normal, &
  & engine='NATIVE_SERIAL', &
  & defineOn=Nodal, &
  & nns=6,  &
  & spaceCompo=amesh%GetNSD() )
CALL obj%Initiate( param=param, mesh=amesh )
CALL obj%Display( 'obj: ' )
call display(amesh%GetTotalElements(), "total elements: " )
```

The above code will initiate an instance of `VectorMeshField_`, which will contain following data.

```txt
Object INITIATED: TRUE
name: aVector
prefix: VectorMeshField
fieldType: NORMAL              
engine: NATIVE_SERIAL
tSize: 484
defineOn: Nodal
rank: Vector
varType: Time
shape: 
-------
   2   
   6   
val ALLOCATED: TRUE
mesh ASSOCIATED: TRUE
total elements: 484
```

Let's try to understand the above code:

- We save data in a two dimensional array `val`.
- The number of rows in `val` for above example is `12 (6x2)`. This is because we have set `varType=Time`, which means the vector data changes in `Time` inside the element.
- Because, we have set `varType=Time`, therefore `val(1:12, iel)` denotes the value of vector field at 6 time-nodes of element. Read more about the [Shape](/docs-api/AbstractMeshField/AbstractMeshField_) method.
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
