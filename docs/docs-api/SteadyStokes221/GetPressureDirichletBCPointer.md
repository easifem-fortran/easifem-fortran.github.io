# GetPressureDirichletBCPointer

This routine returns the pointer to Dirichlet boundary condition of pressure field in [AbstractSteadyStokes_](../AbstractSteadyStokes/AbstractSteadyStokes_.md) kernel, that is `obj%DBCForPressure(dbcNo)%ptr`.

- After obtaining the Dirichlet boundary condition pointer, user can set the
boundary condition
- `dbcNo` should be lesser than total dirichlet boundary condition

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetPressureDirichletBCPointer(obj, dbcNo) RESULT(ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    CLASS(DirichletBC_), POINTER :: ans
  END FUNCTION GetPressureDirichletBCPointer
END INTERFACE
```

## Example
