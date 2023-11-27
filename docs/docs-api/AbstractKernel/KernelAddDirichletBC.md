# KernelAddDirichletBC

Add dirichlet boundary conditions.

```fortran
INTERFACE
  MODULE SUBROUTINE KernelAddDirichletBC(dbc, dbcNo, param, boundary, dom)
    TYPE(DirichletBCPointer_), INTENT(INOUT) :: dbc(:)
    INTEGER(I4B), INTENT(IN) :: dbcNo
  !! Dirichlet boundary number
    TYPE(ParameterList_), INTENT(IN) :: param
  !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
  !! Boundary region
    CLASS(Domain_), INTENT(IN) :: dom
  END SUBROUTINE KernelAddDirichletBC
END INTERFACE
```
