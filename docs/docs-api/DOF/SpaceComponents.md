# SpaceComponents

## Interface

```fortran
!----------------------------------------------------------------------------
!                                                spacecomponents@getMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 16 Oct 2021
! summary: Returns the space components of each physical vars

INTERFACE
  MODULE PURE FUNCTION dof_spacecomponents1(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION dof_spacecomponents1
END INTERFACE

INTERFACE OPERATOR(.spacecomponents.)
  MODULE PROCEDURE dof_spacecomponents1
END INTERFACE

!----------------------------------------------------------------------------
!                                                spacecomponents@getMethod
!----------------------------------------------------------------------------

!> author: Vikas Sharma, Ph. D.
! date: 16 Oct 2021
! summary: Returns the space component of a given physical vars

INTERFACE
  MODULE PURE FUNCTION dof_spacecomponents2(obj, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B) :: ans
  END FUNCTION dof_spacecomponents2
END INTERFACE

INTERFACE OPERATOR(.spacecomponents.)
  MODULE PROCEDURE dof_spacecomponents2
END INTERFACE

```
