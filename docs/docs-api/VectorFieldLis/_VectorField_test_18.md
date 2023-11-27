In this example we test the [Get](./Get.md) method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( VectorFieldLis_ ) :: obj
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

  tNodes = dom%getTotalNodes()
  CALL Reallocate(value, spaceCompo, tNodes )
  CALL Random_number(value)
  CALL obj%set(value=value)

  CALL obj%get(value=gvalue2, globalNode=1)
  CALL Display(gvalue2, "get value = ")
  CALL Display(value(:, 1), "value = " )


  CALL obj%get(value=gvalue2, spaceCompo=1)
  CALL Display(gvalue2(1:5), "get value = ")
  CALL Display(value(1, 1:5), "value = " )



  CALL obj%get(value=gvalue2, spaceCompo=2)
  CALL Display(gvalue2(1:5), "get value = ")
  CALL Display(value(2, 1:5), "value = " )

  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
get value = 
------------
  0.727264  
  0.750058  

value = 
--------
0.727264
0.750058

get value = 
------------
  0.727264  
  0.499740  
  0.700378  
  0.080211  
  0.538988  

value = 
--------
0.727264
0.499740
0.700378
0.080211
0.538988

get value = 
------------
  0.750058  
  0.752978  
  0.253472  
  0.212196  
  0.251230  

value = 
--------
0.750058
0.752978
0.253472
0.212196
0.251230
```
