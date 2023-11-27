- In this example `ipType=GaussLegendreLobatto`

```fortran
PROGRAM main
use easifemBase
real( DFP ), allocatable :: b( :, : )
integer(i4b) :: iptype = GaussLegendreLobatto
```

```fortran
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

|             |     |             |     |     |             |
|-------------|-----|-------------|-----|-----|-------------|
| 8.32667E-17 | 0   | 8.32667E-17 | 0.5 | 0.5 | 1           |
| 8.32667E-17 | 0.5 | 1           | 0   | 0.5 | 8.32667E-17 |
| 1           | 0.5 | 8.32667E-17 | 0.5 | 0   | 8.32667E-17 |

```fortran
  b = RecursiveNode2D(order=3, ipType=ipType)
  call Display(MdEncode(transpose(b)), "b=")
```

b=

|              |              |              |
|--------------|--------------|--------------|
| -8.32667E-17 | -8.32667E-17 | 1            |
| 4.01682E-17  | 0.27639      | 0.72361      |
| 4.01682E-17  | 0.72361      | 0.27639      |
| -8.32667E-17 | 1            | -8.32667E-17 |
| 0.27639      | 4.01682E-17  | 0.72361      |
| 0.33333      | 0.33333      | 0.33333      |
| 0.27639      | 0.72361      | 4.01682E-17  |
| 0.72361      | 4.01682E-17  | 0.27639      |
| 0.72361      | 0.27639      | 4.01682E-17  |
| 1            | -8.32667E-17 | -8.32667E-17 |

```fortran
END PROGRAM main
```
