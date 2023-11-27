# CheckEssentialParam

This method checks the essential parameters required to construct an instance of LinSolver.

## Interface

```fortran
INTERFACE
  SUBROUTINE CheckEssentialParam(obj, param)
    CLASS(LinSolver_), INTENT(IN) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```
