# InitiateNodeToElements

This routine sets the node-to-elements data in mesh of domain. For more information see, [InitiateNodeToElements](../Mesh/InitiateNodeToElements.md).

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateNodeToElements(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateNodeToElements
END INTERFACE
```
