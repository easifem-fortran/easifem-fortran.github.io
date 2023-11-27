---
authors: Vikas Sharma, Ph. D.
date: 2021-11-08
update: 2021-11-08
title: TxtFile Example 7
tags:
    - TxtFile/Initiate
    - TxtFile/GetTotalRecords
    - TxtFile/Read
---

# TxtFile Example 7

This example shows the usage of `Read` methods to read a matrix.

## Modules and classes

- [[TxtFile_]]
- [[String]]

## Usage

Importing modules and defining variables

``` fortran
program main
  use easifemBase
  use easifemClasses
  type(txtfile_) :: obj
  type(string) :: aline
  integer(i4b), allocatable :: intval(:,:), iostat
  real(dfp), allocatable :: realval(:,:)
  type(intvector_), allocatable :: intvectorval( : )
  type(realvector_), allocatable :: realvectorval( : )
  character(len=*), parameter :: filename="./examples/matrixval.txt"
```

Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file

```fortran
  call obj%initiate(filename=filename, status='OLD', &
    & action='READ')
  call obj%open()
```

Read the value in the integer.

```fortran
  call obj%read(val=intval, iostat=iostat)
  call display( intval, "intval = ")
```

Read the value in the real.

```fortran
  call obj%rewind()
  call obj%read(val=realval, iostat=iostat)
  call display( realval, "realval = ")
```

Read the value in a vector of [[IntVector_]].

```fortran
  call obj%rewind()
  call obj%read(val=intvectorval, iostat=iostat)
  call display( intvectorval, "intvectorval = ")
```

Read the value in a vector of [[RealVector_]].

```fortran
  call obj%rewind()
  call obj%read(val=realvectorval, iostat=iostat)
  call display( realvectorval, "realvectorval = ")
```

Cleaning up.

```fortran
call obj%deallocate()
end program main
```
