# AddDirichletBC

Add `DirichletBC` to a vector of `DirichletBCPointer_`.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface

```fortran
INTERFACE AddDirichletBC
  MODULE SUBROUTINE bc_AddDirichletBC(dbc, dbcNo, param, boundary, dom)
    TYPE(DirichletBCPointer_), INTENT(INOUT) :: dbc(:)
    !! Dirichlet boundary to form
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary number
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [[DirichletBC_]].
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
    CLASS(Domain_), INTENT(IN) :: dom
  END SUBROUTINE bc_AddDirichletBC
END INTERFACE AddDirichletBC
```
