---
authors: Vikas Sharma, Ph. D.
date: 2022-07-19
update: 2021-07-19
title: FortranFile example 3
tags:
  - FortranFile/Initiate
  - FortranFile/Open
  - FortranFile/Close
  - FortranFile/IsFormatted
  - FortranFile/IsDirect
  - FortranFile/IsPadded
  - FortranFile/IsNew
  - FortranFile/IsOverwrite
  - FortranFile/IsInitiated
---

# FortranFile example 3

In this example we initiate a [[FortranFile_]], open and close it. We tests the enquire functions.

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
    call Display( obj%isFormatted(), "isFormatted = ")
    call Display( obj%isDirect(), "isDirect = ")
    call Display( obj%isPadded(), "isPadded = ")
    call Display( obj%isNew(), "isNew = ")
    call Display( obj%isOverwrite(), "isOverwrite = ")
    call Display( obj%isInitiated(), "isInitiated = ")
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
