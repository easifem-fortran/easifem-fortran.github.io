---
authors: Vikas Sharma, Ph. D.
date: 2022-07-19
update: 2021-07-19
title: FortranFile example 2
tags:
  - FortranFile/Initiate
  - FortranFile/Open
  - FortranFile/Close
  - FortranFile/GetFileName
  - FortranFile/GetFileExt
  - FortranFile/GetFilePath
---

# FortranFile example 2

In this example we initiate a [[FortranFile_]], open and close it.

## Modules and Classes

- [[FortranFile_]]
- [[String]]

## Usage

Using modules and declaring variables

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none
  type(FortranFile_) :: obj
  type(String) :: astr
```

!!! note "Initiate"
    Create an instance of fortran file.

```fortran
  call obj%initiate( &
    & filename="./example.txt", &
    & status='REPLACE', &
    & action='WRITE')
```

!!! note "GetMethods"
    Let's get the filename, extension, and path.

```fortran
  astr = obj%getFilePath()
  call astr%Display( "filePath = " )
  astr = obj%getfileExt()
  call astr%Display( "fileExt = " )
  astr = obj%getfileName()
  call astr%Display( "fileName = " )
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
