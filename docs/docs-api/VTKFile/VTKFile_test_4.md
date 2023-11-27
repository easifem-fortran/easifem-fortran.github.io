---
title: VTKFile example 4
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKFile/InitiateVTKFile
  - VTKFile/WritePiece
  - VTKFile/WritePoints
---

# VTKFile example 4

This example shows how to construct `structuredGrid` (ASCII) vtkfile.

## Use association

- [[VTKFile_]]

## Usage

```fortran
PROGRAM MAIN
  USE easifemBase
  USE easifemClasses
  Implicit None
  TYPE(VTKFile_) :: aVTKfile
  REAL(DFP), ALLOCATABLE :: xv(:), yv(:), zv(:), x(:, :, :), &
    & y(:, :, :), z(:, :, :)
  INTEGER(I4B) :: nx1 = 0, nx2 = 9, ny1 = 0, ny2 = 5, nz1 = 0, nz2 = 5
```

!!! note ""
    Let us initiate a vtkfile for structured grid. We need to specify the WholeExtent.

```fortran
  CALL aVTKfile%InitiateVTKFile( &
    & filename="./example4.vts", &
    & mode="NEW", &
    & DataFormat=VTK_ASCII, &
    & DataStructureType=VTK_StructuredGrid, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
```

!!! note "Piece 1"
    In the following we add a piece (portion of geometry defined by the extent). Note that we can specify as many piece as we want.

```fortran
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
```

```fortran
  xv = linspace(0.0_DFP, 1.0_DFP, (nx2 - nx1) + 1)
  yv = linspace(0.0_DFP, 1.0_DFP, (ny2 - ny1) + 1)
  zv = linspace(0.0_DFP, 1.0_DFP, (nz2 - nz1) + 1)
```

!!! note ""
    Now we create meshgrid

```fortran
  CALL MeshGrid(x=x, y=y, z=z, xgv=xv, ygv=yv, zgv=zv)
```

```fortran
  CALL aVTKfile%WritePoints(x=x, y=y, z=z)
```

!!! note ""
    Closing the piece.

```fortran
  CALL aVTKfile%WritePiece()
```

!!! note "cleanup"
    Closing the file, a simple Deallocate is enough.

```fortran
  CALL aVTKfile%Deallocate()
END PROGRAM main
```
