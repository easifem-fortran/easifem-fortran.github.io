# AddVelocityDirichletBC

This routine sets the Dirichlet boundary condition for Velocity field in [AbstractSTDBE_](AbstractSTDBE_.md) kernel.

- It makes `obj%DBCForVelocity(dbcNo)`
- `dbcNo` should be lesser than total dirichlet boundary condition for velocity field.

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_AddVelocityDirichletBC(obj, dbcNo, param, boundary)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE STDBE_AddVelocityDirichletBC
END INTERFACE
```
