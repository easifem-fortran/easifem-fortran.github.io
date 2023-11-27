---
title: RealMatrix example 71
author: Vikas Sharma, Ph. D.
date: 31 Jan 2022
update: 31 Jan 2022
tags:
  - RealMatrix/CG
---

# RealVector example 71

!!! note ""
    This example show how to USE `CG` method to solve `Ax=b` 

## Use association

- [[RealMatrix_]]

## Usage

!!! note "Start the PROGRAM"

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
```

!!! note "Declare variables"

```fortran
    REAL(DFP), ALLOCATABLE :: mat(:,:)
    REAL(DFP), ALLOCATABLE :: rhs(:), sol(:), ans(:)
    INTEGER(I4B) :: ii, n
    REAL(DFP), PARAMETER :: tol=1.0E-6
```

!!! note "Make mat, and rhs"

```fortran
    n = 4
    CALL Reallocate( mat, n, n )
    DO ii = 1, n
        mat(ii,ii)=1.0_DFP+sqrt(REAL(ii))
    END DO
    CALL display( mat, 'mat: ', advance='NO' )
    CALL Reallocate( sol, n, rhs, n, ans, n )
    CALL random_NUMBER( ans )
    ans = ans*10.0_DFP
    rhs = MATMUL(mat, ans)
    CALL display( rhs, 'rhs: ', advance='NO' )
    CALL display( ans, 'ans: ', advance='YES' )
```

!!! note "LinearSolver_CG"

```fortran
    CALL LinearSolver_CG( mat=mat, sol=sol, rhs=rhs )
    CALL OK( ALL( ABS(sol-ans) .LE. tol ) , 'CG: ' )
```


```fortran
END PROGRAM main
```
