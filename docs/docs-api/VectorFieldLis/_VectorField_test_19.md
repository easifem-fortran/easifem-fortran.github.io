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
  REAL( DFP ), allocatable :: gvalue2(:, :)
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

  CALL obj%get(value=gvalue2)
  CALL Display(gvalue2(:, 1:3), "get value = ")
  CALL Display(value(:, 1:3), "value = " )


  CALL obj%get(value=gvalue2, force3D=.TRUE.)
  CALL Display(gvalue2(:, 1:3), "get value = ")
  CALL Display(value(:, 1:3), "value = " )


  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
        get value =         
----------------------------
0.915694  0.970185  0.042086
0.762392  0.917667  0.860571

          value =           
----------------------------
0.915694  0.970185  0.042086
0.762392  0.917667  0.860571

       get value =       
-------------------------
0.91569  0.97018  0.04209
0.76239  0.91767  0.86057
0.00000  0.00000  0.00000

          value =           
----------------------------
0.915694  0.970185  0.042086
0.762392  0.917667  0.860571
```
