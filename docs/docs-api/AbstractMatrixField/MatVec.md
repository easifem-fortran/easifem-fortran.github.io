# MatVec

Perform matrix vector multipliction

## Interface

```fortran
INTERFACE
  SUBROUTINE Matvec1(obj, x, y, isTranspose, addContribution, &
    & scale)
    IMPORT :: AbstractMatrixField_, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: y(:)
    !! Output vector y=Ax
    REAL(DFP), INTENT(IN) :: x(:)
    !! Input vector in y=Ax
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! True if we have to use TRANSPOSE of matrix
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
    !! Default is FALSE
    !! if true then we do not set y = 0, and perform
    !! y = y + matvec(obj, x)
    !! if false, then we perform y = matvec(obj, x)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
  END SUBROUTINE Matvec1
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE Matvec2(obj, x, y, isTranspose, addContribution, &
    & scale)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, LGT, DFP
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    CLASS(AbstractNodeField_), INTENT(INOUT) :: y
    !! Output vector y=Ax
    CLASS(AbstractNodeField_), INTENT(IN) :: x
    !! Input vector in y=Ax
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! True if we have to use TRANSPOSE of matrix
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
    !! Default is FALSE
    !! if true then we do not set y = 0, and perform
    !! y = y + matvec(obj, x)
    !! if false, then we perform y = matvec(obj, x)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
  END SUBROUTINE Matvec2
END INTERFACE
```

