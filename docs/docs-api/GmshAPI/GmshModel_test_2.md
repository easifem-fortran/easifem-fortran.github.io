---
author: Vikas Sharma, Ph.D.
date: 6 Nov 2022
tags:
    - Gmsh/Initiatize
    - Gmsh/Finalize
    - Gmsh/Clear
    - GmshModel/Add
    - GmshModel/List
    - GmshModel/GetCurrent
    - GmshModel/SetCurrent
    - GmshModel/SetFilename
    - GmshModel/GetFilename
    - GmshModel/Remove
---

# GmshModel example 2

Following methods of [[GmshModel_]] are tested:

- [[GmshModel_#Add]]
- [[GmshModel_#List]]
- [[GmshModel_#GetCurrent]]
- [[GmshModel_#SetCurrent]]
- [[GmshModel_#SetFilename]]
- [[GmshModel_#GetFilename]]
- [[GmshModel_#Remove]]

## Usage

```fortran
PROGRAM main
  use easifemBase
  use easifemClasses
```

!!! note "declare variables"

```fortran
  type(gmsh_) :: gmsh
```

- Instance of [[Gmsh_]] engine

```fortran
  integer(i4b) :: ierr, tag
  real(dfp), parameter :: length = 1.0, width = 1.0
  real(dfp) :: x, y, z, meshsize
  type(string), allocatable :: names(:)
  type(string), allocatable :: strs(:)
  character(gmsh_api_max_str_len) :: name
  integer(i4b) :: ierr, names_n
```

- [[Gmsh_#Initialize]]

```fortran
  ierr = gmsh%initialize()
```

- [[GmshModel_#Add]]

```fortran
  ierr = gmsh%model%add("t1")
```

- [[GmshModel_#SetFileName]]

```fortran
  ierr = gmsh%model%setFileName('t1.geo')
```

- [[GmshModelGeo_#AddPoint]]

```fortran
  x = 0.0; y = 0.0; z = 0.0; meshSize = 0.01; tag = 1
  ierr = gmsh%model%geo%addPoint(x, y, z, meshSize, tag)
  !!
  x = LENGTH; y = 0.0; z = 0.0; meshSize = 0.01; tag = 2
  ierr = gmsh%model%geo%addPoint(x, y, z, meshSize, tag)
  !!
  x = LENGTH; y = WIDTH; z = 0.0; meshSize = 0.01; tag = 3
  ierr = gmsh%model%geo%addPoint(x, y, z, meshSize, tag)
  !!
  x = 0.0; y = WIDTH; z = 0.0; meshSize = 0.01; tag = 4
  ierr = gmsh%model%geo%addPoint(x, y, z, meshSize, tag)
  !!
```

- [[GmshModelGeo_#AddLine]]

```fortran
  ierr = gmsh%model%geo%addLine(1, 2, 1)
  ierr = gmsh%model%geo%addLine(2, 3, 2)
  ierr = gmsh%model%geo%addLine(3, 4, 3)
  ierr = gmsh%model%geo%addLine(4, 1, 4)
```

- [[GmshModelGeo_#AddCurveLoop]]

```fortran
  ierr = gmsh%model%geo%addCurveLoop([1, 2, 3, 4], 4, 1, reorient=1)
```

- [[GmshModelGeo_#AddPlaneSurface]]

```fortran
  ierr = gmsh%model%geo%addPlaneSurface([1], 1, 1)
```

- [[GmshModelGeo_#Synchronize]]

```fortran
  ierr = gmsh%model%geo%Synchronize()
```

- [[GmshModel_#GetEntities]]

```fortran
  BLOCK
    integer(i4b), allocatable :: dimtags(:, :)
    integer(i4b) :: dimtags_n
    !!
    ierr = gmsh%model%GetEntities(dimTags)
    CALL display(dimTags, "test-2: getEntities(:,:)=")
    !!
  END BLOCK
```

```todo
  BLOCK
    integer(i4b), allocatable :: dimtags(:, :)
    integer(i4b) :: dimtags_n
    !!
    ierr = gmsh%model%GetEntities(dimTags)
    CALL display(dimTags, "test-2: getEntities(:,:)=")
    !!
    ierr = gmsh%model%GetEntities(dimTags, 0)
    CALL display(dimTags, "test-2: getEntities(dim=0)=")
    !!
    ierr = gmsh%model%GetEntities(dimTags, 1)
    CALL display(dimTags, "test-2: getEntities(dim=1)=")
    !!
    ierr = gmsh%model%GetEntities(dimTags, 2)
    CALL display(dimTags, "test-2: getEntities(dim=2)=")
    !!
  END BLOCK
```

- [[Gmsh_#Finalize]]

```fortran
  ierr = gmsh%finalize()
```

```fortran
END PROGRAM main
```
