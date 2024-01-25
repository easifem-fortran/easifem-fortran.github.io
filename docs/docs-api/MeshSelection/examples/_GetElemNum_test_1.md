This example demonstrates the usage of `getElemNum()` method.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE( MeshSelection_ ) :: obj
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: meshfile
TYPE(IntVector_) :: intvec

CALL meshfile%Initiate("./mesh.h5", mode="READ")
CALL meshfile%Open()

CALL dom%Initiate(meshfile, '')

CALL obj%Initiate( isSelectionByMeshID=.TRUE. )

CALL obj%Add( dim=2, meshID=[1])

CALL obj%Set()

intvec = obj%getElemNum(domain=dom, dim=2)
CALL Display(intvec, "getElemNum =", orient='row')

CALL obj%Deallocate()
CALL obj%Add(dim=1, meshID=[1,2])
CALL obj%Set()
intvec = obj%getElemNum(domain=dom, dim=1)
CALL Display(intvec, "getElemNum =", orient='row')

intvec = obj%getElemNum(domain=dom)
CALL Display(intvec, "getElemNum =", orient='row')

CALL obj%Deallocate()
END PROGRAM main
```
