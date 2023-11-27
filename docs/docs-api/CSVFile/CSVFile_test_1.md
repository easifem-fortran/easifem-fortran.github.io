---
date: 2022-07-20
update: 2022-07-20
status: stable
docs: todo
extpkgs:
category:
  - Example
tags:
  - example
  - CSVFile/Initiate
  - CSVFile/Open
  - CSVFile/Read
  - CSVFile/GetDataTypes
  - CSVFile/GetValue
---

# CSVFile example 1

In this example we create an instance of [[CSVFile_]], then we open it and read it.

## Modules and classes

- [[CSVFile_]]
- [[String]]

## Usage

Importing modules and defining variables

``` fortran
PROGRAM main
  use easifemBase
  use easifemClasses
  TYPE(CSVFile_) :: obj
  TYPE(String) :: aline
  INTEGER(I4B) :: ii, intval
  real(dfp) :: realval
  character(len=*), parameter :: filename="./example/test1.txt"
  integer( i4b ), allocatable :: datatypes( : )
```

Initiate an instance of [[CSVFile_]], and then Open the [[CSVFile_]] file

```fortran
  call obj%Initiate(filename=filename, status='OLD', action='READ')
  call obj%setHeaderIndx(1_I4B)
  call obj%Open()
  call obj%Read()
  call obj%getDataTypes( datatypes )
  call display( datatypes, "datatypes = ")
  call obj%getValue( irow=1, icol=1, val=intval)
  call display( intval, "intval = " )
```

Cleaning up.

```fortran
CALL obj%Deallocate()
END PROGRAM main
```
