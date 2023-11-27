```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = * ), parameter :: afile = "./HelloWorld.txt"
CHARACTER( LEN = * ), parameter :: afile2 = "/dir1/dir2/HelloWorld.txt"
CHARACTER( LEN = 100 ) :: filename

CALL GetFileName(afile, filename)
CALL Display(filename, "filename = ")


CALL GetFileName(afile2, filename)
CALL Display(filename, "filename = ")
end program main
```

```txt title="results"
filename =HelloWorld.txt
filename =HelloWorld.txt
```
