In this example we show the usage of [SetDiag](SetDiag.md) function.
We will extract diagonals from a square matrix.

```fortran title="header"
program main
  use easifemBase
  real( DFP ), allocatable :: mat(:, :)
  real( DFP ), allocatable :: d(:)
```

```fortran title="form random diagonal"
  mat = zeros(5,5,1.0_DFP)
  call reallocate(d, size(mat,1))
  call random_number(d)
  d = d * 10
  call display( MdEncode(d), "d = "// CHAR_LF )
```

```fortran title="set main diagonal"
  call SetDiag(mat, d, 0)
  call Display( MdEncode(mat), "mat = " // CHAR_LF)
```

d =

 |        |        |        |        |        |
 |--------|--------|--------|--------|--------|
 | 6.6689 | 5.5432 | 6.7909 | 2.3661 | 2.1642 |

mat =

 |        |        |        |        |        |
 |--------|--------|--------|--------|--------|
 | 6.6689 | 0      | 0      | 0      | 0      |
 | 0      | 5.5432 | 0      | 0      | 0      |
 | 0      | 0      | 6.7909 | 0      | 0      |
 | 0      | 0      | 0      | 2.3661 | 0      |
 | 0      | 0      | 0      | 0      | 2.1642 |

See line 5.

```fortran {5} title="set first super-diagonal"
  call reallocate(d, size(mat,1)-1)
  call random_number(d)
  d = d * 10
  call display( MdEncode(d), "d = "// CHAR_LF )
  call SetDiag(mat, d, 1)
  call Display( MdEncode(mat), "mat = " // CHAR_LF)
```

d =

 |       |        |        |         |
 |-------|--------|--------|---------|
 | 4.594 | 8.1182 | 4.0813 | 0.83561 |

mat =

 |        |        |        |        |         |
 |--------|--------|--------|--------|---------|
 | 6.6689 | 4.594  | 0      | 0      | 0       |
 | 0      | 5.5432 | 8.1182 | 0      | 0       |
 | 0      | 0      | 6.7909 | 4.0813 | 0       |
 | 0      | 0      | 0      | 2.3661 | 0.83561 |
 | 0      | 0      | 0      | 0      | 2.1642  |

See line 5.

```fortran {5} title="set second super-diagonal"
  call reallocate(d, size(mat,1)-2)
  call random_number(d)
  d = d * 10
  call display( MdEncode(d), "d = "// CHAR_LF )
  call SetDiag(mat, d, 2)
  call Display( MdEncode(mat), "mat = " // CHAR_LF)
```

d =

 |        |        |        |
 |--------|--------|--------|
 | 7.2706 | 1.6909 | 6.0739 |

mat =

 |        |        |        |        |         |
 |--------|--------|--------|--------|---------|
 | 6.6689 | 4.594  | 7.2706 | 0      | 0       |
 | 0      | 5.5432 | 8.1182 | 1.6909 | 0       |
 | 0      | 0      | 6.7909 | 4.0813 | 6.0739  |
 | 0      | 0      | 0      | 2.3661 | 0.83561 |
 | 0      | 0      | 0      | 0      | 2.1642  |

See line 5.

```fortran {5} title="set second sub-diagonal"
  call reallocate(d, size(mat,1)-2)
  call random_number(d)
  d = d * 10
  call display( MdEncode(d), "d = "// CHAR_LF )
  call SetDiag(mat, d, -2)
  call Display( MdEncode(mat), "mat = " // CHAR_LF)
```

d =

 |        |        |        |
 |--------|--------|--------|
 | 8.4214 | 2.8808 | 6.9836 |

mat =

 |        |        |        |        |         |
 |--------|--------|--------|--------|---------|
 | 6.6689 | 4.594  | 7.2706 | 0      | 0       |
 | 0      | 5.5432 | 8.1182 | 1.6909 | 0       |
 | 8.4214 | 0      | 6.7909 | 4.0813 | 6.0739  |
 | 0      | 2.8808 | 0      | 2.3661 | 0.83561 |
 | 0      | 0      | 6.9836 | 0      | 2.1642  |

```fortran title="cleanup"
end program
```
