# GetPressureDirichletBCPointer

This routine returns the pointer to Dirichlet boundary condition of pressure field in [AbstractSTDBE_](AbstractSTDBE_.md) kernel, that is
`obj%DBCForPressure(dbcNo)%ptr`.

- After obtaining the Dirichlet boundary condition pointer, user can set the boundary condition
- `dbcNo` should be lesser than total dirichlet boundary condition

```fortran
INTERFACE
  MODULE FUNCTION STDBE_GetPressureDirichletBCPointer(obj, dbcNo) RESULT(ans)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    CLASS(DirichletBC_), POINTER :: ans
  END FUNCTION STDBE_GetPressureDirichletBCPointer
END INTERFACE
```
