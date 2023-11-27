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
  - CSVFile/Get
---

# CSVFile example 2

In this example we create an instance of [[CSVFile_]], then we open it and read it. And use `get` subroutine.

## Modules and classes

- [[CSVFile_]]
- [[String]]

## Usage

Importing modules and defining variables

``` fortran
PROGRAM main
  use easifemBase
  use easifemClasses
  type(csvfile_) :: obj
  type(string) :: aline
  type(string), allocatable :: strvec( : )
  integer(i4b) :: ii, intval
  type( intvector_ ) :: intvec
  type( realvector_ ) :: realvec
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
```

Get a single value.

```fortran
  call obj%get( irow=1, icol=1, val=intval)
  call display( intval, "intval = " )
```

Get the entire column in [[IntVector_]]

```fortran
  call obj%get( icol=1, val=intvec)
  call display( intvec, "intvec = " )
```

Get the entire column in integer vector

```fortran
  call deallocate( intvec )
  call obj%get( icol=1, val=intvec%val)
  call display( intvec%val, "intvec%val = " )
```

Get the entire column in [[RealVector_]]

```fortran
  call obj%get( icol=1, val=realvec)
  call display( realvec, "realvec = " )
```

Get the entire column in real vector

```fortran
  call deallocate( realvec )
  call obj%get( icol=1, val=realvec%val)
  call display( realvec%val, "realvec%val = " )
```

Get the entire column in string vector

```fortran
  call obj%get( icol=1, val=strvec)
  do ii = 1, size(strvec); call display( strvec(ii), "strvec(ii) = " ); end do
```

Cleaning up.

```fortran
CALL obj%Deallocate()
END PROGRAM main
```
