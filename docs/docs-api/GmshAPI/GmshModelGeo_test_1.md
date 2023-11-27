---
author: Vikas Sharma, Ph.D.
date: 9 Nov 2022
tags:
    - Gmsh/Initialize
    - GmshModel/Add
    - GmshModel/SetFileName
    - GmshModelGeo/SetFileName
    - GmshModelGeo/AddPoint
    - GmshModelGeo/AddLine
    - GmshModelGeo/AddCurveLoop
    - GmshModelGeo/AddPlaneSurface
    - GmshModelGeo/Synchronize
---

# GmshModelGeo example 1

In this example we test following methods:

In this example we create a square geometry and mesh.

## Usage

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
```

```fortran
  TYPE( gmsh_ ) :: gmsh
```

- Instance of [[Gmsh_]].

```fortran
  INTEGER( I4B ) :: ierr, tag
  REAL( DFP ), PARAMETER :: LENGTH=1.0, WIDTH=1.0
  REAL( DFP ) :: x, y, z, meshSize
  CHARACTER( LEN = 120 ), ALLOCATABLE :: names( : )
  CHARACTER( LEN = 120 ) :: name
```

!!! note "Gmsh/Initialize"
    - [[Gmsh_#Initialize]]

```fortran
  ierr = gmsh%initialize()
```

- [[GmshModel_#Add]]
- [[GmshModel_#SetFileName]]

```fortran
  ierr = gmsh%model%add("t1")
  ierr = gmsh%model%setFileName('t1.geo')
```

!!! note "GmshModelGeo/AddPoint"
    [[GmshModelGeo_#AddPoint]]

Point-1: Specifying tag explicitly

```fortran
  x = 0.0; y = 0.0; z = 0.0; meshSize = 0.01; tag=1
  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)
  call ok(ierr .NE. 0_I4B, "(a) ")
```

Point-2: Not Specifying the tag:

```fortran
  x = LENGTH; y = 0.0; z = 0.0; meshSize = 0.01
  tag = gmsh%model%geo%addPoint(x,y,z,meshSize)
  call ok(tag .eq. 2_I4B, "(b) ")
```

Point-3: Setting `tag=-1` equivalent to not specifying the tag explicitly.

```fortran
  x = LENGTH; y = WIDTH; z = 0.0; meshSize = 0.01; tag=-1
  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)
  call ok(ierr .eq. 3_I4B, "(c) ")
```

Point-4: Specifying tag explicitly.

```fortran
  x = 0.0; y = WIDTH; z = 0.0; meshSize = 0.01; tag=4
  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)
  call ok(ierr .NE. 0_I4B, "(d) ")
```

!!! note "GmshModelGeo/AddLine"
    [[GmshModelGeo_#AddLine]]

Line-1: explicit tag

```fortran
  ierr = gmsh%model%geo%addLine(startTag=1,endTag=2,tag=1)
  call ok(ierr .NE. 0_I4B, "(e) ")
```

Line-2: automatic tag

```fortran
  tag = gmsh%model%geo%addLine(2,3)
  call ok(tag .EQ. 2_I4B, "(f) ")
```

Line-3: if `tag=-1` it means automatic tag.

```fortran
  tag = gmsh%model%geo%addLine(3,4,-1)
  call ok(tag .EQ. 3_I4B, "(f) ")
```

Line-4:

```fortran
  ierr = gmsh%model%geo%addLine(4,1,4)
  call ok(ierr .NE. 0_I4B, "(g) ")
```

!!! note "GmshModelGeo/AddCurveLoop"
    [[GmshModelGeo_#AddCurveLoop]]

- `reorient` is optional, default value is false.
- `tag` is optional

```fortran
  ierr = gmsh%model%geo%addCurveLoop( &
    & curveTags=[1,2,3,4], tag=1, reorient=.TRUE.)
  call ok(ierr .NE. 0_I4B, "(h) ")
```

- automatic tag example:

```txt
  tag = gmsh%model%geo%addCurveLoop( &
    & curveTags=[1,2,3,4], reorient=.TRUE.)
  call ok(tag .EQ. 1_I4B, "(h) ")
```

- automatic tag, without `reorient` option:

```txt
  tag = gmsh%model%geo%addCurveLoop( &
    & curveTags=[1,2,3,4])
  call ok(tag .EQ. 1_I4B, "(h) ")
```

!!! note "GmshModelGeo/AddPlaneSurface"
    - [[GmshModelGeo_#AddPlaneSurface]]

- `tag` is explicitly given.

```fortran
  ierr = gmsh%model%geo%addPlaneSurface(wireTags=[1], tag=1)
  call ok(ierr .NE. 0_I4B, "(i) ")
```

- `tag` is automatically set by gmsh.

```txt
  tag = gmsh%model%geo%addPlaneSurface(wireTags=[1])
  call ok(tag .EQ. 1_I4B, "(i) ")
```

- if `tag=-1`, then tag is automatically set by gmsh.

```txt
  ierr = gmsh%model%geo%addPlaneSurface(wireTags=[1], tag=-1)
  call ok(ierr .EQ. 1_I4B, "(i) ")
```

!!! note "GmshModelGeo/Synchronize"
    [[GmshModelGeo_#Synchronize]]

```fortran
ierr = gmsh%model%geo%Synchronize()
```

```todo
ierr = gmsh%model%geo%AddPhysicalGroup(1, [1], 1)
ierr = gmsh%model%SetPhysicalName(dim=1, tag=1, name="bottom" )
ierr = gmsh%model%geo%AddPhysicalGroup(1, [2], 2)
ierr = gmsh%model%SetPhysicalName(dim=1, tag=2, name="right" )
ierr = gmsh%model%geo%AddPhysicalGroup(1, [3], 3)
ierr = gmsh%model%SetPhysicalName(dim=1, tag=3, name="top" )
ierr = gmsh%model%geo%AddPhysicalGroup(1, [4], 4)
ierr = gmsh%model%SetPhysicalName(dim=1, tag=4, name="left" )
ierr = gmsh%model%geo%AddPhysicalGroup(2, [1], 1)
ierr = gmsh%model%SetPhysicalName(2, 1, "omega" )
ierr = gmsh%model%remove()
ierr = gmsh%clear()
```

!!! note "Gmsh/Finalize"
    - [[Gmsh_#Finalize]]

```fortran
  ierr = gmsh%finalize()
```

```fortran
END PROGRAM main
```
