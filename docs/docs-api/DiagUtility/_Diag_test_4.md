In this example we show the usage of [Diag](Diag.md) function.

We will form diagonal matrix in this example from `INTEGER(I4B)` vector.

## Usage

```fortran title="header"
program main
  use easifemBase
```

## Declare variables

```fortran title="variables"
  real( DFP ), allocatable :: mat(:, :)
  integer(I4B), allocatable :: d(:)
```

## Form diagonal

```fortran title="form random diagonal"
  call reallocate(d, 5)
  d = [1,2,3,4,5]
```

## For diag matrix

```fortran title="diagonal matrix"
  mat = Diag(d)
  call display( MdEncode(mat), "mat = " )
```

## Results

mat =

|   |   |   |   |   |
|---|---|---|---|---|
| 1 | 0 | 0 | 0 | 0 |
| 0 | 2 | 0 | 0 | 0 |
| 0 | 0 | 3 | 0 | 0 |
| 0 | 0 | 0 | 4 | 0 |
| 0 | 0 | 0 | 0 | 5 |

```fortran title="cleanup"
end program
```
