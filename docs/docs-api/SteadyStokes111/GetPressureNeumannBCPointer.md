
# GetPressureNeumannBCPointer

This routine returns the pointer to Neumann boundary condition of pressure field in [AbstractSteadyStokes_](../AbstractSteadyStokes/AbstractSteadyStokes_.md) kernel, that is `obj%NBCForPressure(nbcNo)%ptr`.

- After obtaining the Neumann boundary condition pointer, user can set the boundary condition
- `nbcNo` should be lesser than total Neumann boundary condition

## Interface

```fortran
INTERFACE
  MODULE FUNCTION getPressureNeumannBCPointer(obj, nbcNo) RESULT(ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    CLASS(NeumannBC_), POINTER :: ans
  END FUNCTION getPressureNeumannBCPointer
END INTERFACE
```

## Example
