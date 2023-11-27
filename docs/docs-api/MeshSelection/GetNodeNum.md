# GetNodeNum

Returns the node number.

## Interface

```fortran
!----------------------------------------------------------------------------
!                                                      getNodeNum@getMethods
!----------------------------------------------------------------------------

!> authors: Vikas Sharma, Ph. D.
! date: 31 Aug 2021
! summary: This routine returns MeshID

INTERFACE
  MODULE FUNCTION meshSelect_getNodeNum1(obj) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION meshSelect_getNodeNum1
END INTERFACE

!----------------------------------------------------------------------------
!                                                      getNodeNum@getMethods
!----------------------------------------------------------------------------

!> authors: Vikas Sharma, Ph. D.
! date: 31 Aug 2021
! summary: This routine returns MeshID
!
! - [x] isSelectionByMeshID
! - [x] isSelectionByElemNum
! - [x] isSelectionByNodeNum
! - [  ] isSelectionByBox

INTERFACE
  MODULE FUNCTION meshSelect_getNodeNum2(obj, dim, domain) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dim
    CLASS(Domain_), INTENT(IN) :: domain
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION meshSelect_getNodeNum2
END INTERFACE

!----------------------------------------------------------------------------
!                                                      getNodeNum@getMethods
!----------------------------------------------------------------------------

!> authors: Vikas Sharma, Ph. D.
! date: 31 Aug 2021
! summary: This routine returns MeshID

INTERFACE
  MODULE FUNCTION meshSelect_getNodeNum3(obj, domain) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    CLASS(Domain_), INTENT(IN) :: domain
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION meshSelect_getNodeNum3
END INTERFACE

```
