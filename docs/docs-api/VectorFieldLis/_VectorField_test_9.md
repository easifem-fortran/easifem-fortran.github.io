In this example we test the [Set](./Set.md) method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( VectorFieldLis_ ) :: obj
  TYPE(ScalarFieldLis_) :: sfield
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

  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U2", &
    & engine=engine)
  CALL sfield%initiate( param, dom )

  tNodes = dom%getTotalNodes()
  CALL Reallocate(value, tNodes, 2)
  CALL Random_number(value)

  CALL sfield%set(value(:,1)) 
  CALL obj%set(value=sfield, spaceCompo=1)

  CALL sfield%set(value(:,2)) 
  CALL obj%set(value=sfield, spaceCompo=2)

  CALL obj%Display("obj = ")
  CALL Display(value(1:5, :), "value = " )

  CALL sfield%Deallocate()
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
# VAR :U
  DOF-1 ,    DOF-2 ,   
--------,  --------,   
0.738054,  0.705324,   
0.506670,  0.612765,   
0.745727,  0.175030,   
0.399520,  0.178766,   
0.106320,  0.667406,   

# spaceCompo = 2

     value =      
------------------
0.738054  0.705324
0.506670  0.612765
0.745727  0.175030
0.399520  0.178766
0.106320  0.667406
```
