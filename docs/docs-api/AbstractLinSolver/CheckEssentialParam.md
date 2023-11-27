# CheckEssentialParam

This method checks the essential parameters required to construct an instance of AbstractLinSolver.

## Interface

```fortran
INTERFACE
  SUBROUTINE CheckEssentialParam(obj, param)
    IMPORT :: AbstractLinSolver_, ParameterList_
    CLASS(AbstractLinSolver_), INTENT(IN) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```
