# AddVelocityNeumannBC

This routine sets the Neumann boundary condition for Velocity field in [AbstractSTDBE_](AbstractSTDBE_.md) kernel.

- It makes `obj%NBCForVelocity(nbcNo)`
- `nbcNo` should be lesser than total Neumann boundary condition for velocity field.

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_AddVelocityNeumannBC(obj, nbcNo, param, boundary)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [NeumannBC_](NeumannBC_).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE STDBE_AddVelocityNeumannBC
END INTERFACE
```
