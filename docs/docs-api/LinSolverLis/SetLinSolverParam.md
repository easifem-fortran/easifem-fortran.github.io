# SetLinSolverParam

Set the essential parameters required to construct an instance of linear solver.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setLinSolverParam( &
    & param, &
    & solverName, &
    & preconditionOption, &
    & convergenceIn, &
    & convergenceType, &
    & maxIter, &
    & relativeToRHS, &
    & KrylovSubspaceSize, &
    & rtol, &
    & atol, &
    & scale, &
    & initx_zeros, &
    & bicgstab_ell, &
    & sor_omega, &
    & p_name, &
    & p_ilu_lfil, &
    & p_ilu_mbloc, &
    & p_ilu_droptol, &
    & p_ilu_permtol, &
    & p_ilu_alpha, &
    & p_ilu_fill, &
    & p_ssor_omega, &
    & p_hybrid_i, &
    & p_hybrid_maxiter, &
    & p_hybrid_tol, &
    & p_hybrid_omega, &
    & p_hybrid_ell, &
    & p_hybrid_restart, &
    & p_is_alpha, &
    & p_is_m, &
    & p_sainv_drop, &
    & p_saamg_unsym, &
    & p_saamg_theta, &
    & p_iluc_drop, &
    & p_iluc_rate, &
    & p_adds, &
    & p_adds_iter &
    & )
    TYPE(ParameterList_), INTENT(INOUT) :: param
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: solverName
    !! Solver name
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: preconditionOption
    !! precondition option
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceIn
    !! convergenceInRes
    !! convergenceInSol
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceType
    !! relativeConvergence
    !! absoluteConvergence
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! maximum iteration
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: relativeToRHS
    !! relative to RHS
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: KrylovSubspaceSize
    !! KrylovSubspaceSize
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtol
    !! relative tolerance
    REAL(DFP), OPTIONAL, INTENT(IN) :: atol
    !! absolute tolerance
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: scale
    !! LIS, Solver digonal scaling
    !! scale_none: No scaling
    !! scale_jacobi: jacobi scaling inv(D)Ax = inv(D)b
    !! scale_symm_diag: sqrt(inv(D)) A sqrt(inv(D)) x = sqrt(inv(D))b
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: initx_zeros
    !! if True, then we set sol=0.0 as initial guess.
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: bicgstab_ell
    !! Needed for solver BiCGSTABL
    REAL(DFP), OPTIONAL, INTENT(IN) :: sor_omega
    !! The relaxation coefficient
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_name
    !! Name of preconditioner
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_ilu_lfil
    !! Sparsekit, ilu
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_ilu_mbloc
    !! Sparsekit, ilu
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ilu_droptol
    !! Sparsekit, ilu
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ilu_permtol
    !! Sparsekit, ilu
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ilu_alpha
    !! Sparsekit, ilu, alpha
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_ilu_fill
    !! ILU, fill-in
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ssor_omega
    !! The relaxation coefficient omega in (0.0, 2.0)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_i
    !! Hybrid, the linear solver, for example, SSOR, GMRES,
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_maxiter
    !! Hybrid, maximum number of iterations
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_hybrid_tol
    !! Hybrid, convergence tolerance
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_hybrid_omega
    !! Hybrid, The relaxation coefficient omega of the SOR
    !! omega should be in (0.0, 2.0)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_ell
    !!Hybrid, The degree l of the BiCGSTAB(l)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_restart
    !! Hybrid, The restart value of GMRES and Orthomin
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_is_alpha
    !! I+S, The parameter alpha of $I + \alpha {S}^{m}$
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_is_m
    !! I+S, The parameter m of $I + \alpha {S}^{m}$
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_sainv_drop
    !! SA-AMG, The drop criteria
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: p_saamg_unsym
    !! SA-AMG, Select the unsymmetric version
    !! The matrix structure must be symmetric
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_saamg_theta
    !! SA-AMG, The drop criteria
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_iluc_drop
    !! Crout ILU, default is 0.05, The drop criteria
    REAL(DFP), OPTIONAL, INTENT(IN) :: p_iluc_rate
    !! Crout ILU, The ratio of the maximum fill-in
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: p_adds
    !! ilut Additive Schwarz, default is true
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_adds_iter
    !! default value is 1
    !! ILUT Additive Schwarz number of iteration
  END SUBROUTINE setLinSolverParam
END INTERFACE
```
