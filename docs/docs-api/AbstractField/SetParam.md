# SetParam

Set parameters of AbstractNodeField

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetParam(obj, isInitiated, fieldType, &
      & name, engine, comm, myRank, numProcs, gn, n, is, ie, lis_ptr, &
    & domain, domains, tSize, realVec, dof)
    CLASS(AbstractField_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isInitiated
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
    CHARACTER(*), OPTIONAL, INTENT(IN) :: name
    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: myRank
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: numProcs
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: gn
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: n
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: is
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ie
    INTEGER(INT64), OPTIONAL, INTENT(IN) :: lis_ptr
    TYPE(Domain_), OPTIONAL, TARGET, INTENT(IN) :: domain
    TYPE(DomainPointer_), OPTIONAL, INTENT(IN) :: domains(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tSize
    TYPE(RealVector_), OPTIONAL, INTENT(IN) :: realVec
    TYPE(DOF_), OPTIONAL, INTENT(IN) :: dof
  END SUBROUTINE SetParam
END INTERFACE
```
