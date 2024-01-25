In this example we initiate an instance of `FortranFile_`. Then, we will open and close it.

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none
  type(FortranFile_) :: obj

call obj%initiate( filename="./example.txt",   status='REPLACE',   action='WRITE')

call obj%open()
call obj%close()

end program main
```
