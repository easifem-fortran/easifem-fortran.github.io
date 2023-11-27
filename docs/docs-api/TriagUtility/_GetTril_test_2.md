This example shows the use of GetTril.

```fortran
program main
use easifemBase
implicit none
```

Testing for Square matrix
Let's get the upper triangular form above Subdiagonals.

```fortran
REAL( Real32 ) :: A( 4, 4 ), lu(4,4)
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)

CALL GetTril(A=A,diagNo=-1, lu=lu)
CALL Display(MdEncode(lu), "diagNo=-1, = " // CHAR_LF  // CHAR_LF)

CALL GetTril(A=A,diagNo=-2, lu=lu)
CALL Display(MdEncode(lu), "diagNo=-2, = " // CHAR_LF // CHAR_LF )
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

diagNo=-1, =

|        |        |        |   |
|--------|--------|--------|---|
| 0      | 0      | 0      | 0 |
| 1.1204 | 0      | 0      | 0 |
| 2.6185 | 8.0988 | 0      | 0 |
| 5.5955 | 2.0122 | 7.5929 | 0 |

diagNo=-2, =

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
