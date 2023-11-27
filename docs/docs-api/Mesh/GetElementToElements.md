# GetElementToElements

## Interface

```fortran
  MODULE PURE FUNCTION getElementToElements(obj, globalElement, &
    & onlyElements) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    !! mesh data
    INTEGER(I4B), INTENT(IN) :: globalElement
    !! Global element number
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: onlyElements
    !! If onlyElements is absent or it is FALSE then full information
    !! about the elements connected to element iel is given
    !! If onlyElements is present and it is TRUE then only the
    !! information about the elements connected to element iel is given
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
    !! list of elements surrounding elements
  END FUNCTION getElementToElements
```
