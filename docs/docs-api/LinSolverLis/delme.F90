PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(Domain_) :: dom
TYPE(MatrixFieldLis_) :: obj
TYPE(HDF5File_) :: meshfile
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr
CHARACTER(*), PARAMETER :: engine = "LIS_OMP"
INTEGER(I4B) :: imesh
CLASS(Mesh_), POINTER :: meshptr
REAL(DFP), POINTER :: nodeCoord(:, :)
TYPE(RealMatrix_) :: xij
TYPE(IntVector_) :: nptrs

CALL FPL_INIT(); CALL param%Initiate()

CALL meshfile%Initiate(filename="./mesh.h5", mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, "")
CALL dom%InitiateNodeToNodes()
CALL meshfile%DEALLOCATE()

CALL SetMatrixFieldParam( &
  & param=param, &
  & name="K", &
  & matrixProp="UNSYM", &
  & spaceCompo=2, &
  & timeCompo=1, &
  & fieldType=FIELD_TYPE_NORMAL, &
  & engine=engine)

CALL obj%Initiate(param=param, dom=dom)

nodeCoord => dom%getNodeCoordPointer()

DO imesh = 1, dom%getTotalMesh(dim=dom%getNSD())
  meshptr => dom%getMeshPointer(dim=dom%getNSD(), entityNum=imesh)
  IF (meshptr%isEmpty()) CYCLE

  DO ielem = meshptr%getMinElemNumber(), meshptr%getMaxElemNumber()

    IF (.NOT. meshptr%isElementPresent(ielem)) CYCLE

    nptrs = mesh%getConnectivity(ielem)

    CALL Display(nptrs, "nptrs = ")

  END DO

END DO

NULLIFY (meshptr)
CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE()
CALL FPL_FINALIZE()
END PROGRAM main
