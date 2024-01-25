This example shows the usage of `Read` methods to read a vector.

Importing modules and defining variables

```fortran
program main
  use easifemBase
  use easifemClasses
  type(txtfile_) :: obj
  type(string) :: aline
  integer(i4b), allocatable :: intval(:), iostat
  real(dfp), allocatable :: realval(:)
  type(intvector_) :: intvectorval
  type(realvector_) :: realvectorval
  type(string), allocatable :: stringval(:)
  character(len=*), parameter :: filename="./examples/vectorval.txt"
  integer(i4b) :: ii
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

Read the value in the string.

```fortran
call obj%rewind()
call obj%read(val=stringval, iostat=iostat)
DO ii = 1, size(stringval)
  call display( stringval(ii), "stringval(ii) = ")
END DO
```

Read the value in an instance of [[IntVector_]]

```fortran
call obj%rewind()
call obj%read(val=intvectorval, iostat=iostat)
call display(intvectorval, "intvectorval")
```

Read the value in an instance of [[RealVector_]]

```fortran
call obj%rewind()
call obj%read(val=realvectorval, iostat=iostat)
call display(realvectorval, "realvectorval")
```

Cleaning up.

```fortran
call obj%deallocate()
end program main
```
