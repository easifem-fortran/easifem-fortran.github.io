In this example we show how to use `ReadLine` function.

Importing modules and defining variables

```fortran
PROGRAM main
  use easifemBase
  use easifemClasses
  TYPE(TxtFile_) :: obj
  TYPE(String) :: aline
  INTEGER(I4B) :: ii
  character(len=*), parameter :: filename="./examples/example.txt"
```

Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file

```fortran
CALL obj%Initiate(filename=filename, status='OLD', &
  & action='READ')
CALL obj%OPEN()
```

Read a line/record from the buffer

```fortran
CALL obj%readLine(aline)
CALL display(aline, "line "//tostring(1)//"=")
```

Rewind the file

```fortran
CALL obj%REWIND()
```

Let us read the entire file.

```fortran
ii = 0
DO WHILE( .not. obj%isEOF() )
  CALL obj%readLine(aline)
  ii = ii + 1
  CALL display(aline, "aline "//tostring(ii)//"=")
END DO
```

Cleaning up.

```fortran
CALL obj%Deallocate()
END PROGRAM main
```
