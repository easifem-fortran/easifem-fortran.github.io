This example shows the usage of `getTotalRecords` methods

```fortran
PROGRAM main
use easifemBase
use easifemClasses
TYPE(TxtFile_) :: obj
TYPE(String) :: aline
INTEGER(I4B) :: ii
character(len=*), parameter :: filename="./examples/example.txt"
```

Initiate an instance of [[TxtFile_]], and then #TxtFile/Open : Open the [[TxtFile_]] file

```fortran
CALL obj%Initiate(filename=filename, status='OLD', &
  & action='READ')
CALL obj%OPEN()
```

Returns the total number of records in the file.

This routine does not ignore the blank record as well as comments

```fortran
CALL IS(obj%getTotalRecords(), 8, "test-1")
```

The following code will excludes the comments while counting the number of records. `ignoreComment` and `commentSymbol` should be provided in this case

Note that this code will still include the blanklines as the valid record.

```fortran
CALL IS(obj%getTotalRecords(ignoreComment=.TRUE., commentSymbol="#"), 5, "test-2" )
```

The following code will ignore any blank character from the record.

```fortran
CALL IS(obj%getTotalRecords(ignoreComment=.TRUE., commentSymbol="#", ignoreBlank=.TRUE.), 4, "test-3" )
```

Cleaning up.

```fortran
CALL obj%Deallocate()
END PROGRAM main
```
