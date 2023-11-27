# GetUpperTriangle

This subroutine returns the Upper part of the sparse matrix.

## Interface

```fortran title="Interface"
INTERFACE
  MODULE SUBROUTINE GetUpperTriangle(obj, U)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: U
  END SUBROUTINE GetUpperTriangle
END INTERFACE
```

## Example

TODO
