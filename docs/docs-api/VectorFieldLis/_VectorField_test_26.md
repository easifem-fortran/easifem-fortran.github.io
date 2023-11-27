In this example we test the [Get](./Get.md) method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( VectorFieldLis_ ) :: obj
  TYPE(ScalarField_) :: sfield
  TYPE( HDF5File_ ) :: meshfile
  TYPE( ParameterList_ ) :: param
  TYPE(FEVariable_) :: fevar
  INTEGER( I4B ) :: ierr
  INTEGER( I4B ), PARAMETER :: spaceCompo=2_I4B
  CHARACTER(*), PARAMETER :: engine = "LIS_OMP"
  REAL( DFP ), allocatable :: value(:, :)
  REAL( DFP ), allocatable :: gvalue2(:)
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

  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U2", &
    & engine="NATIVE_SERIAL")
  CALL sfield%initiate( param, dom )

  tNodes = dom%getTotalNodes()
  CALL Reallocate(value, spaceCompo, tNodes )
  CALL Random_number(value)
  CALL obj%set(value=value)

  CALL obj%get(value=sfield, spaceCompo=1)
  CALL sfield%Display("sfield spaceCompo=1")

  CALL obj%get(value=sfield, spaceCompo=2)
  CALL sfield%Display("sfield spaceCompo=2")

  CALL Display(value(:, 1:3), "value = " )

  CALL sfield%Deallocate()
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
#sfield spaceCompo=1

# VAR :U
  DOF-1 ,   
--------,   
0.519807,   
0.863731,   
0.859461,   
.
.
.

#sfield spaceCompo=2

# VAR :U
  DOF-1 ,   
--------,   
0.694878,   
0.496980,   
0.432369,   
.
.
.

          value =           
----------------------------
0.519807  0.863731  0.859461
0.694878  0.496980  0.432369
```
