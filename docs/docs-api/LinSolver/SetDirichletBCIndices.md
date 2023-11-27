# SetDirichletBCIndices

Set the Dirichlet boundary condition indices.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE SetDirichletBCIndices(obj, indx)
    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: indx(:)
  END SUBROUTINE SetDirichletBCIndices
END INTERFACE
```
