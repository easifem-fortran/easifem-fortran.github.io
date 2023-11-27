```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = * ), parameter :: afile = "./HelloWorld.txt"
CHARACTER( LEN = * ), parameter :: afile2 = "/dir1/dir2/HelloWorld.txt"
CHARACTER( LEN = 100 ) :: path, name, ext

CALL GetPath(afile, path)
CALL Display(path, "path = ")
```

```txt title="results"
path =./
```

```fortran
CALL GetPath(afile2, path)
CALL Display(path, "path = ")
end program main
```

```txt title="results"
path =/dir1/dir2/
```
