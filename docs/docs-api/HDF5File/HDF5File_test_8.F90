!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary:

! [[HDF5File_]]

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: obj
CHARACTER(LEN=*), PARAMETER :: filename = "./test-8.h5"
REAL(Real32) :: val(10, 10)
CALL obj%Initiate(filename, mode="NEW")
CALL obj%Open()
CALL RANDOM_NUMBER(val)
CALL obj%Write(dsetname="data_in_root", vals=val)
CALL RANDOM_NUMBER(val)
CALL obj%Write(dsetname="/grp1/data_in_g1", vals=val)
CALL RANDOM_NUMBER(val)
CALL obj%Write(dsetname="/grp2/data_in_g2", vals=val)
CALL obj%Close()
CALL obj%Deallocate()
END PROGRAM main