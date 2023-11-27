This example is similar to example 1, but in this case we test domain option.

```fortran
PROGRAM main
  use easifemBase
  real( DFP ), allocatable :: b( :, : )
  b = RecursiveNode1D(order=3, ipType=Equidistance, &
    & domain="Unit")
  call Display(b, "b Unit=")
  b = RecursiveNode1D(order=3, ipType=Equidistance, &
    & domain="Biunit")
  call Display(b, "b BiUnit=")
  b = RecursiveNode1D(order=3, ipType=Equidistance, &
    & domain="Barycentric")
  call Display(b, "b Barycentric=")
  b = RecursiveNode1D(order=3, ipType=Equidistance, &
    & domain="Equilateral")
  call Display(b, "b Equilateral=")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```fortran
              b Unit=
----------------------------------
0.00000  0.33333  0.66667  1.00000

              b BiUnit=
--------------------------------------
-1.00000  -0.33333   0.33333   1.00000

          b Barycentric=
----------------------------------
0.00000  0.33333  0.66667  1.00000
1.00000  0.66667  0.33333  0.00000

            b Equilateral=
--------------------------------------
-1.00000  -0.33333   0.33333   1.00000
```

</div>
</details>
