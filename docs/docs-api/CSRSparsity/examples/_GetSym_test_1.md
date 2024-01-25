```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(CSRSparsity_) :: obj, symobj
TYPE(DOF_) :: dofobj
INTEGER(I4B) :: i

CALL Initiate( &
  & obj=dofobj, &
  & tNodes=[5], &
  & names=['K'], &
  & spaceCompo=[1], &
  & timeCompo=[1], &
  & storageFMT=FMT_DOF)

CALL Initiate( &
  & obj, &
  & ncol=(.tnodes.dofobj), &
  & nrow=(.tNodes.dofobj),  &
  & idof=dofobj, &
  & jdof=dofobj)

CALL setSparsity(obj=obj, row=1, col=[1, 3, 4], ivar=1, jvar=1)
CALL setSparsity(obj=obj, row=2, col=[1, 2], ivar=1, jvar=1)
CALL setSparsity(obj=obj, row=3, col=[2, 3], ivar=1, jvar=1)
CALL setSparsity(obj=obj, row=4, col=[4, 5], ivar=1, jvar=1)
CALL setSparsity(obj=obj, row=5, col=[1, 2, 5], ivar=1, jvar=1)
CALL setSparsity(obj)

CALL Display(obj, "obj = ")
CALL GetSym(obj=obj, symobj=symobj, from="U")
CALL Display(symobj, "symobj = ")

CALL DEALLOCATE (dofobj)
CALL DEALLOCATE (obj)
CALL DEALLOCATE (symobj)
END PROGRAM main
```
