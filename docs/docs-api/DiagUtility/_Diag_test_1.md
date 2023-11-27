In this example we show the usage of Diag function.
We will form diagonal matrix in this example from `REAL(DFP)` vector.

```fortran
program main
  use easifemBase

  real( DFP ), allocatable :: mat(:, :)
  real( DFP ), allocatable :: d(:)

  call reallocate(d, 5)
  call random_number(d)
  d = d * 10
  call display( MdEncode(d), "d = " )

  mat = Diag(d)
  call display( MdEncode(mat), "mat = " )

end program
```

## Results

d =

|        |       |         |         |        |
|--------|-------|---------|---------|--------|
| 8.2717 | 3.502 | 0.39168 | 0.51942 | 2.6892 |

mat =

|        |       |         |         |        |
|--------|-------|---------|---------|--------|
| 8.2717 | 0     | 0       | 0       | 0      |
| 0      | 3.502 | 0       | 0       | 0      |
| 0      | 0     | 0.39168 | 0       | 0      |
| 0      | 0     | 0       | 0.51942 | 0      |
| 0      | 0     | 0       | 0       | 2.6892 |
