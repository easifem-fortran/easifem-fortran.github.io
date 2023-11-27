This example is similar to example 3 but in this case we test domain.

```fortran
PROGRAM main
use easifemBase
real( DFP ), allocatable :: b( :, : )
```

```fortran
  b = RecursiveNode3D(order=2, ipType=Equidistance, &
    & domain="unit")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

| x1  | x2  | x3  |
|-----|-----|-----|
| 0   | 0   | 0   |
| 0   | 0   | 0.5 |
| 0   | 0   | 1   |
| 0   | 0.5 | 0   |
| 0   | 0.5 | 0.5 |
| 0   | 1   | 0   |
| 0.5 | 0   | 0   |
| 0.5 | 0   | 0.5 |
| 0.5 | 0.5 | 0   |
| 1   | 0   | 0   |

```fortran
  b = RecursiveNode3D(order=2, ipType=Equidistance, &
    & domain="biunit")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

| x1 | x2 | x3 |
|----|----|----|
| -1 | -1 | -1 |
| -1 | -1 | 0  |
| -1 | -1 | 1  |
| -1 | 0  | -1 |
| -1 | 0  | 0  |
| -1 | 1  | -1 |
| 0  | -1 | -1 |
| 0  | -1 | 0  |
| 0  | 0  | -1 |
| 1  | -1 | -1 |

```fortran
  b = RecursiveNode3D(order=2, ipType=Equidistance, &
    & domain="barycentric")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

| b0  | b1  | b2  | b3  |
|-----|-----|-----|-----|
| 0   | 0   | 0   | 1   |
| 0   | 0   | 0.5 | 0.5 |
| 0   | 0   | 1   | 0   |
| 0   | 0.5 | 0   | 0.5 |
| 0   | 0.5 | 0.5 | 0   |
| 0   | 1   | 0   | 0   |
| 0.5 | 0   | 0   | 0.5 |
| 0.5 | 0   | 0.5 | 0   |
| 0.5 | 0.5 | 0   | 0   |
| 1   | 0   | 0   | 0   |

!!! note "Equilateral"

```fortran
  b = RecursiveNode3D(order=2, ipType=Equidistance, &
    & domain="Equilateral")
  call Display(MdEncode(transpose(b)), "b=")
```

b=

| x1           | x2       | x3       |
|--------------|----------|----------|
| -1           | -0.57735 | -0.40825 |
| -0.5         | -0.28868 | 0.40825  |
| 0            | 0        | 1.2247   |
| -0.5         | 0.28868  | -0.40825 |
| -5.55112E-17 | 0.57735  | 0.40825  |
| 0            | 1.1547   | -0.40825 |
| 5.55112E-17  | -0.57735 | -0.40825 |
| 0.5          | -0.28868 | 0.40825  |
| 0.5          | 0.28868  | -0.40825 |
| 1            | -0.57735 | -0.40825 |

```fortran
END PROGRAM main
```
