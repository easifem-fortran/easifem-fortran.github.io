# Initiate

This routine initiates the kernel.

```txt
! - Here `param` contains all the necessary components for initiating the
! state of the kernel.
! - Here `dom` is an instance of [[Domain_]], and it acts as a target of
! the kernel's domain pointer [[SteadyStokes111_:DomForPressure]]
! and [[SteadyStokes111_:DomForVelocity]].
! - `domains` is a one dimensional array of [[DomainPointer_]]
! - The size of domains should be 2
! - `domains(1)` acts as target for
! [[SteadyStokes111_:DomForVelocity]].
! - `domains(2)` acts as a target for [[SteadyStokes111_:DomForPressure]]
!
!@note
! In `param` one should have the options for initiating the instance of
! [[LinearSolver_]] of the kernel [[SteadyStokes111_]]. To this end
! user can call [[LinearSolver_Class:SetLinSolverParam]].
!@endnote
!
!@note
! No additional, memory is allocated for it. In this way, several kernels
! can work on a common domains
!@endnote
!
!## Tasks
!
! This subroutine performs the following tasks
!
! - Check if obj is initiated or not
! - Sets target to pointer of domain [[SteadyStokes111_:DomForPressure]]
! - Sets target to pointer of domain [[SteadyStokes111_:DomForVelocity]]
! - Sets [[SteadyStokes111_:isCommonDomain]], true if `dom` is present,
! else false.
! - sets [[SteadyStokes111_:DomainFileForPressure]] and
! [[SteadyStokes111_:DomainFileForVelocity]]
! - sets the [[Kernel_:engine]]
! - sets the [[Kernel_:name]]
! - sets the [[Kernel_:CoordinateSystem]]
! - sets the [[Kernel_:nnt]]
! - sets the [[Kernel_:nsd]]
! - sets the [[Kernel_:tDOF]]
! - sets the [[SteadyStokes111_:baseContinuityForVelocity]]
! - sets the [[SteadyStokes111_:baseInterpolationForVelocity]]
! - sets the [[SteadyStokes111_:quadratureTypeForVelocity]]
! - sets the [[SteadyStokes111_:baseContinuityForPressure]]
! - sets the [[SteadyStokes111_:baseInterpolationForPressure]]
! - sets the [[SteadyStokes111_:quadratureTypeForPressure]]
! - allocates the [[SteadyStokes111_:DBCForVelocity]]
! - allocates the [[SteadyStokes111_:DBCForPressure]]
! - sets the [[SteadyStokes111_:tFluidMaterials]]
! - allocates [[SteadyStokes111_:porousMaterial]]
! - allocates [[SteadyStokes111_:PorousMaterialToMesh]]
! - sets the [[SteadyStokes111_:tPorousMaterials]]
! - allocates [[SteadyStokes111_:fluidMaterial]]
! - allocates [[SteadyStokes111_:FluidMaterialToMesh]]
```

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SSF_Initiate(obj, param, dom, domains)
    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE SSF_Initiate
END INTERFACE
```

## Example

import EXAMPLE18 from "./_Initiate_test_1.md";

<EXAMPLE18 />
