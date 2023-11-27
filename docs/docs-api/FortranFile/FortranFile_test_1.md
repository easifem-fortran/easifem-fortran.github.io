---
authors: Vikas Sharma, Ph. D.
date: 2022-07-19
update: 2021-07-19
title: FortranFile example 1
tags:
  - FortranFile/Initiate
  - FortranFile/Open
  - FortranFile/Close
---

# FortranFile example 1

In this example we initiate a [[FortranFile_]], open and close it.

## Modules and Classes

- [[FortranFile_]]

## Usage

Using modules and declaring variables

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none
  type(FortranFile_) :: obj
```

!!! note "Initiate"
    Create an instance of fortran file.

```fortran
  call obj%initiate( &
    & filename="./example.txt", &
    & status='REPLACE', &
    & action='WRITE')
```

!!! note ""
    Open and close the file

```fortran
call obj%open()
call obj%close()
```

```fortran
end program main
```
