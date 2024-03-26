```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE EdgeData_Class
USE EdgeDataBinaryTree_Class
USE EdgeDataBinaryTreeUtility

IMPLICIT NONE

TYPE(EdgeData_) :: VALUE
TYPE(EdgeData_), POINTER :: value_ptr
TYPE(EdgeDataBinaryTree_) :: obj, anode
INTEGER(I4B), ALLOCATABLE :: node_connectivity(:, :), edge_connectivity(:, :)
INTEGER(I4B) :: localEdges(2, 4), nptrs(4), edge(2), sorted_edge(2)
INTEGER(I4B) :: iel, iedge

localEdges(:, 1) = [1, 2]
localEdges(:, 2) = [4, 3]
localEdges(:, 3) = [1, 4]
localEdges(:, 4) = [2, 3]

CALL Reallocate(node_connectivity, 4, 3)
node_connectivity(:, 1) = [1, 2, 3, 4]
node_connectivity(:, 2) = [2, 5, 6, 3]
node_connectivity(:, 3) = [2, 7, 8, 5]

CALL obj%Initiate()

DO iel = 1, SIZE(node_connectivity, 2)
  nptrs = node_connectivity(:, iel)
  DO iedge = 1, SIZE(localEdges, 2)
    edge = nptrs(localEdges(:, iedge))
    sorted_edge = SORT(edge)
    value_ptr => EdgeData_Pointer(sorted_edge)
    CALL obj%Insert(value_ptr)
  END DO
END DO

CALL obj%SetID()

CALL Reallocate(edge_connectivity, 4, SIZE(node_connectivity, 2))

DO iel = 1, SIZE(node_connectivity, 2)
  nptrs = node_connectivity(:, iel)

  DO iedge = 1, SIZE(localEdges, 2)

    edge = nptrs(localEdges(:, iedge))
    VALUE = SORT(edge)
    value_ptr => obj%GetValuePointer(VALUE)
    IF (edge(1) .GT. edge(2)) THEN
      edge_connectivity(iedge, iel) = -value_ptr%id
    ELSE
      edge_connectivity(iedge, iel) = value_ptr%id
    END IF

  END DO

END DO

CALL Display(edge_connectivity, "edge_connectivity:")

END PROGRAM main
```
