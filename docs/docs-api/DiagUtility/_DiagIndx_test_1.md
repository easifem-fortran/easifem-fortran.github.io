In this example we show the usage of [DiagIndx](DiagIndx.md)
routine.

```fortran
program main
  use easifemBase
```

```fortran
  call Display( DiagIndx(4, 4, 0), "(4,4), main diagonal = " )
  call Display( DiagIndx(4, 4, 1), "(4,4), first superdiagonal = " )
  call Display( DiagIndx(4, 4, 2), "(4,4), second superdiagonal = " )
```

Results:

```txt
(4,4), main diagonal =
-----------------------
         1  1
         2  2
         3  3
         4  4

(4,4), first superdiagonal =
-----------------------------
            1  2
            2  3
            3  4

(4,4), second superdiagonal =
------------------------------
             1  3
             2  4
```

```fortran
  call Display( DiagIndx(4, 4, -1), "(4,4), first subdiagonal = " )
  call Display( DiagIndx(4, 4, -2), "(4,4), second subdiagonal = " )
```

Results:

```txt
(4,4), first subdiagonal =
---------------------------
           2  1
           3  2
           4  3

(4,4), second subdiagonal =
----------------------------
            3  1
            4  2

```

:::note
Let us now test `DiagIndx` for <span class="badge badge--success">  RECTANGLE </span>  matrix.
:::

```fortran
  call Display( DiagIndx(4, 7, 0), "(4, 7), main diagonal = " )
  call Display( DiagIndx(4, 7, 1), "(4, 7), first superdiagonal = " )
  call Display( DiagIndx(4, 7, 2), "(4, 7), second superdiagonal = " )
  call Display( DiagIndx(4, 7, 3), "(4,7), third superdiagonal = " )
  call Display( DiagIndx(4, 7, 4), "(4,7), fourth superdiagonal = " )
  call Display( DiagIndx(4, 7, 5), "(4,7), fifth superdiagonal = " )
  call Display( DiagIndx(4, 7, 6), "(4,7), sixth superdiagonal = " )
```

Results:

```txt title="results"
(4, 7), main diagonal =
------------------------
          1  1
          2  2
          3  3
          4  4

(4, 7), first superdiagonal =
------------------------------
             1  2
             2  3
             3  4
             4  5

(4, 7), second superdiagonal =
-------------------------------
             1  3
             2  4
             3  5
             4  6

(4,7), third superdiagonal =
-----------------------------
            1  4
            2  5
            3  6
            4  7

(4,7), fourth superdiagonal =
------------------------------
             1  5
             2  6
             3  7

(4,7), fifth superdiagonal =
-----------------------------
            1  6
            2  7

(4,7), sixth superdiagonal =
-----------------------------
            1  7
```

```fortran title="(4,7) 1:3 subdiagonal"
  call Display( DiagIndx(4, 7, -1), "(4,7), first subdiagonal = " )
  call Display( DiagIndx(4, 7, -2), "(4,7), second subdiagonal = " )
  call Display( DiagIndx(4, 7, -3), "(4,7), thrid subdiagonal = " )
```

```txt title="results"
(4,7), first subdiagonal =
---------------------------
           2  1
           3  2
           4  3
(4,7), second subdiagonal =
----------------------------
            3  1
            4  2
(4,7), thrid subdiagonal =
---------------------------
           4  1
```

```fortran
end program
```
