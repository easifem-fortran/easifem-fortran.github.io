This example shows the usage of `Write` methods to write a vector.

Importing modules and defining variables

```fortran
program main
  use easifemBase
  use easifemClasses
  type(txtfile_) :: obj
  type(string) :: aline
  integer(i4b), allocatable :: int_r0(:)
  integer(i4b) :: iostat
  real(dfp), allocatable :: real_r0( : )
  character(len=*), parameter :: filename="./examples/w_vectorval.txt"
```

Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file. We use comma separated values.

```fortran
call obj%initiate(filename=filename, status='NEW', &
  & action='WRITE', separator=",")
call obj%open()
```

Write the value of integer vector. By default a vector is treated as a column.

```fortran
int_r0 = [10, 20, 30]
call obj%write(val=int_r0)
```

The result is given below.

```txt
> result
10
20
30
```

We can write the results as a row by setting `orient=ROW`. Note that by default `advance="YES"`.

```fortran
call obj%write(val=int_r0, orient="ROW")
```

```txt
> result
10,20,30
```

Write the value of real vector.

```fortran
real_r0 = arange(0.0, 1.0, 0.5)
call obj%write(val=real_r0)
```

The result is given below

```txt
>result
 0.000000000000000E+000
 0.500000000000000E+000
 0.100000000000000E+001
```

We can set `advance="NO"` to obtain the following.
Note that if want to advance to next line, then you should make an empty call to write.

```fortran
call obj%write(val=real_r0, advance="NO")
!! now advancing
call obj%write()
```

The result is given below:

```txt
>result
 0.000000000000000E+000, 0.500000000000000E+000, 0.100000000000000E+001,
```

We can also obtain the above result by usign `orient=ROW`.
In this case `advance=YES` by default.

```fortran
call obj%write(val=real_r0, orient="ROW")
```

The results is given below

```txt
> result
 0.000000000000000E+000, 0.500000000000000E+000, 0.100000000000000E+001
```

Following code shows how you can write many rows in a single line. Remember to set advance="YES" for the last call, or make a call to `obj%write()` without any arguments.

```fortran
call obj%write(val=10*real_r0, orient="ROW", advance="NO")
call obj%write(val=20*real_r0, orient="ROW", advance="YES")
```

```txt
>result
 0.000000000000000E+000, 0.500000000000000E+001, 0.100000000000000E+002, 0.000000000000000E+000, 0.100000000000000E+002, 0.200000000000000E+002
```

Cleaning up.

```fortran
call obj%deallocate()
end program main
```
