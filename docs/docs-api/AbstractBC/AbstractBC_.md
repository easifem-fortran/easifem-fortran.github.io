# AbstractBC

Abstract classs for handling boundary conditions in finite element methods.

## Structure

```fortran
TYPE, ABSTRACT :: AbstractBC_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  TYPE(String) :: name
  INTEGER(I4B) :: idof = 0
  INTEGER(I4B) :: nodalValueType = -1
    !! Constant, Space, Time, SpaceTime
  LOGICAL(LGT) :: useFunction = .FALSE.
    !! True if the boundary condition is analytical
  REAL(DFP), ALLOCATABLE :: nodalValue(:, :)
    !! nodal values are kept here,
    !! nodalValues( :, its ) denotes nodal values at
    !! time step its
  PROCEDURE(iface_SpaceTimeFunction), POINTER, NOPASS :: &
    & SpaceTimeFunction => NULL()
    !! SpaceTime Functions
  PROCEDURE(iface_SpaceFunction), POINTER, NOPASS :: &
    & SpaceFunction => NULL()
    !! Space Function
  PROCEDURE(iface_TimeFunction), POINTER, NOPASS :: &
    & TimeFunction => NULL()
    !! Time Function
  TYPE(MeshSelection_) :: boundary
    !! Boundary
  CLASS(Domain_), POINTER :: dom => NULL()
    !! Domain
```
