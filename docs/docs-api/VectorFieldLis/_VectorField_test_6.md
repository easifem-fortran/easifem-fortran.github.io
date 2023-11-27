In this example we test the [Set](./Set.md) method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( VectorFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  INTEGER( I4B ), PARAMETER :: spaceCompo=2_I4B
  CHARACTER(*), PARAMETER :: engine = "LIS_OMP"
  REAL( DFP ), allocatable :: value(:, :)
  INTEGER( I4B ) :: tNodes

  ! import domain
  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%open()
  CALL dom%initiate( hdf5=meshfile, group="" )
  CALL meshfile%Deallocate()


  ! set parameters for VectorField_
  CALL FPL_INIT()
  CALL param%initiate()
  CALL SetVectorFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U", &
    & engine=engine, &
    & spaceCompo=spaceCompo)

  CALL obj%initiate( param, dom )
  !! set a single entry
  tNodes = dom%getTotalNodes()
  CALL Reallocate(value, spaceCompo, tNodes)
  CALL Random_number(value)
  CALL obj%set(value=value)
  CALL obj%Display("obj = ")
  CALL Display(value(:,1:5), "value = ")

  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
# VAR :U
  DOF-1 ,    DOF-2 ,   
--------,  --------,   
0.105883,  0.138319,   
0.776870,  0.536113,   
0.902240,  0.461609,   
0.339396,  0.094361,   
0.364177,  0.100671,   
# spaceCompo = 2
                    value =                     
------------------------------------------------
0.105883  0.776870  0.902240  0.339396  0.364177
0.138319  0.536113  0.461609  0.094361  0.100671
```
