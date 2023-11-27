# ILUSolve

ILU Solver

## Interface

```fortran
! If transp is absent or it is false then:
! This routine solves (LU) sol = rhs
! sol and rhs are fortran real vector
! The LU decomposition is stored inside the AbstractMatrixField_.
! Note that sol should be allocated by the user, and size of sol should be
! same as the size of rhs
!
! If transp is present and it is true then:
!
! If transp is present and it is true then this subroutine solves
! (LU)^T sol = rhs

INTERFACE
  SUBROUTINE ILUSOLVE1(obj, sol, rhs, isTranspose)
    IMPORT :: AbstractMatrixField_, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(INOUT) :: sol(:)
    !! Output vector y=Ax
    REAL(DFP), INTENT(IN) :: rhs(:)
    !! Input vector in y=Ax
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
  END SUBROUTINE ILUSOLVE1
END INTERFACE
```


```fortran
! If transp is not present or it is false then:
! This routine solves (LU) sol = rhs
! sol and rhs are [[AbstractNodeField_]]
! The LU decomposition is stored inside the AbstractMatrixField_.
!
! If transp is present and it is true then this subroutine solves
! (LU)^T sol = rhs


INTERFACE
  SUBROUTINE ILUSOLVE2(obj, sol, rhs, isTranspose)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    CLASS(AbstractNodeField_), INTENT(INOUT) :: sol
    !! Output vector
    CLASS(AbstractNodeField_), INTENT(IN) :: rhs
    !! Input vector, rhs
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
  END SUBROUTINE ILUSOLVE2
END INTERFACE
```
