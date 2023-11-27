# GetVelocityDirichletBCPointer

This routine returns the pointer to Dirichlet boundary condition of Velocity field in [AbstractSTDBE_](AbstractSTDBE_.md) kernel, that is  `obj%DBCForVelocity(dbcNo)%ptr`.

- After obtaining the Dirichlet boundary condition pointer, user can set the boundary condition
- `dbcNo` should be lesser than total dirichlet boundary condition

```fortran
INTERFACE
  MODULE FUNCTION STDBE_GetVelocityDirichletBCPointer(obj, dbcNo) RESULT(ans)
    CLASS(AbstractSTDBE_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    CLASS(DirichletBC_), POINTER :: ans
  END FUNCTION STDBE_GetVelocityDirichletBCPointer
END INTERFACE
```
