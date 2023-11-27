```fortran
PROGRAM main
  use easifemBase
  real( DFP ), allocatable :: b( :, : )
  b = RecursiveNode1D(order=0, ipType=Equidistance)
  call Display(MdEncode(b), "b="//char_lf)
  b = RecursiveNode1D(order=1, ipType=Equidistance)
  call Display(MdEncode(b), "b="//char_lf)
  b = RecursiveNode1D(order=2, ipType=Equidistance)
  call Display(MdEncode(b), "b="//char_lf)
  b = RecursiveNode1D(order=3, ipType=Equidistance)
  call Display(MdEncode(b), "b="//char_lf)
END PROGRAM main
```

Order 0

b =

|     |
|-----|
| 0.5 |
| 0.5 |

Order 1

b =

|   |   |
|---|---|
| 0 | 1 |
| 1 | 0 |

Order 2

b =

|   |     |   |
|---|-----|---|
| 0 | 0.5 | 1 |
| 1 | 0.5 | 0 |

Order 3

b =

|   |         |         |   |
|---|---------|---------|---|
| 0 | 0.33333 | 0.66667 | 1 |
| 1 | 0.66667 | 0.33333 | 0 |
