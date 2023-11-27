# ApplyDirichletBC

This routine sets the Dirichlet boundary condition for pressure field in [AbstractSteadyStokes_](../AbstractSteadyStokes/AbstractSteadyStokes_.md) kernel.

- It also makes the `obj%DBCForPressure(dbcNo)`
- `dbcNo` should be lesser than total dirichlet boundary condition for pressure field.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE addPressureDirichletBC(obj, dbcNo, param, boundary)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE addPressureDirichletBC
END INTERFACE
```

## Example
