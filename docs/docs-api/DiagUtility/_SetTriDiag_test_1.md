In this example we show the usage of [SetTriDiag](SetTriDiag.md) routine.

We will set the three diagonal of a tridiagonal matrix.

```fortran title="header"
program main
  use easifemBase
```

```fortran title="variables"
  real( DFP ), allocatable :: mat(:, :)
  real( DFP ), allocatable :: d(:), da(:), db(:)
```

```fortran title="form main diagonal"
  mat = zeros(5,5,1.0_DFP)
  call reallocate(d, size(mat,1))
  call random_number(d)
  d = d * 10
  call display( MdEncode(d), "d = "// CHAR_LF )
```

```fortran title="super diagonal"
  call reallocate(da, size(mat,1)-1)
  call random_number(da)
  da = da * 10
  call display( MdEncode(da), "da = "// CHAR_LF )
```

```fortran title="subdigonal"
  call reallocate(db, size(mat,1)-1)
  call random_number(db)
  db = db * 10
  call display( MdEncode(db), "db = "// CHAR_LF )
```

```fortran title="set tridiagonal"
  call SetTriDiag(mat=mat, d=d, da=da, db=db)
  call Display( MdEncode(mat), "mat = " // CHAR_LF)
```

### Results

d =

 |        |        |        |        |        |
 |--------|--------|--------|--------|--------|
 | 5.0829 | 9.4562 | 4.3419 | 7.7858 | 3.9234 |

da =

 |        |        |         |        |
 |--------|--------|---------|--------|
 | 4.9034 | 3.8319 | 0.60738 | 5.3554 |

db =

 |        |         |             |        |
 |--------|---------|-------------|--------|
 | 4.7704 | 0.58276 | 7.87791E-02 | 8.1903 |

mat =

 |        |         |             |         |        |
 |--------|---------|-------------|---------|--------|
 | 5.0829 | 4.9034  | 0           | 0       | 0      |
 | 4.7704 | 9.4562  | 3.8319      | 0       | 0      |
 | 0      | 0.58276 | 4.3419      | 0.60738 | 0      |
 | 0      | 0       | 7.87791E-02 | 7.7858  | 5.3554 |
 | 0      | 0       | 0           | 8.1903  | 3.9234 |

```fortran title="cleanup"
end program
```
