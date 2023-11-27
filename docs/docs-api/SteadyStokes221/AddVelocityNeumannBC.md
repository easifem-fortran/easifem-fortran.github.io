# AddVelocityNeumannBC

This routine sets the Neumann boundary condition for Velocity field in [AbstractSteadyStokes_](../AbstractSteadyStokes/AbstractSteadyStokes_.md) kernel.

- It makes `obj%NBCForVelocity(nbcNo)`
- `nbcNo` should be lesser than total Neumann boundary condition for velocity field.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE addVelocityNeumannBC(obj, nbcNo, param, boundary)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [NeumannBC_](NeumannBC_).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE addVelocityNeumannBC
END INTERFACE
```

## Example
