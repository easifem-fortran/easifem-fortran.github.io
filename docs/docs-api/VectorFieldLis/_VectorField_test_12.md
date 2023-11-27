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

  CALL Reallocate(value, spaceCompo, 5)
  CALL Random_number(value)

  CALL obj%set(value=value(1, :), globalNode=arange(1,9,2), spaceCompo=1)
  CALL obj%set(value=value(2, :), globalNode=arange(1,9,2), spaceCompo=2)

  CALL obj%Display("obj = ")
  CALL Display(value, "value = " )

  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
# VAR :U
 DOF-1 ,   DOF-2 ,   
-------,  -------,   
0.09481,  0.15114,   
0.00000,  0.00000,   
0.38468,  0.35513,   
0.00000,  0.00000,   
0.22618,  0.31620,   
0.00000,  0.00000,   
0.89788,  0.49047,   
0.00000,  0.00000,   
0.51690,  0.75084,   
0.00000,  0.00000,   

# spaceCompo = 2

                    value =                     
------------------------------------------------
0.094808  0.384675  0.226182  0.897879  0.516903
0.151140  0.355134  0.316202  0.490471  0.750835
```
