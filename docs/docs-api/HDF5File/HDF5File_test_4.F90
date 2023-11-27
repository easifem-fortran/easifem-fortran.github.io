!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary:

! [[HDF5File_]]

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: obj
CHARACTER(LEN=*), PARAMETER :: filename = "./test-4.h5"
!> main
! #HDF5File/Initiate
CALL obj%Initiate(filename, mode="NEW")
! #HDF5File/Open
CALL obj%Open()
! #HDF5File/Mkdir
CALL obj%Mkdir("/grp1")
! #HDF5File/PathExists
CALL ok(obj%PathExists("/grp1"), 'obj%PathExists("/grp1")')
! #HDF5File/Ngrp
CALL ok(obj%Ngrp("/") .EQ. 1, 'obj%Ngrp("/")')
CALL obj%Mkdir("/grp2")
CALL ok(obj%PathExists("/grp2"), 'obj%PathExists("/grp2")')
CALL ok(obj%Ngrp("/") .EQ. 2, 'obj%Ngrp("/")')
CALL obj%Mkdir("/grp3/grp3a")
CALL ok(obj%PathExists("/grp3/grp3a"), 'obj%PathExists("/grp3/grp3a")')
CALL ok(obj%Ngrp("/") .EQ. 3, 'obj%Ngrp("/")')
CALL ok(obj%Ngrp("/grp3") .EQ. 1, 'obj%Ngrp("/grp3")')
CALL obj%Mkalldir("/grp4/grp4a/grp4a1")
CALL ok(obj%Ngrp("/") .EQ. 4, 'obj%Ngrp("/")')
CALL ok(obj%Ngrp("/grp4/grp4a") .EQ. 1, 'obj%Ngrp("/grp4/grp4a")')
CALL obj%Close()
CALL obj%Deallocate()
END PROGRAM main