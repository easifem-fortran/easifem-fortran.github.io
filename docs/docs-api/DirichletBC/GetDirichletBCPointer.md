# GetDirichletBCPointer

Get the `DirichletBCPointer_`.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE GetDirichletBCPointer
  MODULE FUNCTION bc_GetDirichletBCPointer(dbc, dbcNo) RESULT(ans)
    CLASS(DirichletBCPointer_), INTENT(IN) :: dbc(:)
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    CLASS(DirichletBC_), POINTER :: ans
  END FUNCTION bc_GetDirichletBCPointer
END INTERFACE GetDirichletBCPointer
```
