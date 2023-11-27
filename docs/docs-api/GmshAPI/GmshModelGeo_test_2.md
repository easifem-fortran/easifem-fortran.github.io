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

# GmshModelGeo example 2

In this example we test following methods:

In this example we create a circle geometry and mesh.

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
  REAL( DFP ), PARAMETER :: R=1.0, Xc=0.0, Yc=0.0, Zc=0.0
  REAL( DFP ) :: x, y, z, meshSize
  CHARACTER( LEN = GMSH_API_MAX_STR_LEN ), ALLOCATABLE :: names( : )
  CHARACTER( LEN = GMSH_API_MAX_STR_LEN ) :: name
  CHARACTER(LEN=*), PARAMETER :: PREFIX="t1"
```

- [[Gmsh_#Initialize]]
- [[GmshModel_#Add]]
- [[GmshModel_#SetFileName]]

```fortran
  ierr = gmsh%initialize()
  ierr = gmsh%model%add( PREFIX )
  ierr = gmsh%model%setFileName( PREFIX//".geo" )
```

### Points

- [[GmshModelGeo_#AddPoint]]

Point-1: Specifying tag explicitly

```fortran
  x = Xc-R; y = Yc; z = Zc; meshSize = 0.1; tag=1
  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)
  x = Xc+R; y = Yc; z = Zc; meshSize = 0.1; tag=2
  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)
  x = Xc; y = Yc; z = Zc; meshSize = 0.1; tag=3
  ierr = gmsh%model%geo%addPoint(x,y,z,meshSize,tag)
```

### Line and curves

- [[GmshModelGeo_#AddCircleArc]]

- explicit tag
- automatic tag
- if `tag=-1` it means automatic tag.
- `nx, ny, nz` are optional, default value is zero.

```fortran
  ierr = gmsh%model%geo%AddCircleArc( &
    & startTag=1, &
    & centerTag=3, &
    & endTag=2, &
    & tag=1, &
    & nx=0.0, &
    & ny=0.0, &
    & nz=0.0 )
  call ok(ierr .NE. 0_I4B, "AddCircleArc(1)")
```

Adding another circle arc.

```fortran
  ierr = gmsh%model%geo%AddCircleArc( &
    & startTag=2, &
    & centerTag=3, &
    & endTag=1, &
    & tag=2)
  call ok(ierr .NE. 0_I4B, "AddCircleArc(2)")
```

### CurveLoop

- [[GmshModelGeo_#AddCurveLoop]]

- `reorient` is optional, default value is false.
- `tag` is optional

```fortran
  ierr = gmsh%model%geo%addCurveLoop( &
    & curveTags=[1,2], tag=1, reorient=.TRUE.)
```

### AddPlaneSurface

- [[GmshModelGeo_#AddPlaneSurface]]

- `tag` is explicitly given.

```fortran
  ierr = gmsh%model%geo%addPlaneSurface(wireTags=[1], tag=1)
```

### Synchronize

- [[GmshModelGeo_#Synchronize]]

```fortran
ierr = gmsh%model%geo%Synchronize()
```

### Write

- [[Gmsh_#Write]]

```fortran
ierr = gmsh%Write(PREFIX//".msh")
```

### Cleanup

- [[Gmsh_#Finalize]]

```fortran
  ierr = gmsh%finalize()

END PROGRAM main
```
