# SetPrecondition

Set preconditioner.

## Interface

```fortran
INTERFACE
  SUBROUTINE setPrecondition(obj, param, dbcPtrs)
    IMPORT :: AbstractMatrixField_, ParameterList_, I4B
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dbcPtrs(:)
  END SUBROUTINE setPrecondition
END INTERFACE
```
