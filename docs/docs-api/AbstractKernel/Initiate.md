# Initiate

This routine initiates the kernel, this method should be implemented by the children of `AbstractKernel_`:

- `param` contains the parameters for kernel [ParameterList_](../ParameterList/ParameterList_.md)
- `dom` is the domain of computation [Domain_](../Domain/Domain_.md)
- `domains` is multiple domains of computation 

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param, dom, domains)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    !! Kernel object
    TYPE(ParameterList_), INTENT(IN) :: param
    !! Parameter list
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    !! Domain of computation
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE Initiate
END INTERFACE
```
