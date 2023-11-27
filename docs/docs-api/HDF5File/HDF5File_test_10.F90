!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary:

! [[HDF5File_]]

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: obj
CHARACTER(LEN=*), PARAMETER :: filename = "./test.h5"
TYPE(String) :: val, names(2)
TYPE(String), ALLOCATABLE :: names_(:)
CALL obj%Initiate(filename, mode="NEW")
CALL obj%Open()
val = "name"
CALL obj%Write(dsetname="/name", vals=val)
CALL obj%WriteAttribute("/name", "name_attribute", "string attr")
names(1) = "hello"
names(2) = "world"
CALL obj%Write(dsetname="/names", vals=names)
CALL obj%Close()
CALL obj%Deallocate()
CALL obj%Initiate(filename, mode="READ")
CALL obj%Open()
CALL obj%Read(dsetname="/name", vals=val)
CALL ok(val .EQ. string("name"), 'obj%Read(dsetname="/name", vals=val)')
CALL obj%Read(dsetname="/names", vals=names_)
CALL ok(ALL(names_ .EQ. [string("hello"), string("world")]), &
& 'obj%Read(dsetname="/name", vals=val)')
CALL obj%Close()
CALL obj%Deallocate()
END PROGRAM main