```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
```

Declaring variables:

```fortran
TYPE(CSRMatrix_) :: csrmat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/small5.mtx"
REAL( DFP ), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:) 
INTEGER( I4B ) :: info
```

Import csrmatrix from matrix market.

```fortran
CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")
```

Allocate exact_sol, rhs and sol.

```fortran
CALL Reallocate(rhs, SIZE(csrmat, 1))
CALL Reallocate(sol, SIZE(csrmat, 2))
CALL Reallocate(exact_sol, SIZE(csrmat, 2))
```

```fortran
CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 10
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)
```

Calling Superlu LinSolve

```fortran
CALL LinSolve( &
  & X=sol, A=csrmat, B=rhs, &
  & isTranspose=.FALSE., &
  & isFactored=.FALSE., &
  & info=info, &
  & PrintStat=yes_no_t%NO)
```

If info is zero then we have success, otherwise we have error.

```fortran
IF(info .eq. 0) THEN
  CALL Display("Sucess in SuperluLinSolve")
  CALL Display(NORM2(sol - exact_sol), "Error = ")
  CALL Display(sol, "sol = ", ADVANCE="NO")
  CALL Display(exact_sol, "exact_sol = ", ADVANCE="YES")
else
  CALL Display("Failure in SuperluLinSolve")
  CALL Display(info, "info = ")
END IF
```

Let' solve `A*x=b` for another rhs.

```fortran
CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 50
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)
```

Calling Superlu LinSolve

```fortran
CALL LinSolve(&
  & X=sol, &
  & A=csrmat, &
  & B=rhs, &
  & isTranspose=.FALSE., &
  & isFactored=.TRUE., &
  & info=info, &
  & PrintStat=yes_no_t%NO)
```

If info is zero then we have success, otherwise we have error.

```fortran
IF(info .eq. 0) THEN
  CALL Display("Sucess in SuperluLinSolve")
  CALL Display(NORM2(sol - exact_sol), "Error = ")
  CALL Display(sol, "sol = ", ADVANCE="NO")
  CALL Display(exact_sol, "exact_sol = ", ADVANCE="YES")
else
  CALL Display("Failure in SuperluLinSolve")
  CALL Display(info, "info = ")
END IF
```

Let us clean up the memory.

```fortran
call Deallocate(csrmat)
```

```fortran
END PROGRAM main
```
