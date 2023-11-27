# GetParam

Get parameters of AbstractField.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetParam(obj, isInitiated, fieldType, &
      & name, engine, comm, myRank, numProcs, gn, n, is, ie, lis_ptr, &
    & domain, domains, tSize, realVec, dof)
    CLASS(AbstractField_), INTENT(IN) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isInitiated
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: fieldType
    CHARACTER(*), OPTIONAL, INTENT(OUT) :: name
    CHARACTER(*), OPTIONAL, INTENT(OUT) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: comm
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: myRank
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: numProcs
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: gn
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: n
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: is
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: ie
    INTEGER(INT64), OPTIONAL, INTENT(OUT) :: lis_ptr
    TYPE(Domain_), OPTIONAL, POINTER, INTENT(OUT) :: domain
    TYPE(DomainPointer_), OPTIONAL, INTENT(OUT) :: domains(:)
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: tSize
    TYPE(RealVector_), OPTIONAL, INTENT(OUT) :: realVec
    TYPE(DOF_), OPTIONAL, INTENT(OUT) :: dof
  END SUBROUTINE GetParam
END INTERFACE
```
