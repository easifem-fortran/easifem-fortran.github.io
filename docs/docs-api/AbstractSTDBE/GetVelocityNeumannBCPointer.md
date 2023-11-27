# GetVelocityNeumannBCPointer

This routine returns the pointer to Neumann boundary condition of Velocity field in [AbstractSTDBE_](AbstractSTDBE_.md) kernel, that is `obj%NBCForVelocity(nbcNo)%ptr`.

- After obtaining the Neumann boundary condition pointer, user can set the boundary condition
- `nbcNo` should be lesser than total Neumann boundary condition

```fortran
INTERFACE
  MODULE FUNCTION STDBE_GetVelocityNeumannBCPointer(obj, nbcNo) RESULT(ans)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    CLASS(NeumannBC_), POINTER :: ans
  END FUNCTION STDBE_GetVelocityNeumannBCPointer
END INTERFACE
```

