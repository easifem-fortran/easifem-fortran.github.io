# Allocate

This subroutine allocates the memory for various matrices in the object.

- This subroutine belongs to the generic interface called `Allocate()`.

```fortran
  MODULE PURE SUBROUTINE Allocate(obj, nsd, xidim, nns, nips)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    !! object to be returned
    INTEGER(I4B), INTENT(IN) :: nsd
    !! spatial dimension
    INTEGER(I4B), INTENT(IN) :: xidim
    !! xidimension
    INTEGER(I4B), INTENT(IN) :: nns
    !! number of nodes in element
    INTEGER(I4B), INTENT(IN) :: nips
    !! number of integration points
  END SUBROUTINE Allocate
```