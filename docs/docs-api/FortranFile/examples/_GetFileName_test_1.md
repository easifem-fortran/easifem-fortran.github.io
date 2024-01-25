In this example we initiate a `FortranFile_`, open and close it.

Then we get the file name, extension, and path.

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none
  type(FortranFile_) :: obj
  type(String) :: astr

  call obj%initiate( &
    & filename="./example.txt", &
    & status='REPLACE', &
    & action='WRITE')

  astr = obj%getFilePath()
  call astr%Display( "filePath = " )
  astr = obj%getfileExt()
  call astr%Display( "fileExt = " )
  astr = obj%getfileName()
  call astr%Display( "fileName = " )

  call obj%open()
  call obj%close()

end program main
```
