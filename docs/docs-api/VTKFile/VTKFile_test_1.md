---
title: VTKFile example 1
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKFile/encodeVTKDataArray
---

# VTKFile example 1

This example shows how to encode arrays of intrinsic type into VTKformat.

## Use association

## Usage

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none
  integer(Int8) :: i8(10)
  integer(Int16) :: i16(10)
  integer(Int32) :: i32(10)
  REAL(Real32) :: r32(10)
  REAL(Real64) :: r64(10)
```

```fortran
  call display(encodeVTKDataArray(i8, "ASCII"))
  call display(encodeVTKDataArray(i16, "ASCII"))
  call display(encodeVTKDataArray(i32, "ASCII"))
  call display(encodeVTKDataArray(i8, "BINARY"))
  call display(encodeVTKDataArray(i16, "BINARY"))
  call display(encodeVTKDataArray(i32, "BINARY"))
  call display(encodeVTKDataArray(r32, "ASCII"))
  call display(encodeVTKDataArray(r64, "ASCII"))
  call display(encodeVTKDataArray(r32, "BINARY"))
  call display(encodeVTKDataArray(r64, "BINARY"))
```

```fortran
end program
```