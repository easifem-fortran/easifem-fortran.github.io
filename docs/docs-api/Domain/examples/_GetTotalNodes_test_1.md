This example show how to initiate an instance of `Domain_` from the `HDF5File_` mesh/domain file. 
It tests `GetTotalNodes` and `Operator(.tNodes.)` methods.

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(Domain_) :: obj
  TYPE(HDF5File_) :: meshfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5"  
  INTEGER( I4B ), PARAMETER :: domain_tNodes = 12, dim1_tNodes = 8

  ! initiates the [[HDF5File_]] and OPEN it

  CALL meshfile%Initiate(filename, "READ")
  CALL meshfile%Open()

  ! Initiates an instance of [[Domain_]]

  CALL obj%Initiate(meshfile, '')


  ! Let us now demonstrate the usage of `GetTotalNodes` which 
  ! returns the total number of nodes in the [[Domain_]], 
  ! or part of domain (i.e. [[Mesh_]])

  ! Let us Get total number of nodes in the domain.
  CALL OK( obj%GetTotalNodes() .EQ. domain_tNodes, "GetTotalNodes: " )

  ! Let us not Get total number of nodes in the left mesh [[Mesh_]]
  CALL OK( obj%GetTotalNodes(dim=2, entityNum=1) .eq. domain_tNodes, &
      & "obj%GetTotalNodes(dim=2, entityNum=1): " )

  ! It is an error to get nodes like given below.
  ! CALL OK( domain_tNodes .eq. obj%GetTotalNodes(dim=2), &
  !    & "obj%GetTotalNodes(dim=2): " )


  ! We can also Get total number of nodes using the operator called `.tNodes.`.

  ! To Get total number of nodes in the domain use the following.
  CALL OK( domain_tNodes .eq. (.tNodes. obj), "(.tNodes. obj): " )

  ! To Get total number of nodes in given dimension `dim` and entity Number, 
  ! pack them in a vector of length two, that is `[dim, entityNum]`, 
  ! and pass it to `.tNodes.` as shown below.
  CALL OK( domain_tNodes .eq. (obj .tNodes. [2, 1]), "obj .tNodes. [2, 1]: " )

  CALL meshfile%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
