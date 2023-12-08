
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( MeshSelection_ ) :: obj
  TYPE( HDF5File_ ) :: hdf5file

  CALL obj%Initiate( isSelectionByMeshID=.TRUE. )

  CALL obj%Add( dim=0, meshID=[1,2,3,4,5,6])
  CALL obj%Add( dim=1, meshID=[2,5,6,7])
  CALL obj%Add( dim=2, meshID=[1,3,5,6,8])
  CALL obj%Add( dim=3, meshID=[1,8])

  CALL obj%Set()

  CALL hdf5file%Initiate(filename="./TemplateMeshSelection.hdf5", &
    & mode="NEW")
  CALL hdf5file%Open()

  CALL obj%Export(hdf5=hdf5file, group='')

  CALL hdf5file%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
