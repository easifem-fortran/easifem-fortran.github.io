In this example we test the [Set](./Set.md) method.

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
  fevar = NodalVariable(value,  TypeFEVariableVector, TypeFEVariableSpace)

  CALL obj%set(value=fevar, globalNode=arange(1,9,2))

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
0.81261,  0.92517,   
0.00000,  0.00000,   
0.01027,  0.36023,   
0.00000,  0.00000,   
0.93390,  0.21450,   
0.00000,  0.00000,   
0.55010,  0.79631,   
0.00000,  0.00000,   
0.17921,  0.73774,   
0.00000,  0.00000,   

# spaceCompo = 2

                    value =                     
------------------------------------------------
0.812610  0.010274  0.933903  0.550104  0.179210
0.925171  0.360232  0.214504  0.796312  0.737745
```
