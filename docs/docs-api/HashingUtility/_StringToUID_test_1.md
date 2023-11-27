This example shows the usage of `StringToUID` method.

```fortran
program main
  use easifembase
  implicit none
  call display( StringToUID( "A" ), "A = " )
  call display( StringToUID( "a" ), "a = " )
  call display( StringToUID( "Z" ), "Z = " )
  call display( StringToUID( "z" ), "z = " )
  call display( StringToUID( "x**2" ), "x**2 = " )
  call display( StringToUID( "x**12" ), "x**12 = " )
  call display( StringToUID( "x-2" ), "x^2 = " )
  call display( StringToUID( "x-12" ), "x^12 = " )
end program main
```

## Results

```fortran
A = 1
a = 33
Z = 26
z = 58
x**2 = -147168
x**12 = -761789
x^2 = -40277
x^12 = -127346
```
