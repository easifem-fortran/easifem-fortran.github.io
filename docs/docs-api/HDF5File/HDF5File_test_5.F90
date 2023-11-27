!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary:

! [[HDF5File_]]

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: obj
CHARACTER(LEN=*), PARAMETER :: filename = "./test-5.h5"
CALL obj%Initiate(filename=filename, mode="NEW")
CALL obj%Open()
CALL obj%Write(dsetname="data_in_root", vals=1.0_DFP)
CALL obj%Mkdir("/grp1")
CALL obj%Write(dsetname="/grp1/data_in_g1", vals=2.0_DFP)
CALL obj%Write(dsetname="/grp2/data_in_g2", vals=3.0_DFP)
CALL obj%Close()
CALL obj%Deallocate()
END PROGRAM main