- In this example `ipType=Equidistance`

```fortran
PROGRAM main
use easifemBase
real( DFP ), allocatable :: b( :, : )
integer(i4b) :: iptype = Equidistance

  b = RecursiveNode2D(order=0, ipType=ipType)
  call Display(MdEncode(b), "b="//char_lf)
```

b=

|         |
|---------|
| 0.33333 |
| 0.33333 |
| 0.33333 |

```fortran
  b = RecursiveNode2D(order=1, ipType=ipType)
  call Display(MdEncode(b), "b="//char_lf)
```

b=

|   |   |   |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |

```fortran
  b = RecursiveNode2D(order=2, ipType=ipType)
  call Display(MdEncode(b), "b="//char_lf)
```

b=

|   |     |   |     |     |   |
|---|-----|---|-----|-----|---|
| 0 | 0   | 0 | 0.5 | 0.5 | 1 |
| 0 | 0.5 | 1 | 0   | 0.5 | 0 |
| 1 | 0.5 | 0 | 0.5 | 0   | 0 |

```fortran
  b = RecursiveNode2D(order=3, ipType=ipType)
  call Display(MdEncode(transpose(b)), "b=")
```

b=

|         |         |         |
|---------|---------|---------|
| 0       | 0       | 1       |
| 0       | 0.33333 | 0.66667 |
| 0       | 0.66667 | 0.33333 |
| 0       | 1       | 0       |
| 0.33333 | 0       | 0.66667 |
| 0.33333 | 0.33333 | 0.33333 |
| 0.33333 | 0.66667 | 0       |
| 0.66667 | 0       | 0.33333 |
| 0.66667 | 0.33333 | 0       |
| 1       | 0       | 0       |

```fortran
END PROGRAM main
```
