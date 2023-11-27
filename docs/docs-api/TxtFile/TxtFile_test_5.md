---
authors: Vikas Sharma, Ph. D.
date: 2021-11-08
update: 2021-11-08
title: TxtFile Example 5
tags:
    - TxtFile/Initiate
    - TxtFile/GetTotalRecords
    - TxtFile/Read
---

# TxtFile Example 5

This example shows the usage of `Read` methods to read a scalar.

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
  integer(i4b) :: int_r0, iostat
  real(dfp) :: real_r0
  character(len=*), parameter :: filename="./examples/scalarval.txt"
```

Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file

```fortran
  call obj%initiate(filename=filename, status='OLD', &
    & action='READ')
  call obj%open()
```

Read the value in the integer.

```fortran
  int_r0 = 0
  call obj%read(val=int_r0, iostat=iostat)
  call display( int_r0, "int_r0 = ")
```

Read the value in the real.

```fortran
  real_r0 = 0
  call obj%rewind()
  call obj%read(val=real_r0, iostat=iostat)
  call display( real_r0, "real_r0 = ")
```

Cleaning up.

```fortran
call obj%deallocate()
end program main
```
