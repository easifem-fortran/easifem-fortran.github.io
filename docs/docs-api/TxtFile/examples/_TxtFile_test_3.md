This code reads a markdown file and extracts the fortran code

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(TxtFile_) :: srcfile, mdfile
CHARACTER(LEN=*), PARAMETER :: mdfilename = "./examples/TxtFile_test_1.md"
CHARACTER(LEN=*), PARAMETER :: srcfilename = "./examples/TxtFile_test_1.f90"

CALL mdfile%Initiate(filename=mdfilename, STATUS="OLD", ACTION="READ")
CALL mdfile%OPEN()
CALL srcfile%Initiate(filename=srcfilename, status="REPLACE", &
     & ACTION="WRITE")
CALL srcfile%Open()
CALL mdfile%ConvertMarkdownToSource(outfile=srcfile)

CALL mdfile%Deallocate()
CALL srcfile%Deallocate()
END PROGRAM main
```
