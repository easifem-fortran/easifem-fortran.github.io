# Structure

LinSolver is a child of [AbstractLinSolver](../AbstractLinSolver/AbstractLinSolver_.md).

It uses the Sparsekit library and SuperLU library to solve the system of linear equation. All solvers are sequential solver.

```fortran
TYPE, EXTENDS(AbstractLinSolver_) :: LinSolver_
  PRIVATE
  INTEGER(I4B) :: ipar(IPAR_LENGTH) = 0
  REAL(DFP) :: fpar(FPAR_LENGTH) = 0.0_DFP
  REAL(DFP), ALLOCATABLE :: W(:)
```

![](./figures/LinSolver1.svg)
