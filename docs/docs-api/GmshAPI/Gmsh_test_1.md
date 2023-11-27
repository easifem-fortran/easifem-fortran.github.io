---
author: Vikas Sharma, Ph.D.
date: 6 Nov 2022
tags:
    - Gmsh/Initialize
    - Gmsh/Finalize
---

# Gmsh example 1

Following methods are tested:

- [[Gmsh_#Initialize]]
- [[Gmsh_#Finalize]]

## Usage

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
```

!!! note "Declare variables"

```fortran
  TYPE( Gmsh_ ) :: gmsh
```

- Instance of [[Gmsh_]].

```fortran
  CHARACTER( LEN = * ), PARAMETER :: title="t1"
  REAL( DFP ), PARAMETER :: corner(3)=[0.,0.,0.]
  REAL( DFP ), PARAMETER :: lx = 1.0
  REAL( DFP ), PARAMETER :: ly = 1.0
  REAL( DFP ), PARAMETER :: meshSize=MIN(lx,ly)/10
  INTEGER( I4B ), PARAMETER :: order=1
  INTEGER( I4B ) :: ierr
  REAL( DFP ) :: x, y, z, lc
```

!!! note "Gmsh/Initialize"

```fortran
  ierr = gmsh%Initialize()
```

```fortran
  ierr = gmsh%model%add( title )
  x=corner(1); y=corner(2); z=corner(3); lc=meshSize
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=1)
  x=x+lx; y=y; z=z; lc=lc
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=2)
  x=x; y=y+ly; z=z; lc=lc
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=3)
  x=corner(1); y=y; z=z; lc=lc
  ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=4)
  ierr = gmsh%model%geo%addLine(startTag=1, endTag=2, tag=1)
  ierr = gmsh%model%geo%addLine(2, 3, 2)
  ierr = gmsh%model%geo%addLine(3, 4, 3)
  ierr = gmsh%model%geo%addLine(4, 1, 4)
  ierr = gmsh%model%geo%addCurveLoop([1, 2, 3, 4], tag=1)
  ierr = gmsh%model%geo%addPlaneSurface([1], 1)
  ierr = gmsh%model%geo%synchronize()
  ierr = gmsh%option%setNumber(value=1, name="Mesh.SaveAll")
  ierr = gmsh%model%mesh%generate(2)
  ierr = gmsh%model%mesh%setOrder(order)
  ierr = gmsh%write( title//'.msh' )
  !ierr = gmsh%fltk%run()
```

```fortran
  ierr = gmsh%Finalize()
```

```fortran
END PROGRAM main
```

END PROGRAM main
