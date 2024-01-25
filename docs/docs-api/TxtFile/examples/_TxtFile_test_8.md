This example shows the usage of `Write` methods to write a scalar.

Importing modules and defining variables

```fortran
program main
  use easifemBase
  use easifemClasses
  type(txtfile_) :: obj
  type(string) :: aline
  integer(i4b) :: int_r0, iostat
  real(dfp) :: real_r0
  character(len=*), parameter :: filename="./examples/w_scalarval.txt"
```

Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file. We set separator to ","

```fortran
call obj%initiate(filename=filename, status='NEW', &
  & action='WRITE', separator="," )
call obj%open()
```

Write the value of integer.

```fortran
int_r0 = 10
call obj%write(val=int_r0)
```

The result is given below.

```txt
>result
10
```

Write the value of real.

```fortran
real_r0 = 110
call obj%write(val=real_r0)
real_r0 = -110
call obj%write(val=real_r0)
```

The result is given below

```txt
>result
 0.110000000000000E+003
-0.110000000000000E+003
```

Write the value of real with advance = "NO" with separator = ","

```fortran
real_r0 = -120
call obj%write(val=real_r0, advance="NO")
real_r0 = -130
call obj%write(val=real_r0, advance="NO")
real_r0 = -140
call obj%write(val=real_r0, advance="YES")
```

The results is given below

```txt
>result
-0.120000000000000E+003,-0.130000000000000E+003,-0.140000000000000E+003
```

Cleaning up.

```fortran
call obj%deallocate()
end program main
```
