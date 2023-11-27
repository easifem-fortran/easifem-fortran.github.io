This example shows the usage of `In` method.

```fortran
program main
  use easifembase
  implicit none
 call OK( .NOT. ([9, 10, 11, 12] .In. [12,9]), "test(1)=")
 call OK( [12,9] .In. [9, 10, 11, 12], "test(2)=")
end program main
```
