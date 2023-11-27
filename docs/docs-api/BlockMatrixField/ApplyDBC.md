# ApplyDBC

Apply Dirichlet boundary condition to matrix field.

## Interface

```fortran
INTERFACE
  SUBROUTINE ApplyDBC(obj, dbcPtrs)
    IMPORT :: AbstractMatrixField_, I4B
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcPtrs(:)
  END SUBROUTINE ApplyDBC
END INTERFACE
```
