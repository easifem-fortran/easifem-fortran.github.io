In this example we show the usage of Diag function.

We will extract diagonals from a square matrix.

```fortran
program main
  use easifemBase

  real( DFP ), allocatable :: mat(:, :)
  real( DFP ), allocatable :: d(:)

  call reallocate(mat, 5, 5)
  call random_number(mat)
  call display( MdEncode(mat), "mat = " )
```

mat =

 |         |             |             |            |         |
 |---------|-------------|-------------|------------|---------|
 | 0.68758 | 3.17016E-02 | 0.59785     | 4.6886E-02 | 0.61175 |
 | 0.48573 | 0.67486     | 0.73655     | 0.52901    | 0.60769 |
 | 0.17241 | 0.52752     | 0.79169     | 0.21098    | 0.94547 |
 | 0.21998 | 0.67235     | 0.52645     | 0.32917    | 0.3067  |
 | 0.50651 | 5.82701E-02 | 4.87607E-02 | 0.38279    | 0.11833 |

```fortran title="getting the main diagonal"
  d = Diag(mat, 0)
  call display( MdEncode(d), "main diagonal = " )
```

main diagonal =

 |         |         |         |         |         |
 |---------|---------|---------|---------|---------|
 | 0.68758 | 0.67486 | 0.79169 | 0.32917 | 0.11833 |

```fortran title="getting the first super diagonal"
  d = Diag(mat, 1)
  call display( MdEncode(d), "super diagonal 1= " )
```

super diagonal 1=

 |             |         |         |        |
 |-------------|---------|---------|--------|
 | 3.17016E-02 | 0.73655 | 0.21098 | 0.3067 |

```fortran title="getting the second super diagonal"
  d = Diag(mat, 2)
  call display( MdEncode(d), "super diagonal 2= " )
```

super diagonal 2=

 |         |         |         |
 |---------|---------|---------|
 | 0.59785 | 0.52901 | 0.94547 |

```fortran title="getting the first sub diagonal"
  d = Diag(mat, -1)
  call display( MdEncode(d), "subdiagonal 1= " )
```

subdiagonal 1=

 |         |         |         |         |
 |---------|---------|---------|---------|
 | 0.48573 | 0.52752 | 0.52645 | 0.38279 |

```fortran title="getting the second subdiagonal"
  d = Diag(mat, -2)
  call display( MdEncode(d), "subdiagonal 2= " )
```

subdiagonal 2=

 |         |         |             |
 |---------|---------|-------------|
 | 0.17241 | 0.67235 | 4.87607E-02 |

```fortran title="cleanup"
end program
```
