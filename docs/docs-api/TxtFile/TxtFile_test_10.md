---
authors: Vikas Sharma, Ph. D.
date: 2021-11-08
update: 2021-11-08
title: TxtFile Example 10
tags:
    - TxtFile/Initiate
    - TxtFile/GetTotalRecords
    - TxtFile/Write
---

# TxtFile Example 10

This example shows the usage of `Write` methods to write a matrix.

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
  integer(i4b), allocatable :: int_r0(:,:)
  integer(i4b) :: iostat
  real(dfp), allocatable :: real_r0( :, : )
  character(len=*), parameter :: filename="./examples/w_matrixval.txt"
```

Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file

```fortran
  call obj%initiate(filename=filename, status='NEW', &
    & action='WRITE', separator=",")
  call obj%open()
```

Write the value of integer.

```fortran
  int_r0 = arange(1,3,1) .COLCONCAT. arange(4,6,1)
  call obj%write(val=int_r0)
```

The result is given below. Note that the cols separated by a space.

```txt
> result
1,4
2,5
3,6
```

We can also write the transpose by setting `orient=COL`. In the above call by default `orient="ROW"`.

```fortran
  call obj%write(val=int_r0, orient="COL")
```

```txt
> result
1,2,3
4,5,6
```

The matrix of reals also behave in the same-way.

Cleaning up.

```fortran
call obj%deallocate()
end program main
```
