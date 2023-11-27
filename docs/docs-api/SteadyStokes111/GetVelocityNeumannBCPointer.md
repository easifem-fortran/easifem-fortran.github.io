
# GetVelocityNeumannBCPointer

This routine returns the pointer to Neumann boundary condition of Velocity field in [AbstractSteadyStokes_](../AbstractSteadyStokes/AbstractSteadyStokes_.md) kernel, that is `obj%NBCForVelocity(nbcNo)%ptr`.

- After obtaining the Neumann boundary condition pointer, user can set the boundary condition
- `nbcNo` should be lesser than total Neumann boundary condition.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION getVelocityNeumannBCPointer(obj, nbcNo) RESULT(ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    CLASS(NeumannBC_), POINTER :: ans
  END FUNCTION getVelocityNeumannBCPointer
END INTERFACE
```
