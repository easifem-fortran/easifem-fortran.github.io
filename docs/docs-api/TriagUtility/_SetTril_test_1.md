This example shows the use of SetTril.

```fortran
program main
use easifemBase
implicit none
```

Testing for Square matrix

```fortran
REAL( Real32 ) :: A( 4, 4 ), lu(4, 4), B(4,4)
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
```

<details>
<summary>See results</summary>
<div>

A =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 4.6448 | 7.6162 | 0.43394 | 1.9014 |
| 1.6243 | 4.1942 | 9.6744 | 0.59226 |
| 7.6298 | 9.6844 | 2.2546 | 2.7899 |
| 9.71 | 1.6767 | 7.4656 | 9.0884 |

</div>
</details>

```fortran
B = 0.0
CALL GetTril(A=A, diagNo=0, lu=lu)
CALL SetTril(A=B, diagNo=0, lu=lu)
CALL Display(MdEncode(B), "diagNo=0, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=0, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 4.6448 | 0 | 0 | 0 |
| 1.6243 | 4.1942 | 0 | 0 |
| 7.6298 | 9.6844 | 2.2546 | 0 |
| 9.71 | 1.6767 | 7.4656 | 9.0884 |

</div>
</details>

```fortran
B = 0.0
CALL GetTril(A=A, diagNo=1, lu=lu)
CALL SetTril(A=B, diagNo=1, lu=lu)
CALL Display(MdEncode(B), "diagNo=1, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=1, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 4.6448 | 7.6162 | 0 | 0 |
| 1.6243 | 4.1942 | 9.6744 | 0 |
| 7.6298 | 9.6844 | 2.2546 | 2.7899 |
| 9.71 | 1.6767 | 7.4656 | 9.0884 |

</div>
</details>

```fortran
end program main
```
