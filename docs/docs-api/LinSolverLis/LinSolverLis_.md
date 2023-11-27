# Structure

LinSolver is a child of [AbstractLinSolver](../AbstractLinSolver/AbstractLinSolver_.md).

It uses the Sparsekit library and SuperLU library to solve the system of linear equation. All solvers are sequential solver.

```fortran
TYPE, EXTENDS(LinSolver_) :: LinSolverLis_
  INTEGER(INT64) :: lis_precon = 0
  INTEGER(INT64) :: lis_solver = 0
```

![](./figures/LinSolver1.svg)
