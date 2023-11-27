```fortran
program main
use easifemBase
implicit none

BLOCK
REAL( Real32 ) :: A( 4, 4 )
CALL RANDOM_NUMBER(A); A = A*10
CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
CALL Display(MdEncode(Triu(A,diagNo=0)), "(3,3) diagNo=0, = " // CHAR_LF // CHAR_LF )
CALL Display(MdEncode(Triu(A,diagNo=1)), "(3,3) diagNo=1, = " // CHAR_LF  // CHAR_LF)
CALL Display(MdEncode(Triu(A,diagNo=2)), "(3,3) diagNo=2, = " // CHAR_LF // CHAR_LF )
END BLOCK
```

<details>
<summary>See results</summary>
<div>

A =

|        |        |        |        |
|--------|--------|--------|--------|
| 7.4672 | 7.2656 | 2.6319 | 7.4388 |
| 3.3308 | 4.4818 | 8.0987 | 7.1544 |
| 5.7006 | 8.3514 | 2.9005 | 6.3054 |
| 2.1553 | 7.2467 | 4.8848 | 6.7111 |

(3,3) diagNo=0, =

|        |        |        |        |
|--------|--------|--------|--------|
| 7.4672 | 7.2656 | 2.6319 | 7.4388 |
| 0      | 4.4818 | 8.0987 | 7.1544 |
| 0      | 0      | 2.9005 | 6.3054 |
| 0      | 0      | 0      | 6.7111 |

(3,3) diagNo=1, =

|   |        |        |        |
|---|--------|--------|--------|
| 0 | 7.2656 | 2.6319 | 7.4388 |
| 0 | 0      | 8.0987 | 7.1544 |
| 0 | 0      | 0      | 6.3054 |
| 0 | 0      | 0      | 0      |

(3,3) diagNo=2, =

|   |   |        |        |
|---|---|--------|--------|
| 0 | 0 | 2.6319 | 7.4388 |
| 0 | 0 | 0      | 7.1544 |
| 0 | 0 | 0      | 0      |
| 0 | 0 | 0      | 0      |

</div>
</details>

Let's get the upper triangular form above Subdiagonals.

```fortran
BLOCK
REAL( Real32 ) :: A( 4, 4 )
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
CALL Display(MdEncode(Triu(A,diagNo=-1)), "(3,3) diagNo=-1, = " // CHAR_LF  // CHAR_LF)
CALL Display(MdEncode(Triu(A,diagNo=-2)), "(3,3) diagNo=-2, = " // CHAR_LF // CHAR_LF )
END BLOCK
```

<details>
<summary>See results</summary>
<div>

(3,3) diagNo=-1, =

|        |        |        |        |
|--------|--------|--------|--------|
| 3.5096 | 8.8744 | 1.7549 | 1.5576 |
| 8.661  | 7.3655 | 2.6134 | 9.767  |
| 0      | 9.788  | 1.4703 | 3.3602 |
| 0      | 0      | 8.0666 | 1.1451 |

(3,3) diagNo=-2, =

|        |        |        |        |
|--------|--------|--------|--------|
| 3.5096 | 8.8744 | 1.7549 | 1.5576 |
| 8.661  | 7.3655 | 2.6134 | 9.767  |
| 6.0823 | 9.788  | 1.4703 | 3.3602 |
| 0      | 4.1367 | 8.0666 | 1.1451 |

</div>
</details>

```fortran
end program main
```
