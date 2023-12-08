
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( MeshSelection_ ) :: obj
    TYPE( HDF5File_ ) :: hdf5file

    CALL hdf5file%Initiate(filename="./TemplateMeshSelection.hdf5", mode="READ")
    CALL hdf5file%OPEN()

    CALL obj%IMPORT(hdf5=hdf5file, group='')

    CALL obj%Set()

    CALL obj%Display('')

    CALL hdf5file%Deallocate()
    CALL obj%Deallocate()
END PROGRAM main
