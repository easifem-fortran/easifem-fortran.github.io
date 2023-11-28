PROGRAM main
USE easifemBase
USE easifemClasses

TYPE(MSHFile_) :: mshFile
CHARACTER(*), PARAMETER :: mshFileName = "./mesh3D.msh"
CHARACTER(LEN=*), PARAMETER :: domainFileName = "./mesh3D.h5"
TYPE(HDF5File_) :: domainFile

CALL mshFile%Initiate(fileName=mshFileName, status="OLD", action="READ")
CALL mshFile%OPEN()
CALL mshFile%READ()
CALL domainFile%Initiate(filename=domainFileName, mode="NEW")
CALL domainFile%OPEN()
CALL mshFile%Export(hdf5=domainFile, group="")
CALL domainFile%DEALLOCATE()
CALL mshFile%DEALLOCATE()
END PROGRAM main
