---
title: VTKFile example 2
author: Vikas Sharma, Ph.D.
date: 5 July 2022
update: 5 July 2022
tags:
  - VTKFile/encodeVTKDataArray
---

# VTKFile example 2

This example shows how to encode arrays of intrinsic type into VTKformat.

## Use association

## Usage

```fortran
PROGRAM Main
  USE easifemBase
  USE easifemClasses
  Implicit None
  INTEGER(Int8) :: i8(10, 2)
  INTEGER(Int16) :: i16(10, 2)
  INTEGER(Int32) :: i32(10, 2)
  REAL(Real32) :: r32(10, 2)
  REAL(Real64) :: r64(10, 2)
```

```fortran
  i8(:, 1) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  i16(:, 1) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  i32(:, 1) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  i8(:, 2) = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  i16(:, 2) = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  i32(:, 2) = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  r32(:, 1) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  r32(:, 2) = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  r64(:, 1) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  r64(:, 2) = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```

```fortran
  CALL Display(encodeVTKDataArray(i8, "ASCII"), "i8 :: ")
  CALL Display(encodeVTKDataArray(i8, "BINARY"), "i8 :: ")
  CALL Display(encodeVTKDataArray(i16, "ASCII"), "i16 :: ")
  CALL Display(encodeVTKDataArray(i16, "BINARY"), "i16 :: ")
  CALL Display(encodeVTKDataArray(i32, "ASCII"), "i32 :: ")
  CALL Display(encodeVTKDataArray(i32, "BINARY"), "i32 :: ")
  CALL Display(encodeVTKDataArray(r32, "ASCII"), "r32 :: ")
  CALL Display(encodeVTKDataArray(r32, "BINARY"), "r32 :: ")
  CALL Display(encodeVTKDataArray(r64, "ASCII"), "r64 :: ")
  CALL Display(encodeVTKDataArray(r64, "BINARY"), "r64 :: ")
```

```fortran
END PROGRAM Main
```
