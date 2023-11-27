# SuperluLinSolve

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE LinSolve1(X, A, B, isTranspose, isFactored, &
    & ColPerm, Equil, IterRefine, PivotGrowth, DiagPivotThresh, &
    & ConditionNumber, SymmetricMode, PrintStat, info)
    REAL(DFP), INTENT(INOUT) :: X(:)
    !! Solution
    TYPE(CSRMatrix_), INTENT(INOUT) :: A
    !! CSRMatrix
    REAL(DFP), INTENT(IN) :: B(:)
    !! RHS, it will not be modified, we will make a copy of it
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! Should we solve `A*X=B` or `transpose(A)*X=B`
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isFactored
    !! is A already factored
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ColPerm
    !! Colperm_t%NATURAL
    !! Colperm_t%MMD_ATA
    !! Colperm_t%MMD_AT_PLUS_A
    !! Colperm_t%COLAMD
    !! Colperm_t%MY_PERMC
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: Equil
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: IterRefine
    !! IterRefine_t%NO
    !! IterRefine_t%SLU_SINGLE
    !! IterRefine_t%SLU_DOUBLE
    !! IterRefine_t%SLU_EXTRA
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PivotGrowth
    !! yes_no_t%YES
    !! yes_no_t%NO
    REAL(DFP), OPTIONAL, INTENT(IN) :: DiagPivotThresh
    !! between 0 and 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ConditionNumber
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: SymmetricMode
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PrintStat
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: info
    !! if info equal  to zero then success, else failure
  END SUBROUTINE LinSolve1
END INTERFACE
```

```fortran
INTERFACE
  MODULE SUBROUTINE LinSolve2(X, A, B, isTranspose, isFactored, &
    & ColPerm, Equil, IterRefine, PivotGrowth, DiagPivotThresh, &
    & ConditionNumber, SymmetricMode, PrintStat, info)
    REAL(DFP), INTENT(INOUT) :: X(:, :)
    !! Solution
    TYPE(CSRMatrix_), INTENT(INOUT) :: A
    !! CSRMatrix
    REAL(DFP), INTENT(IN) :: B(:, :)
    !! RHS, it will not be modified, we will make a copy of it
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! Should we solve `A*X=B` or `transpose(A)*X=B`
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isFactored
    !! is A already factored
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ColPerm
    !! Colperm_t%NATURAL
    !! Colperm_t%MMD_ATA
    !! Colperm_t%MMD_AT_PLUS_A
    !! Colperm_t%COLAMD
    !! Colperm_t%MY_PERMC
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: Equil
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: IterRefine
    !! IterRefine_t%NO
    !! IterRefine_t%SLU_SINGLE
    !! IterRefine_t%SLU_DOUBLE
    !! IterRefine_t%SLU_EXTRA
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PivotGrowth
    !! yes_no_t%YES
    !! yes_no_t%NO
    REAL(DFP), OPTIONAL, INTENT(IN) :: DiagPivotThresh
    !! between 0 and 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ConditionNumber
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: SymmetricMode
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PrintStat
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: info
    !! if info equal  to zero then success, else failure
  END SUBROUTINE LinSolve2
END INTERFACE

```

```fortran
INTERFACE
  MODULE SUBROUTINE LinSolve3(A, B, isTranspose, isFactored, &
    & ColPerm, Equil, IterRefine, PivotGrowth, DiagPivotThresh, &
    & ConditionNumber, SymmetricMode, PrintStat, info)
    TYPE(CSRMatrix_), INTENT(INOUT) :: A
    !! CSRMatrix
    REAL(DFP), INTENT(INOUT) :: B(:)
    !! RHS, it will not be modified, we will make a copy of it
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! Should we solve `A*X=B` or `transpose(A)*X=B`
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isFactored
    !! is A already factored
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ColPerm
    !! Colperm_t%NATURAL
    !! Colperm_t%MMD_ATA
    !! Colperm_t%MMD_AT_PLUS_A
    !! Colperm_t%COLAMD
    !! Colperm_t%MY_PERMC
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: Equil
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: IterRefine
    !! IterRefine_t%NO
    !! IterRefine_t%SLU_SINGLE
    !! IterRefine_t%SLU_DOUBLE
    !! IterRefine_t%SLU_EXTRA
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PivotGrowth
    !! yes_no_t%YES
    !! yes_no_t%NO
    REAL(DFP), OPTIONAL, INTENT(IN) :: DiagPivotThresh
    !! between 0 and 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ConditionNumber
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: SymmetricMode
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PrintStat
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: info
    !! if info equal  to zero then success, else failure
  END SUBROUTINE LinSolve3
END INTERFACE
```

```fortran
INTERFACE
  MODULE SUBROUTINE LinSolve4(A, B, isTranspose, isFactored, &
    & ColPerm, Equil, IterRefine, PivotGrowth, DiagPivotThresh, &
    & ConditionNumber, SymmetricMode, PrintStat, info)
    TYPE(CSRMatrix_), INTENT(INOUT) :: A
    !! CSRMatrix
    REAL(DFP), INTENT(INOUT) :: B(:, :)
    !! RHS, it will be modified on return, solution is in B
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! Should we solve `A*X=B` or `transpose(A)*X=B`
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isFactored
    !! is A already factored
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ColPerm
    !! Colperm_t%NATURAL
    !! Colperm_t%MMD_ATA
    !! Colperm_t%MMD_AT_PLUS_A
    !! Colperm_t%COLAMD
    !! Colperm_t%MY_PERMC
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: Equil
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: IterRefine
    !! IterRefine_t%NO
    !! IterRefine_t%SLU_SINGLE
    !! IterRefine_t%SLU_DOUBLE
    !! IterRefine_t%SLU_EXTRA
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PivotGrowth
    !! yes_no_t%YES
    !! yes_no_t%NO
    REAL(DFP), OPTIONAL, INTENT(IN) :: DiagPivotThresh
    !! between 0 and 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ConditionNumber
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: SymmetricMode
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: PrintStat
    !! yes_no_t%YES
    !! yes_no_t%NO
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: info
    !! if info equal  to zero then success, else failure
  END SUBROUTINE LinSolve4
END INTERFACE

```
