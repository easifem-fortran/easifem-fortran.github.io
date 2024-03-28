# InitiateNodeToNodes

This routine generate the node to nodes mapping

- In other words, it generates info of node-numbers in mesh surrounding a node number
- This mapping is stored inside `obj%nodeData%globalNodeNum`
- For a local node number i, obj%nodeData(i)%globalNodeNum denotes the global node data surrounding the local node number.
- This list does not include self node.
- The method needs node-to-elements data, therefore if this data is not initiated, then this method calls `InitiateNodeToElements()`.

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateNodetoNodes(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh data
  END SUBROUTINE InitiateNodetoNodes
END INTERFACE
```
