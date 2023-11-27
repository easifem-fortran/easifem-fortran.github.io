In this example we show the usage of Diag function. We will form diagonal matrix in this example from `REAL(Real32)` vector.

```fortran title="header"
program main
  use easifemBase
```

```fortran title="variables"
  real( DFP ), allocatable :: mat(:, :)
  real( Real32 ), allocatable :: d(:)
```

```fortran title="form random diagonal"
  call reallocate(d, 5)
  call random_number(d)
  d = d * 10
  call display( MdEncode(d), "d = " )
```

```fortran title="diagonal matrix"
  mat = Diag(d)
  call display( MdEncode(mat), "mat = " )
```

```fortran title="cleanup"
end program
```

## Results

d =

|       |        |        |        |        |
|-------|--------|--------|--------|--------|
| 5.165 | 2.5622 | 1.1153 | 1.0442 | 5.2306 |

mat =

|       |        |        |        |        |
|-------|--------|--------|--------|--------|
| 5.165 | 0      | 0      | 0      | 0      |
| 0     | 2.5622 | 0      | 0      | 0      |
| 0     | 0      | 1.1153 | 0      | 0      |
| 0     | 0      | 0      | 1.0442 | 0      |
| 0     | 0      | 0      | 0      | 5.2306 |
