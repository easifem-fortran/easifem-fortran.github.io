This example is similar to example 2, but in this case we test domain option.

```fortran
PROGRAM main
use easifemBase
real( DFP ), allocatable :: b( :, : )
  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="Unit")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

| x1      | x2      |
|---------|---------|
| 0       | 0       |
| 0       | 0.33333 |
| 0       | 0.66667 |
| 0       | 1       |
| 0.33333 | 0       |
| 0.33333 | 0.33333 |
| 0.33333 | 0.66667 |
| 0.66667 | 0       |
| 0.66667 | 0.33333 |
| 1       | 0       |

```fortran
  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="biunit")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

| x1       | x2       |
|----------|----------|
| -1       | -1       |
| -1       | -0.33333 |
| -1       | 0.33333  |
| -1       | 1        |
| -0.33333 | -1       |
| -0.33333 | -0.33333 |
| -0.33333 | 0.33333  |
| 0.33333  | -1       |
| 0.33333  | -0.33333 |
| 1        | -1       |

```fortran
  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="barycentric")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

| b0      | b1      | b2      |
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
  b = RecursiveNode2D(order=3, ipType=Equidistance, domain="Equilateral")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

|     x1      |      x2     |
|-------------|-------------|
| -1          | -0.57735    |
| -0.66667    | 9.61481E-17 |
| -0.33333    | 0.57735     |
| 1.11022E-16 | 1.1547      |
| -0.33333    | -0.57735    |
| 0           | 0           |
| 0.33333     | 0.57735     |
| 0.33333     | -0.57735    |
| 0.66667     | 0           |
| 1           | -0.57735    |

```fortran
END PROGRAM main
```
