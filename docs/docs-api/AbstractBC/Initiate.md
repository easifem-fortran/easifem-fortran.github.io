# Initiate

Initiate the [AbstractBC](./AbstractBC_.md)

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Initiate(obj, param, boundary, dom)
    IMPORT :: AbstractBC_, ParameterList_, MeshSelection_, Domain_
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
  END SUBROUTINE Initiate
END INTERFACE
```
