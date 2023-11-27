!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary:

! [[HDF5File_]]

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: obj
CHARACTER(LEN=*), PARAMETER :: filename = "./test-9.h5"
REAL(Real64) :: time0, dummyVec(100), dummyMat(10, 10)
REAL(Real64), ALLOCATABLE :: v1(:), k1(:, :)
CALL obj%Initiate(filename, mode="NEW")
CALL obj%Open()
time0 = 2.0
CALL obj%Write(dsetname="/time0", vals=time0)
CALL RANDOM_NUMBER(dummyVec)
CALL obj%Write(dsetname="/rank_1/v1", vals=dummyVec)
CALL RANDOM_NUMBER(dummyMat)
CALL obj%Write(dsetname="/rank_2/k1", vals=dummyMat)
CALL obj%Close()
CALL obj%Deallocate()
CALL obj%Initiate(filename, mode="READ")
CALL obj%Open()
CALL obj%Read(dsetname="/time0", vals=time0)
CALL obj%Read(dsetname="/rank_1/v1", vals=v1)
CALL obj%Read(dsetname="/rank_2/k1", vals=k1)
CALL obj%Close()
CALL obj%Deallocate()
END PROGRAM main