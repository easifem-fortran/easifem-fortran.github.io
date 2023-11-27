# Initiate

Initiate the [DirichletBC_](DirichletBC_.md)

## Interface

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param, boundary, dom)
    CLASS(DirichletBC_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
  END SUBROUTINE Initiate
END INTERFACE
```
