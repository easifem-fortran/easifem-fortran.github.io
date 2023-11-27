# Initiate

Initiate the [NeumannBC_](NeumannBC_.md)

## Interface

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param, boundary, dom)
    CLASS(NeumannBC_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
  END SUBROUTINE Initiate
END INTERFACE
```
