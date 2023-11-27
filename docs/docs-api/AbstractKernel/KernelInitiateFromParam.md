# KernelInitiateFromParam

This routine initiates the kernel by reading the basic parameters, if they are present. This routine can be used by children to set the data defined in `AbstractKernel_`.

- `param` contains the parameters for kernel

```fortran
INTERFACE
  MODULE SUBROUTINE KernelInitiateFromParam(obj, param, prefix)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    !! Kernel object
    TYPE(ParameterList_), INTENT(IN) :: param
    !! Parameter list
    CHARACTER(LEN=*), INTENT(IN) :: prefix
    !! prefix to add to the field of [AbstractKernel_](AbstractKernel_.md)
  END SUBROUTINE KernelInitiateFromParam
END INTERFACE
```
