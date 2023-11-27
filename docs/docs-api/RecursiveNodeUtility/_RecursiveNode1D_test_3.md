
- In this example `ipType=GaussLegendreLobatto`

```fortran
PROGRAM main
use easifemBase
real(DFP), allocatable :: b( :, : )
integer(i4b), parameter :: ipType=GaussLegendreLobatto
```

```fortran
  b = RecursiveNode1D(order=0, ipType=ipType)
  call Display(MdEncode(b), "b="//char_lf)
```

b=

|     |
|-----|
| 0.5 |
| 0.5 |

```fortran
  b = RecursiveNode1D(order=1, ipType=ipType)
  call Display(MdEncode(b), "b="//char_lf)
```

b=

|   |   |
|---|---|
| 0 | 1 |
| 1 | 0 |

```fortran
  b = RecursiveNode1D(order=2, ipType=ipType)
  call Display(MdEncode(b), "b="//char_lf)
```

b=

|             |     |             |
|-------------|-----|-------------|
| 1.11022E-16 | 0.5 | 1           |
| 1           | 0.5 | 1.11022E-16 |

```fortran
  b = RecursiveNode1D(order=4, ipType=ipType)
  call Display(MdEncode(b), "b="//char_lf)
```

b=

|              |         |     |         |              |
|--------------|---------|-----|---------|--------------|
| -1.11022E-16 | 0.17267 | 0.5 | 0.82733 | 1            |
| 1         | 0.82733 | 0.5 | 0.17267 | -1.11022E-16 |

```fortran
END PROGRAM main
```
