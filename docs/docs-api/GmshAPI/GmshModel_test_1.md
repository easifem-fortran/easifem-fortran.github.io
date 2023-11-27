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

# GmshModel example 1

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
  integer(i4b) :: ierr, names_n
  type(string), allocatable :: names(:)
  character(gmsh_api_max_str_len) :: name
  type(string), allocatable :: strs(:)
```

!!! note "Gmsh/Initialize"

```fortran
  ierr = gmsh%initialize()
```

!!! note "GmshModel/Add"

```fortran
  ierr = gmsh%model%add("t1")
  ierr = gmsh%model%add("t2")
  ierr = gmsh%model%add("t3")
```

!!! note "GmshModel/List"

```fortran
  block
  INTEGER( I4B ) :: ii
  ierr = gmsh%model%list(names)
  call display( ierr, "size of names = ")
  do ii = 1, ierr
    call display( names(ii), "names = ")
  end do
  end block
```

!!! note "GmshModel/GetCurrent"

```fortran
  ierr = gmsh%model%getCurrent(name)
  call display(name, 'name: ')
```

!!! note "GmshModel/SetCurrent"

```fortran
  ierr = gmsh%model%setCurrent('t1')
  ierr = gmsh%model%getCurrent(name)
  call display(name, 'name: ')
```

!!! note "GmshModel/SetFileName"

```fortran
  ierr = gmsh%model%setFileName('t1.geo')
```

!!! note "GmshModel/GetFileName"

```fortran
  ierr = gmsh%model%getFileName(name)
  call display(name, 'name: ')
```

!!! note "GmshModel/Remove"

```fortran
  ierr = gmsh%model%remove()
```

!!! note "Gmsh/Clear"

```fortran
  ierr = gmsh%clear()
```

!!! note "Gmsh/Finalize"

```fortran
  ierr = gmsh%finalize()
```

```fortran
END PROGRAM main
```
