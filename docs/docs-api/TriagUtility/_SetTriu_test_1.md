This example shows the use of SetTriu.

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
| 2.859 | 5.5172 | 1.6403 | 5.7708 |
| 8.8695 | 6.974 | 5.6426 | 0.80722 |
| 6.8828 | 4.0238 | 9.9846 | 9.9341 |
| 2.7916 | 1.4534 | 5.1318 | 2.3856 |

</div>
</details>

```fortran
B = 0.0
CALL GetTriu(A=A, diagNo=0, lu=lu)
CALL SetTriu(A=B, diagNo=0, lu=lu)
CALL Display(MdEncode(B), "diagNo=0, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=0, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 2.859 | 5.5172 | 1.6403 | 5.7708 |
| 0 | 6.974 | 5.6426 | 0.80722 |
| 0 | 0 | 9.9846 | 9.9341 |
| 0 | 0 | 0 | 2.3856 |

</div>
</details>

```fortran
B = 0.0
CALL GetTriu(A=A, diagNo=1, lu=lu)
CALL SetTriu(A=B, diagNo=1, lu=lu)
CALL Display(MdEncode(B), "diagNo=1, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=1, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 0 | 5.5172 | 1.6403 | 5.7708 |
| 0 | 0 | 5.6426 | 0.80722 |
| 0 | 0 | 0 | 9.9341 |
| 0 | 0 | 0 | 0 |

</div>
</details>

```fortran
end program main
```
