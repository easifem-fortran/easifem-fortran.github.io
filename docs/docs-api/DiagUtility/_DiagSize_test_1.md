In this example we show the usage of [DiagSize](DiagSize.md)
routine.

## Usage

```fortran title="header"
program main
  use easifemBase
```

```fortran title="(4,4) main diagonal"
  call Display( DiagSize(4, 0), "(4,4), main diagonal = " )
```

```fortran title="(4,4) first super diagonal"
  call Display( DiagSize(4, 1), "(4,4), first superdiagonal = " )
```

```fortran title="(4,4) second super diagonal"
  call Display( DiagSize(4, 2), "(4,4), second superdiagonal = " )
```

```fortran title="(4,4) out of bound super diagonal"
  call Display( DiagSize(4, 5), "(4,4), out of bound superdiagonal = " )
```

```txt title="results"
(4,4), main diagonal = 4
(4,4), first superdiagonal = 3
(4,4), second superdiagonal = 2
(4,4), out of bound superdiagonal = 0
```

```fortran title="(4,4) first subdiagonal"
  call Display( DiagSize(4, -1), "(4,4), first subdiagonal = " )
```

```fortran title="(4,4) second subdiagonal"
  call Display( DiagSize(4, -2), "(4,4), second subdiagonal = " )
```

```fortran title="(4,4) out of bound subdiagonal"
  call Display( DiagSize(4, -5), "(4,4), out of bound subdiagonal = " )
```

```txt title="results"
(4,4), first subdiagonal = 3
(4,4), second subdiagonal = 2
(4,4), out of bound subdiagonal = 0
```

Let us now test `DiagSize` for rectangle matrix.

```fortran title="(4,7) main diagonal"
  call Display( DiagSize(4, 7, 0), "(4, 7), main diagonal = " )
```

```fortran title="(4,7) first super diagonal"
  call Display( DiagSize(4, 7, 1), "(4, 7), first superdiagonal = " )
```

```fortran title="(4,7) second super diagonal"
  call Display( DiagSize(4, 7, 2), "(4, 7), second superdiagonal = " )
```

```fortran title="(4,7) more superdiagonal"
  call Display( DiagSize(4, 7, 3), "(4,7), third superdiagonal = " )
  call Display( DiagSize(4, 7, 4), "(4,7), fourth superdiagonal = " )
  call Display( DiagSize(4, 7, 5), "(4,7), fifth superdiagonal = " )
  call Display( DiagSize(4, 7, 6), "(4,7), sixth superdiagonal = " )
```

```fortran title="(4,7) out of bound superdiagonal"
  call Display( DiagSize(4, 7, 7), "(4,7), out of bound superdiagonal = " )
```

```txt title="results"
(4, 7), main diagonal = 4
(4, 7), first superdiagonal = 4
(4, 7), second superdiagonal = 4
(4,7), third superdiagonal = 4
(4,7), fourth superdiagonal = 3
(4,7), fifth superdiagonal = 2
(4,7), sixth superdiagonal = 1
(4,7), out of bound superdiagonal = 0
```

```fortran title="(4,7) 1:3 subdiagonal"
  call Display( DiagSize(4, 7, -1), "(4,7), first subdiagonal = " )
  call Display( DiagSize(4, 7, -2), "(4,7), second subdiagonal = " )
  call Display( DiagSize(4, 7, -3), "(4,7), thrid subdiagonal = " )
```

```fortran title="(4,7) out of bound subdiagonal"
  call Display( DiagSize(4, 7, -4), "(4,7), out of bound subdiagonal = " )
```

```txt title="results"
(4,7), first subdiagonal = 3
(4,7), second subdiagonal = 2
(4,7), thrid subdiagonal = 1
(4,7), out of bound subdiagonal = 0
```

Now let's test it for rectangle matrix.

```fortran title="cleanup"
end program
```
