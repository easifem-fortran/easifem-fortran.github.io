# InitiateElementToElements

This routine creates the element surrounding a given element data

- Before calling this routine, make sure the `refelem` in mesh is allocated.
- By using `refelem`, this routine forms the FacetElements.
- This routine needs `nodeToElements` information, therefore, if `nodeToElements` is not initiated then it calls `initiateNodeToelements` method.

- This method forms following data:
- `obj%elementData(ielem)%globalElements`
- It also identifies those elements which are boundary element of mesh, and set `obj%elementData(ielem)%elementType=BOUNDARY_ELEMENT` for those elements.
- Note that at this point these boundary-elements can be interface element
 between two meshs, or domain-boundary element.

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateElementToElements(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh data
  END SUBROUTINE InitiateElementToElements
END INTERFACE
```
