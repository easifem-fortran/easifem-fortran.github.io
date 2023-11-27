This example shows the usage of [Binom](Binom.md) method.

```fortran 
program main
  use easifembase
  implicit none
```

Here we are calculating ${}^{4}C_{m}$, for $m=0,1,2,3,4$

```fortran 
  call display( Binom(4, 0, kind=1.0_DFP), "(4, 0) = " )
  call display( Binom(4, 1, kind=1.0_DFP), "(4, 1) = " )
  call display( Binom(4, 2, kind=1.0_DFP), "(4, 2) = " )
  call display( Binom(4, 3, kind=1.0_DFP), "(4, 3) = " )
  call display( Binom(4, 4, kind=1.0_DFP), "(4, 4) = " )
```

```txt title="Results" 
(4, 0) = 1.00000
(4, 1) = 4.00000
(4, 2) = 6.00000
(4, 3) = 4.00000
(4, 4) = 1.00000
```

```fortran
end program main
```
