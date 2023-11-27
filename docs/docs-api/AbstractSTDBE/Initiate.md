# Initiate

This method should be implemented by the children of `AbstractSTDBE_` kernel.


```fortran
INTERFACE
  MODULE SUBROUTINE SSF_Initiate(obj, param, dom, domains)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE SSF_Initiate
END INTERFACE
```