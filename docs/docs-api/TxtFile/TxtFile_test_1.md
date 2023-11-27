---
authors: Vikas Sharma, Ph. D.
date: 2022-07-20
update: 2022-07-20
title: TxtFile Example 1
tags:
  - TxtFile/Initiate
  - TxtFile/Open
---

# TxtFile example 1

In this example we create an instance of [[TxtFile_]], then we open it and write some data to it.

## Modules and classes

- [[TxtFile_]]
- [[String]]

## Usage

Importing modules and defining variables

``` fortran
PROGRAM main
  use easifemBase
  use easifemClasses
  TYPE(TxtFile_) :: obj
  TYPE(String) :: aline
  INTEGER(I4B) :: ii
  character(len=*), parameter :: filename="./example.txt"
```

Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file

```fortran
  CALL obj%Initiate(filename=filename, status='NEW', &
    & action='WRITE')
  CALL obj%Open()
```

Write a long line to the file

```fortran
  aline = aline%repeat("hello world! ", 1000 )
  WRITE(obj%getUnitNo(), "(A)" ) aline%chars()
```

Lets close the file.

```fortran
  CALL obj%Deallocate
```

Lets open it again with read access.

```fortran
  CALL obj%Initiate(filename=filename, status='OLD', &
    & action='READ')
  CALL obj%Open()
```

Lets read the long line

```fortran
  aline=""
  CALL obj%readLine( aline )
  CALL Display( aline, "aline read = ")
```

Cleaning up.

```fortran
CALL obj%Deallocate()
END PROGRAM main
```
