# InitiateNodeToElements

- This subroutine generates elements surrounding a node mapping, in other words it generates node to element.
- Element numbers returned by this routine are global element number.
- This mapping is stored inside `obj%nodeData` array
- For a local node number `ii`, `obj%nodeData(ii)%globalElements(:)` contains the global element numbers.

:::note
Always use method called `getNodeToElements()` to access this information.
This method requires global Node number
:::

:::caution
Always use the mapping between global node number and local node number to
avoid segmentation fault
:::

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateNodeToElements(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateNodeToElements
END INTERFACE
```
