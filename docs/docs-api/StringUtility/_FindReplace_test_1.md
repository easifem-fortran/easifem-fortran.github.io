```fortran
program main
use easifemBase

CHARACTER( LEN = 100 ) :: astr 

astr = "Hello world, how are you"

CALL FindReplace(astr, "you", "you!")
CALL Display(astr, "astr = ")
end program main
```

## Result

```txt
astr =Hello world, how are you!
```
