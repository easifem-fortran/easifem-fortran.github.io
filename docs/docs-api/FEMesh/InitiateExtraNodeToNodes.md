# InitiateExtraNodetoNodes

This routine generate the node to nodes mapping

- This mapping is stored inside `obj%nodeData%extraGlobalNodeNum`
- For a local node number i, `obj%nodeData(i)%ExtraGlobalNodeNum` denotes the global node data surrounding the local node number used for edge-based stabilization. This list does not include self node.

- It needs information about `nodeToNodes`, `nodeToElements`, and `elementToElements`. Therefore,
- If `nodeToNodes` is not initiated, then this method initiates it.
- If `nodeToElements` is not initiated, then this method initiates it.
- If `elementToElements` is not initiated, then this method initiates it.

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateExtraNodetoNodes(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh data
  END SUBROUTINE InitiateExtraNodetoNodes
END INTERFACE
```
