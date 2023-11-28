---
sidebar_position: 2
---

# Structure

`AbstractBC_` is Abstract class for handling boundary conditions in finite element methods.

[See on GitHub](https://github.com/vickysharma0812/easifem-classes/blob/master/src/modules/AbstractBC/src/AbstractBC_Class.F90)

## Structure

```fortran
TYPE, ABSTRACT :: AbstractBC_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  !! It is true if the object is initiated
  TYPE(String) :: name
  !! name of boundary condition
  INTEGER(I4B) :: idof = default_idof
  !! degree of freedom number
  INTEGER(I4B) :: nodalValueType = default_nodalValueType
  !! Constant, Space, SpaceTime, Time
  LOGICAL(LGT) :: isNormal = default_isNormal
  !! True if the boundary condition is normal to the boundary
  LOGICAL(LGT) :: isTangent = default_isTangent
  !! True if the boundary condition is tangent to the boundary
  LOGICAL(LGT) :: useExternal = default_useExternal
  !! if true then nodal values are used externally
  !! depending upon the context.
  !! Basically we do not use the nodal value stored in the
  !! instance of AbstractBC_
  LOGICAL(LGT) :: isUserFunction = default_isUserFunction
  !! True if userFunction is set
  REAL(DFP), ALLOCATABLE :: nodalValue(:, :)
  !! nodal values are kept here,
  !! nodalValues( :, its ) denotes nodal values at time step its
  CLASS(UserFunction_), POINTER :: func => NULL()
  !! User function
  TYPE(MeshSelection_) :: boundary
  !! Boundary
  CLASS(Domain_), POINTER :: dom => NULL()
  !! Domain
```
