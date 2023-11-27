```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = * ), parameter :: afile = "./HelloWorld.txt"
CHARACTER( LEN = * ), parameter :: afile2 = "/dir1/dir2/HelloWorld.txt"
CHARACTER( LEN = 100 ) :: path, name, ext

CALL GetFileParts(afile, path, name, ext)
CALL Display(path, "path = ")
CALL Display(name, "name = ")
CALL Display(ext, "ext = ")
```

```txt title="results"
path =./
name =HelloWorld
ext =.txt
```

```fortran
CALL GetFileParts(afile, path, name, ext)
CALL Display(path, "path = ")
CALL Display(name, "name = ")
CALL Display(ext, "ext = ")
end program main
```

```txt title="results"
path =./
name =HelloWorld
ext =.txt
```
