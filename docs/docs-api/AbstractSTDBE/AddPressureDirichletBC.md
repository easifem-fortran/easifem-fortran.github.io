# AddPressureDirichletBC

This routine sets the Dirichlet boundary condition for pressure field in [AbstractSTDBE_](AbstractSTDBE_.md) kernel. It makes `obj%DBCForPressure(dbcNo)`.

- `dbcNo` should be lesser than total dirichlet boundary condition for pressure field

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_AddPressureDirichletBC(obj, dbcNo, param, boundary)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE STDBE_AddPressureDirichletBC
END INTERFACE
```
