PROGRAM main
  USE easifemBase
  USE easifemClasses
  !
  ! [[Gmsh_]]
  !
  TYPE( Gmsh_ ) :: gmsh
  INTEGER( I4B ) :: ierr
  CALL GMSH_INIT
  ! #Gmsh/Initialize
  ierr = gmsh%Initialize()
  ! #Gmsh/Open
  ierr = gmsh%Open(fileName="t1.msh" )
  ! #Gmsh/Write
  ierr = gmsh%Write(fileName="t2.msh")
  ! #Gmsh/Finalize
  ierr = gmsh%Finalize()
  ! #Gmsh/Clear
  ierr = gmsh%Clear()
  CALL GMSH_FINAL
END PROGRAM main