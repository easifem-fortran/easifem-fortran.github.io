This example shows the usage of `In` method.

```fortran
program main
  use easifembase
  implicit none
 call OK( 12 .In. [9, 10, 11, 12], "test(1)=")
 call OK( .NOT. (13 .In. [9, 10, 11, 12]), "test(2)=")
end program main
```
