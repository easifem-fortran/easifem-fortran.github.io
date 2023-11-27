```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = * ), parameter :: afile = "./HelloWorld.txt"
CHARACTER( LEN = * ), parameter :: afile2 = "/dir1/dir2/HelloWorld.txt"
CHARACTER( LEN = 100 ) :: filename

CALL GetFileNameExt(afile, filename)
CALL Display(filename, "extension =")


CALL GetFileNameExt(afile2, filename)
CALL Display(filename, "extension =")
end program main
```

```txt title="results"
extension =.txt
extension =.txt
```
