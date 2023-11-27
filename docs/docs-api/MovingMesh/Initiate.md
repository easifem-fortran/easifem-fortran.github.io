# Initiate

This routine initiates the kernel.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SSF_Initiate(obj, param, dom, domains)
    CLASS(MovingMesh_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE SSF_Initiate
END INTERFACE
```

## Example

import EXAMPLE18 from "./_Initiate_test_1.md";

<EXAMPLE18 />
