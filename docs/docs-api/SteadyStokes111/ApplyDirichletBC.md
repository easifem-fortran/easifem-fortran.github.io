# ApplyDirichletBC

This routine apply the Dirichlet boundary condition to pressure and velocity field.

- It also makes the `obj%DBCForPressure(dbcNo)`
- `dbcNo` should be lesser than total dirichlet boundary condition for pressure field.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE ApplyDirichletBC(obj)
    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj
  END SUBROUTINE ApplyDirichletBC
END INTERFACE
```

## Example

- [ ] TODO
