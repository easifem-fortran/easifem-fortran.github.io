! This program is a part of EASIFEM library
! Copyright (C) 2020-2021  Vikas Sharma, Ph.D
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>
!

!  Gmsh Python tutorial 3
!  Extruded meshes, ONELAB parameters, options


module test_m
use easifemBase
use easifemClasses
implicit none
contains

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine createGeometryAndMesh(gmsh)
  class( gmsh_ ), intent( inout ) :: gmsh
  !internal variables
  integer( i4b ) :: ierr, tag, ps, ov, empty_int1(0)
  real( dfp ) :: lc, x, y, z, h, angle, empty_real1(0)
  real( dfp ), allocatable :: real1( : )
  integer( i4b ), allocatable :: int1( : )
  ! Clear all models and create a new one
  ierr = gmsh%clear()
  ierr = gmsh%model%add("t3")
  !Copied from t1.F90...
  x=0.0; y=0.0; z=0.0; lc = 1e-2; tag=1
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=tag)
  x=0.1; y=0.0; z=0.0; lc = 1e-2; tag=2
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=tag)
  x=0.1; y=0.3; z=0.0; lc = 1e-2; tag=3
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=tag)
  x=0.0; y=0.3; z=0.0; lc = 1e-2; tag=4
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=tag)
  ierr = gmsh%model%geo%addLine(1, 2, 1)
  ierr = gmsh%model%geo%addLine(3, 2, 2)
  ierr = gmsh%model%geo%addLine(3, 4, 3)
  ierr = gmsh%model%geo%addLine(4, 1, 4)

  ierr = gmsh%model%geo%addCurveLoop([4, 1, -2, 3], 1)
  ierr = gmsh%model%geo%addPlaneSurface([1], 1)
  ierr = gmsh%model%geo%synchronize()
  ierr = gmsh%model%addPhysicalGroup(1, [1, 2, 4], 5)
  ps = gmsh%model%addPhysicalGroup(2, [1], -1)
  ierr = gmsh%model%setPhysicalName(2, ps, "My surface")

  ! As in `t2.F90', we plan to perform an extrusion along the z axis.  But
  ! here, instead of only extruding the geometry, we also want to extrude the
  ! 2D mesh. This is done with the same `extrude()' function, but by
  ! specifying element 'Layers' (2 layers in this case, the first one with 8
  ! subdivisions and the second one with 2 subdivisions, both with a height of
  ! h/2). The number of elements for each layer and the (end) height of each
  ! layer are specified in two vectors:

  h = 0.1
  ov = gmsh%model%geo%extrude(dimtags=[2, 1], dx=0._dfp, dy=0._dfp, dz=h, &
    & outDimTags=int1, numElements=[8, 2], heights=[0.5_dfp, 1.0_dfp], &
    & Recombine=0 )

  ! The extrusion can also be performed with a rotation instead of a
  ! translation, and the resulting mesh can be recombined into prisms (we use
  ! only one layer here, with 7 subdivisions). All rotations are specified by
  ! an an axis point (-0.1, 0, 0.1), an axis direction (0, 1, 0), and a
  ! rotation angle (-Pi/2):
  ov = gmsh%model%geo%revolve(dimtags=[2, 28], x=-0.1_dfp, y=0._dfp, &
    & z=0.1_dfp, ax=0._dfp, &
    & ay=1._dfp, az=0._dfp, angle=-pi / 2, outDimTags=int1, &
    & numElements=[7], heights=empty_real1, recombine=0 )

  ! Using the built-in geometry kernel, only rotations with angles < Pi are
  ! supported. To do a full turn, you will thus need to apply at least 3
  ! rotations. The OpenCASCADE geometry kernel does not have this limitation.
  ! A translation (-2 * h, 0, 0) and a rotation ((0, 0.15, 0.25), (1, 0, 0),
  ! angle * Pi / 180) can also be combined to form a "twist".  The last
  ! (optional) argument for the extrude() and twist() functions specifies
  ! whether the extruded mesh should be recombined or not. The `angle'
  ! parameter is retrieved from the ONELAB database (it can be set
  ! interactively in the GUI -- see below):

  ierr = gmsh%onelab%getNumber(name='Parameters/Twisting angle', value=real1)
  angle = real1(1)
  ov = gmsh%model%geo%twist(dimTags=[2, 50], x=0._dfp, y=0.15_dfp, &
    & z=0.25_dfp, dx=-2 * h, dy=0.0_dfp, dz=0.0_dfp, ax=1.0_dfp, ay=0.0_dfp,&
    & az=0.0_dfp, angle=angle * pi / 180., outDimTags=int1, &
    & numElements=[10], heights=empty_real1, Recombine=1)

  ierr=gmsh%model%geo%synchronize()

  ! All the extrusion functions return a vector of extruded entities: the
  ! "top" of the extruded surface (in `ov[0]'), the newly created volume (in
  ! `ov[1]`) and the tags of the lateral surfaces (in `ov[2]`, `ov[3]`, ...).
  ! We can then define a new physical volume (with tag 101) to group all the
  ! elementary volumes:

  ierr = gmsh%model%addPhysicalGroup(3, [1, 2, int1(1)], 101)
  ierr = gmsh%model%mesh%generate(3)
  ierr = gmsh%write("t3.msh")

end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

FUNCTION checkForEvent(gmsh) RESULT( ans )
  CLASS( Gmsh_ ), INTENT( INOUT ) :: gmsh
  LOGICAL( LGT ) :: ans
  !> internal variable
  CHARACTER( LEN = : ), ALLOCATABLE :: action
  INTEGER( I4B ) :: ierr
  !> main
  ierr = gmsh%onelab%getString( name="ONELAB/Action", value=action )
  IF( LEN(action) .NE. 0 .AND. TRIM(action) .EQ. "check" ) THEN
    ierr=gmsh%onelab%setString( name="ONELAB/Action", value="" )
    CALL createGeometryAndMesh( gmsh )
    ierr=gmsh%graphics%draw()
  END IF
  ans=.TRUE.
END FUNCTION

end  module test_m


!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

program main
use test_m
type( gmsh_ ) :: gmsh
integer( i4b ) :: ierr, r, g, b, a
CHARACTER( LEN = : ), allocatable :: astring

call GMSH_INIT
ierr = gmsh%initialize()

! Let us now change some options... Since all interactive options are
! accessible through the API, we can for example make point tags visible or
! redefine some colors:

ierr=gmsh%option%setNumber("Geometry.PointNumbers", 1)
ierr=gmsh%option%setColor("Geometry.Points", 255, 165, 0, 100)
ierr=gmsh%option%setColor("General.Text", 255, 255, 255, 100)
ierr=gmsh%option%setColor("Mesh.Points", 255, 0, 0, 100)

! Note that color options are special: setting a color option of "X.Y"
! actually sets the option "X.Color.Y".

ierr = gmsh%option%getColor("Geometry.Points", r, g, b, a)
ierr=gmsh%option%setColor("Geometry.Surfaces", r, g, b, a)

! We create a ONELAB parameter to define the angle of the twist. ONELAB
! parameters can be modified interactively in the GUI, and can be exchanged
! with other codes connected to the same ONELAB database. The database can be
! accessed through the Gmsh Python API using JSON-formatted strings (see
! https://gitlab.onelab.info/doc/tutorials/-/wikis/ONELAB-JSON-interface for
! more information):

astring = '[&
  &{&
    &"type":"number",&
    &"name":"Parameters/Twisting angle",&
    &"values":[90],&
    &"min":0,&
    &"max":120,&
    &"step":1&
  &}&
&]'

ierr = gmsh%onelab%set( data=astring, format="json" )

! Create the geometry and mesh it:
CALL createGeometryAndMesh(gmsh)

! Launch the GUI and handle the "check" event (recorded in the "ONELAB/Action"
! parameter) to recreate the geometry with a new twisting angle if necessary:

ierr = gmsh%fltk%initialize()

DO
  IF ( gmsh%fltk%isAvailable() .AND. checkForEvent(gmsh) ) THEN
    ierr = gmsh%fltk%wait()
  ELSE
    EXIT
  END IF
END DO

! When the GUI is launched, you can use the `Help->Current Options and
! Workspace' menu to see the current values of all options. To save the
! options in a file, use `File->Export->Gmsh Options', or through the api:
! gmsh.write("t3.opt");

ierr = gmsh%finalize()
CALL GMSH_FINAL
end program main
