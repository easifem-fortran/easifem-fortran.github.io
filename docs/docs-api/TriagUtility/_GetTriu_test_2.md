This example shows the use of GetTriu.

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

CALL GetTriu(A=A,diagNo=-1, lu=lu)
CALL Display(MdEncode(lu), "diagNo=-1, = " // CHAR_LF  // CHAR_LF)

CALL GetTriu(A=A,diagNo=-2, lu=lu)
CALL Display(MdEncode(lu), "diagNo=-2, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

A =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 4.3601 | 7.6972 | 7.6983 | 2.2272 |
| 6.2194 | 1.4554 | 1.4307 | 9.2086 |
| 8.7748 | 4.4743 | 9.8157 | 7.9489 |
| 9.6914 | 8.4748 | 5.7968 | 1.1776 |

diagNo=-1, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 4.3601 | 7.6972 | 7.6983 | 2.2272 |
| 6.2194 | 1.4554 | 1.4307 | 9.2086 |
| 0 | 4.4743 | 9.8157 | 7.9489 |
| 0 | 0 | 5.7968 | 1.1776 |

diagNo=-2, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 4.3601 | 7.6972 | 7.6983 | 2.2272 |
| 6.2194 | 1.4554 | 1.4307 | 9.2086 |
| 8.7748 | 4.4743 | 9.8157 | 7.9489 |
| 0 | 8.4748 | 5.7968 | 1.1776 |

</div>
</details>

```fortran
end program main
```
