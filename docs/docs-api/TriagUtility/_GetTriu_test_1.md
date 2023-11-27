This example shows the use of GetTriu.

```fortran
program main
use easifemBase
implicit none
```

Testing for Square matrix

```fortran
REAL( Real32 ) :: A( 4, 4 ), lu(4, 4)
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
```

<details>
<summary>See results</summary>
<div>

A =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 7.9596 | 0.4582 | 9.668 | 3.2888 |
| 9.8813 | 8.812 | 8.1055 | 0.42248 |
| 2.7221 | 5.3213 | 8.3696 | 0.61326 |
| 5.3658 | 7.8775 | 4.4198 | 1.9634 |

</div>
</details>

```fortran
CALL GetTriu(A=A, diagNo=0, lu=lu)
CALL Display(MdEncode(lu), "diagNo=0, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=0, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 7.9596 | 0.4582 | 9.668 | 3.2888 |
| 0 | 8.812 | 8.1055 | 0.42248 |
| 0 | 0 | 8.3696 | 0.61326 |
| 0 | 0 | 0 | 1.9634 |

</div>
</details>

```fortran
CALL GetTriu(A=A, diagNo=1, lu=lu)
CALL Display(MdEncode(lu), "diagNo=1, = " // CHAR_LF  // CHAR_LF)
```

<details>
<summary>See results</summary>
<div>

diagNo=1, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 0 | 0.4582 | 9.668 | 3.2888 |
| 0 | 0 | 8.1055 | 0.42248 |
| 0 | 0 | 0 | 0.61326 |
| 0 | 0 | 0 | 0 |

</div>
</details>

```fortran
CALL GetTriu(A=A, diagNo=2, lu=lu)
CALL Display(MdEncode(lu), "diagNo=2, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=2, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 0 | 0 | 9.668 | 3.2888 |
| 0 | 0 | 0 | 0.42248 |
| 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 |

</div>
</details>

```fortran
end program main
```
