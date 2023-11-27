```fortran
program main
use easifemBase
implicit none
```

Testing for Square matrix

```fortran
BLOCK
REAL( Real32 ) :: A( 4, 4 )
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
CALL Display(MdEncode(Tril(A,diagNo=0)), "diagNo=0, = " // CHAR_LF // CHAR_LF )
CALL Display(MdEncode(Tril(A,diagNo=1)), "diagNo=1, = " // CHAR_LF  // CHAR_LF)
CALL Display(MdEncode(Tril(A,diagNo=2)), "diagNo=2, = " // CHAR_LF // CHAR_LF )
END BLOCK
```

<details>
<summary>See results</summary>
<div>

A =

|         |        |        |        |
|---------|--------|--------|--------|
| 7.2777  | 8.6925 | 3.2953 | 9.1375 |
| 9.5344  | 1.8291 | 3.1941 | 2.7707 |
| 0.72276 | 6.2783 | 8.5105 | 1.4668 |
| 0.67118 | 4.1519 | 4.7936 | 4.623  |

diagNo=0, =

|         |        |        |       |
|---------|--------|--------|-------|
| 7.2777  | 0      | 0      | 0     |
| 9.5344  | 1.8291 | 0      | 0     |
| 0.72276 | 6.2783 | 8.5105 | 0     |
| 0.67118 | 4.1519 | 4.7936 | 4.623 |

diagNo=1, =

|         |        |        |        |
|---------|--------|--------|--------|
| 7.2777  | 8.6925 | 0      | 0      |
| 9.5344  | 1.8291 | 3.1941 | 0      |
| 0.72276 | 6.2783 | 8.5105 | 1.4668 |
| 0.67118 | 4.1519 | 4.7936 | 4.623  |

diagNo=2, =

|         |        |        |        |
|---------|--------|--------|--------|
| 7.2777  | 8.6925 | 3.2953 | 0      |
| 9.5344  | 1.8291 | 3.1941 | 2.7707 |
| 0.72276 | 6.2783 | 8.5105 | 1.4668 |
| 0.67118 | 4.1519 | 4.7936 | 4.623  |

</div>
</details>

Let's get the upper triangular form above Subdiagonals.

```fortran
BLOCK
REAL( Real32 ) :: A( 4, 4 )
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
CALL Display(MdEncode(Tril(A,diagNo=-1)), "diagNo=-1, = " // CHAR_LF  // CHAR_LF)
CALL Display(MdEncode(Tril(A,diagNo=-2)), "diagNo=-2, = " // CHAR_LF // CHAR_LF )
END BLOCK
```

<details>
<summary>See results</summary>
<div>

A =

 |        |         |        |        |
 |--------|---------|--------|--------|
 | 3.4843 | 0.21881 | 7.0136 | 8.6618 |
 | 1.1204 | 4.0021  | 8.4773 | 3.9924 |
 | 2.6185 | 8.0988  | 6.4968 | 2.7172 |
 | 5.5955 | 2.0122  | 7.5929 | 4.431  |

(3,3) diagNo=-1, =

 |        |        |        |   |
 |--------|--------|--------|---|
 | 0      | 0      | 0      | 0 |
 | 1.1204 | 0      | 0      | 0 |
 | 2.6185 | 8.0988 | 0      | 0 |
 | 5.5955 | 2.0122 | 7.5929 | 0 |

(3,3) diagNo=-2, =

 |        |        |   |   |
 |--------|--------|---|---|
 | 0      | 0      | 0 | 0 |
 | 0      | 0      | 0 | 0 |
 | 2.6185 | 0      | 0 | 0 |
 | 5.5955 | 2.0122 | 0 | 0 |

</div>
</details>

```fortran
end program main
```
