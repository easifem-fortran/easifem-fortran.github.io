# Formats

## Yes_no_t

```fortran
TYPE :: yes_no_
  INTEGER(C_INT) :: NO, YES
END TYPE yes_no_

TYPE(yes_no_), PUBLIC, PARAMETER :: yes_no_t = yes_no_(NO, YES)
```

## Fact_t

```fortran
TYPE :: fact_
  INTEGER(C_INT) :: DOFACT, SamePattern, SamePattern_SameRowPerm, FACTORED
END TYPE fact_

TYPE(fact_), PUBLIC, PARAMETER :: fact_t = fact_(&
  & DOFACT, SamePattern, SamePattern_SameRowPerm, FACTORED)
```

## RowPerm_t

```fortran
TYPE :: rowperm_
  INTEGER(C_INT) :: NOROWPERM, LargeDiag_MC64, LargeDiag_HWPM, MY_PERMR
END TYPE rowperm_

TYPE(rowperm_), PUBLIC, PARAMETER :: rowperm_t = rowperm_( &
  & NOROWPERM, LargeDiag_MC64, LargeDiag_HWPM, MY_PERMR)
```

## ColPerm_t

```fortran

TYPE :: colperm_
  INTEGER(C_INT) :: NATURAL, MMD_ATA, MMD_AT_PLUS_A, COLAMD, &
   & METIS_AT_PLUS_A, PARMETIS, ZOLTAN, MY_PERMC
END TYPE

TYPE(colperm_), PUBLIC, PARAMETER :: colperm_t = colperm_(&
  & NATURAL, MMD_ATA, MMD_AT_PLUS_A, COLAMD, &
  & METIS_AT_PLUS_A, PARMETIS, ZOLTAN, MY_PERMC)

```

## Trans_t

```fortran
TYPE :: trans_
  INTEGER(C_INT) :: NOTRANS, TRANS, CONJ
END TYPE

TYPE(trans_), PARAMETER, PUBLIC :: trans_t = trans_(&
  & NOTRANS, TRANS, CONJ)
```

## DiagScale_t

```fortran

TYPE :: DiagScale_
  INTEGER(C_INT) :: NOEQUIL, ROW, COL, BOTH
END TYPE

TYPE(DiagScale_), PUBLIC, PARAMETER :: DiagScale_t = DiagScale_(&
& NOEQUIL, ROW, COL, BOTH)

```

## IterRefine_t

```fortran
TYPE :: IterRefine_
  INTEGER(C_INT) :: NOREFINE, SLU_SINGLE = 1, SLU_DOUBLE, SLU_EXTRA
END TYPE

TYPE(IterRefine_), PUBLIC, PARAMETER :: IterRefine_t = IterRefine_(&
  & NOREFINE, SLU_SINGLE, SLU_DOUBLE, SLU_EXTRA)

```

## MemType_t

```fortran
TYPE :: MemType_
  INTEGER(C_INT) :: USUB, LSUB, UCOL, LUSUP, LLVL, ULVL, NO_MEMTYPE
END TYPE MemType_

TYPE(MemType_), PUBLIC, PARAMETER :: MemType_t = MemType_(&
  & USUB, LSUB, UCOL, LUSUP, LLVL, ULVL, NO_MEMTYPE)

```

## Stack_end_t

```fortran

TYPE :: stack_end_
  INTEGER(C_INT) :: HEAD, TAIL
END TYPE

TYPE(stack_end_), PUBLIC, PARAMETER :: stack_end_t = stack_end_(&
 & HEAD, TAIL)
```

## LU_space_t

```fortran

TYPE :: LU_space_
  INTEGER(C_INT) :: SYSTEM, USER
END TYPE

TYPE(LU_space_), PARAMETER, PUBLIC :: LU_space_t = LU_space_(&
& SYSTEM, USER)
```

## Norm_t

```fortran

TYPE :: norm_
  INTEGER(C_INT) :: ONE_NORM, TWO_NORM, INF_NORM
END TYPE

TYPE(norm_), PUBLIC, PARAMETER :: norm_t = norm_(&
 & ONE_NORM, TWO_NORM, INF_NORM)

```

## Milu_t

```fortran

TYPE :: milu_
  INTEGER(C_INT) :: SILU, SMILU_1, SMILU_2, SMILU_3
END TYPE milu_

TYPE(milu_), PARAMETER, PUBLIC :: milu_t = milu_(&
  &  SILU, SMILU_1, SMILU_2, SMILU_3)

```

## MType_t

```fortran
TYPE :: Mtype_
  INTEGER(C_INT) :: SLU_GE
  INTEGER(C_INT) :: SLU_TRLU
  INTEGER(C_INT) :: SLU_TRUU
  INTEGER(C_INT) :: SLU_TRL
  INTEGER(C_INT) :: SLU_TRU
  INTEGER(C_INT) :: SLU_SYL
  INTEGER(C_INT) :: SLU_SYU
  INTEGER(C_INT) :: SLU_HEL
  INTEGER(C_INT) :: SLU_HEU
END TYPE Mtype_


TYPE(Mtype_), PUBLIC, PARAMETER :: Mtype_t = Mtype_(&
  & SLU_GE=SLU_GE, &
  & SLU_TRLU=SLU_TRLU, &
  & SLU_TRUU=SLU_TRUU, &
  & SLU_TRL=SLU_TRL, &
  & SLU_TRU=SLU_TRU, &
  & SLU_SYL=SLU_SYL, &
  & SLU_SYU=SLU_SYU, &
  & SLU_HEL=SLU_HEL, &
  & SLU_HEU=SLU_HEU)

```

## DType_t

```fortran
TYPE :: Dtype_
  INTEGER(C_INT) :: SLU_S
  INTEGER(C_INT) :: SLU_D
  INTEGER(C_INT) :: SLU_C
  INTEGER(C_INT) :: SLU_Z
END TYPE Dtype_


TYPE(Dtype_), PARAMETER, PUBLIC :: Dtype_t = Dtype_(&
  & SLU_S=SLU_S, &
  & SLU_D=SLU_D, &
  & SLU_C=SLU_C, &
  & SLU_Z=SLU_Z)

```

## SType_t

```fortran
TYPE :: Stype_
  INTEGER(C_INT) :: SLU_NC
  INTEGER(C_INT) :: SLU_NCP
  INTEGER(C_INT) :: SLU_NR
  INTEGER(C_INT) :: SLU_SC
  INTEGER(C_INT) :: SLU_SCP
  INTEGER(C_INT) :: SLU_SR
  INTEGER(C_INT) :: SLU_DN
  INTEGER(C_INT) :: SLU_NR_LOC
END TYPE Stype_


TYPE(Stype_), PARAMETER, PUBLIC :: Stype_t = Stype_(&
  & SLU_NC=SLU_NC, &
  & SLU_NCP=SLU_NCP, &
  & SLU_NR=SLU_NR, &
  & SLU_SC=SLU_SC, &
  & SLU_SCP=SLU_SCP, &
  & SLU_SR=SLU_SR, &
  & SLU_DN=SLU_DN, &
  & SLU_NR_LOC=SLU_NR_LOC &
  & )

```

## NCFormat

```fortran
! typedef struct {
!   int_t nnz;     /* number of nonzeros in the matrix */
!   void *nzval;   /* pointer to array of nonzero values, packed by column */
!   int_t *rowind; /* pointer to array of row indices of the nonzeros */
!   int_t *colptr; /* pointer to array of beginning of columns in nzval[]
!                     and rowind[]  */
!                  /* Note:
!                     Zero-based indexing is used;
!                     colptr[] has ncol+1 entries, the last one pointing
!                     beyond the last column, so that colptr[ncol] = nnz. */
! } NCformat;

TYPE, BIND(c) :: NCformat
  INTEGER(C_INT) :: nnz
  TYPE(C_PTR) :: nzval
  TYPE(C_PTR) :: rowind
  TYPE(C_PTR) :: colptr
END TYPE NCformat

PUBLIC :: NCformat
```

## NRFormat

```fortran
! typedef struct {
!   int_t nnz;     /* number of nonzeros in the matrix */
!   void *nzval;   /* pointer to array of nonzero values, packed by raw */
!   int_t *colind; /* pointer to array of columns indices of the nonzeros */
!   int_t *rowptr; /* pointer to array of beginning of rows in nzval[]
!                     and colind[]  */
!                  /* Note:
!                     Zero-based indexing is used;
!                     rowptr[] has nrow+1 entries, the last one pointing
!                     beyond the last row, so that rowptr[nrow] = nnz. */
! } NRformat;

TYPE, BIND(c) :: NRformat
  INTEGER(C_INT) :: nnz
  TYPE(C_PTR) :: nzval
  TYPE(C_PTR) :: colind
  TYPE(C_PTR) :: rowptr
END TYPE NRformat

PUBLIC :: NRformat
```

## SCformat

```fortran
! typedef struct {
!   int_t nnz;    /* number of nonzeros in the matrix */
!   int_t nsuper; /* number of supernodes, minus 1 */
!   void *nzval;  /* pointer to array of nonzero values, packed by column */
!   int_t *nzval_colptr; /* pointer to array of beginning of columns in nzval[] */
!   int_t *rowind;       /* pointer to array of compressed row indices of
!                           rectangular supernodes */
!   int_t
!       *rowind_colptr; /* pointer to array of beginning of columns in rowind[] */
!   int_t *col_to_sup;  /* col_to_sup[j] is the supernode number to which column
!                        j belongs; mapping from column to supernode number. */
!   int_t *sup_to_col;  /* sup_to_col[s] points to the start of the s-th
!                        supernode; mapping from supernode number to column.
!                        e.g.: col_to_sup: 0 1 2 2 3 3 3 4 4 4 4 4 4 (ncol=12)
!                              sup_to_col: 0 1 2 4 7 12           (nsuper=4) */
!                       /* Note:
!                          Zero-based indexing is used;
!                          nzval_colptr[], rowind_colptr[], col_to_sup and
!                          sup_to_col[] have ncol+1 entries, the last one
!                          pointing beyond the last column.
!                          For col_to_sup[], only the first ncol entries are
!                          defined. For sup_to_col[], only the first nsuper+2
!                          entries are defined. */
! } SCformat;
!

TYPE, BIND(c) :: SCformat
  INTEGER(C_INT) :: nnz
  INTEGER(C_INT) :: nsuper
  TYPE(C_PTR) :: nzval
  TYPE(C_PTR) :: nzval_colptr
  TYPE(C_PTR) :: rowind
  TYPE(C_PTR) :: rowind_colptr
  TYPE(C_PTR) :: col_to_sup
  TYPE(C_PTR) :: sup_to_col
END TYPE SCformat
```

## SCPformat

```fortran
! typedef struct {
!   int_t nnz;    /*number of nonzeros in the matrix*/
!   int_t nsuper; /*number of supernodes*/
!   void *nzval;  /* pointer to array of nonzero values, packed by column */
!   int_t*nzval_colbeg;  /*nzval_colbeg[j] points to beginning of column j
!                            in nzval[]*/
!   int_t *nzval_colend;  /* nzval_colend[j] points to one past the last element
!                            of column j in nzval[] */
!   int_t*rowind;        /*pointer to array of compressed row indices of
!                            rectangular supernodes*/
!   int_t *rowind_colbeg; /* rowind_colbeg[j] points to beginning of column j
!                            in rowind[] */
!   int_t*rowind_colend; /*rowind_colend[j] points to one past the last element
!                            of column j in rowind[]*/
!   int_t *col_to_sup;    /* col_to_sup[j] is the supernode number to which column
!                            j belongs; mapping from column to supernode. */
!   int_t*sup_to_colbeg; /*sup_to_colbeg[s] points to the start of the s-th
!                            supernode; mapping from supernode to column.*/
!   int_t *sup_to_colend; /* sup_to_colend[s] points to one past the end of the
!                            s-th supernode; mapping from supernode number to
!                            column.
!                         e.g.: col_to_sup: 0 1 2 2 3 3 3 4 4 4 4 4 4 (ncol=12)
!                               sup_to_colbeg: 0 1 2 4 7              (nsuper=4)
!                               sup_to_colend: 1 2 4 7 12                    */
!                         /* Note:
!                            Zero-based indexing is used;
!                            nzval_colptr[], rowind_colptr[], col_to_sup and
!                            sup_to_col[] have ncol+1 entries, the last one
!                            pointing beyond the last column.         */
! } SCPformat;

TYPE, BIND(c) :: SCPformat
  INTEGER(C_INT) :: nnz, nsuper
  TYPE(C_PTR) :: nzval, nzval_colbeg, nzval_colend, rowind, &
    & rowind_colbeg, rowindx_colend, col_to_sup, sup_to_colbeg, &
    & sup_to_colend
END TYPE SCPformat

PUBLIC :: SCPformat
```

## NCPformat

```fortran
! typedef struct {
!   int_t nnz;     /*number of nonzeros in the matrix*/
!   void *nzval;   /* pointer to array of nonzero values, packed by column */
!   int_t*rowind; /*pointer to array of row indices of the nonzeros*/
!   /*Note: nzval[]/rowind[] always have the same length*/
!   int_t *colbeg; /* colbeg[j] points to the beginning of column j in nzval[]
!                     and rowind[]  */
!   int_t*colend; /*colend[j] points to one past the last element of column
!                     j in nzval[] and rowind[]*/
!                  /*Note:
!                     Zero-based indexing is used;
!                     The consecutive columns of the nonzeros may not be
!                     contiguous in storage, because the matrix has been
!                     postmultiplied by a column permutation matrix.*/
! } NCPformat;

TYPE, BIND(c) :: NCPformat
  INTEGER(C_INT) :: nnz
  TYPE(C_PTR) :: nzval, rowindx, colbeg, colend
END TYPE NCPformat

PUBLIC :: NCPformat

```

## DNformat

```fortran
! typedef struct {
!   int_t lda;   /*leading dimension*/
!   void *nzval; /* array of size lda*ncol to represent a dense matrix*/
! } DNformat;

TYPE, BIND(c) :: DNformat
  INTEGER(C_INT) :: lda
  TYPE(C_PTR) :: nzval
END TYPE DNformat

PUBLIC :: DNformat
```

## `superlu_options_t`

```fortran
! typedef struct {
!     fact_t        Fact;
!     yes_no_t      Equil;
!     colperm_t     ColPerm;
!     trans_t       Trans;
!     IterRefine_t  IterRefine;
!     double        DiagPivotThresh;
!     yes_no_t      SymmetricMode;
!     yes_no_t      PivotGrowth;
!     yes_no_t      ConditionNumber;
!     rowperm_t     RowPerm;
!     int           ILU_DropRule;
!     double          ILU_DropTol;    /* threshold for dropping */
!     double          ILU_FillFactor; /* gamma in the secondary dropping */
!     norm_t          ILU_Norm;       /* infinity-norm, 1-norm, or 2-norm */
!     double          ILU_FillTol;    /* threshold for zero pivot perturbation */
!     milu_t          ILU_MILU;
!     double          ILU_MILU_Dim;   /* Dimension of PDE (if available) */
!     yes_no_t      ParSymbFact;
!     yes_no_t      ReplaceTinyPivot; /* used in SuperLU_DIST */
!     yes_no_t      SolveInitialized;
!     yes_no_t      RefineInitialized;
!     yes_no_t      PrintStat;
!     int           nnzL, nnzU;      /* used to store nnzs for now       */
!     int           num_lookaheads;  /* num of levels in look-ahead      */
!     yes_no_t      lookahead_etree; /* use etree computed from the
!                                       serial symbolic factorization */
!     yes_no_t      SymPattern;      /* symmetric factorization          */
! } superlu_options_t;
!

TYPE, BIND(C) :: superlu_options_t
  INTEGER(C_INT) :: Fact
  INTEGER(C_INT) :: Equil
  INTEGER(C_INT) :: ColPerm
  INTEGER(C_INT) :: Trans
  INTEGER(C_INT) :: IterRefine
  REAL(C_DOUBLE) :: DiagPivotThresh
  INTEGER(C_INT) :: SymmetricMode
  INTEGER(C_INT) :: PivotGrowth
  INTEGER(C_INT) :: ConditionNumber
  INTEGER(C_INT) :: RowPerm
  INTEGER(C_INT) :: ILU_DropRule
  REAL(C_DOUBLE) :: ILU_DropTol
  REAL(C_DOUBLE) :: ILU_FillFactor
  INTEGER(C_INT) :: ILU_Norm
  REAL(C_DOUBLE) :: ILU_FillTol
  INTEGER(C_INT) :: ILU_MILU; 
  REAL(C_DOUBLE) :: ILU_MILU_Dim
  INTEGER(C_INT) :: ParSymbFact
  INTEGER(C_INT) :: ReplaceTinyPivot
  INTEGER(C_INT) :: SolveInitialized
  INTEGER(C_INT) :: RefineInitialized
  INTEGER(C_INT) :: PrintStat = 0
  INTEGER(C_INT) :: nnzL
  INTEGER(C_INT) :: nnzU
  INTEGER(C_INT) :: num_lookaheads
  INTEGER(C_INT) :: lookahead_etree
  INTEGER(C_INT) :: SymPattern
END TYPE superlu_options_t
```

## SuperLUStat_t

```fortran
! typedef struct {
!     int     *panel_histo; /* histogram of panel size distribution */
!     double  *utime;       /* running time at various phases */
!     flops_t *ops;         /* operation count at various phases */
!     int     TinyPivots;   /* number of tiny pivots */
!     int     RefineSteps;  /* number of iterative refinement steps */
!     int     expansions;   /* number of memory expansions */
! } SuperLUStat_t;

TYPE, BIND(C) :: SuperLUStat_t
  ! INTEGER(C_INT), POINTER :: panel_histo(:)
  ! REAL(C_DOUBLE), POINTER :: utime(:)
  ! REAL(C_FLOAT), POINTER :: ops(:)
  TYPE(C_PTR) :: panel_histo
  TYPE(C_PTR) :: utime
  TYPE(C_PTR) :: ops
  INTEGER(C_INT) :: TinyPivots
  INTEGER(C_INT) :: RefineSteps
  INTEGER(C_INT) :: expansions
END TYPE SuperLUStat_t

PUBLIC :: SuperLUStat_t

```
