# Initiate

Initiate an instance of abstract kernel.

## Interface

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param)
    IMPORT :: AbstractLinSolver_, ParameterList_
    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE Initiate
END INTERFACE
```



