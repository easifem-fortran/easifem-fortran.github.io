---
title: VTKFile example 3
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKFile/encodeVTKDataArray
---

# VTKFile example 3

This example shows how to encode arrays of intrinsic type into VTKformat.

## Use association

## Usage

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none
  INTEGER(Int8) :: i8a(10)
  INTEGER(Int8) :: i8b(10)
  INTEGER(Int8) :: i8c(10)
  INTEGER(Int16) :: i16a(10)
  INTEGER(Int16) :: i16b(10)
  INTEGER(Int16) :: i16c(10)
  INTEGER(Int32) :: i32a(10)
  INTEGER(Int32) :: i32b(10)
  INTEGER(Int32) :: i32c(10)
  REAL(Real32) :: r32a(10)
  REAL(Real32) :: r32b(10)
  REAL(Real32) :: r32c(10)
  REAL(Real64) :: r64a(10)
  REAL(Real64) :: r64b(10)
  REAL(Real64) :: r64c(10)
```

```fortran
  i8a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  i8b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  i8c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  i16a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  i16b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  i16c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  i32a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  i32b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  i32c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  r32a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  r32b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  r32c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  r64a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  r64b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  r64c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
```

```fortran
  CALL Display(encodeVTKDataArray(i8a, i8b, i8c, "ASCII"), "i8 :: ")
  CALL Display(encodeVTKDataArray(i16a, i16b, i16c, "ASCII"), "i16 :: ")
  CALL Display(encodeVTKDataArray(i32a, i32b, i32c, "ASCII"), "i32 :: ")
  CALL Display(encodeVTKDataArray(r32a, r32b, r32c, "ASCII"), "r32 :: ")
  CALL Display(encodeVTKDataArray(r64a, r64b, r64c, "ASCII"), "r64 :: ")
```

```fortran
end program
```
