# CheckEssentialParam

Checks the essential parameters in the param of kernels

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE CheckEssentialParam(obj, param, prefix)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: prefix
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```
