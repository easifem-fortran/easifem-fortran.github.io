# AbstractSTDBEInitiate

Initiate the parameters of abstract kernel. This method can be accessed from the children.

```fortran
INTERFACE
  MODULE SUBROUTINE AbstractSTDBEInitiate(obj, param, prefix, dom, domains)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(LEN=*), INTENT(IN) :: prefix
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE AbstractSTDBEInitiate
END INTERFACE
```
