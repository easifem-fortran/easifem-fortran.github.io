This example shows the use of GetTril.

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
| 0.86636 | 3.7301 | 4.4509 | 7.4084 |
| 5.9178 | 6.2964 | 1.2734 | 6.8327 |
| 9.3275 | 1.5065 | 4.9179 | 7.6162 |
| 4.4428 | 5.1334 | 8.7562 | 0.1652 |

</div>
</details>

```fortran
CALL GetTril(A=A, diagNo=0, lu=lu)
CALL Display(MdEncode(lu), "diagNo=0, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=0, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 0.86636 | 0 | 0 | 0 |
| 5.9178 | 6.2964 | 0 | 0 |
| 9.3275 | 1.5065 | 4.9179 | 0 |
| 4.4428 | 5.1334 | 8.7562 | 0.1652 |

</div>
</details>

```fortran
CALL GetTril(A=A, diagNo=1, lu=lu)
CALL Display(MdEncode(lu), "diagNo=1, = " // CHAR_LF  // CHAR_LF)
```

<details>
<summary>See results</summary>
<div>

diagNo=1, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 0.86636 | 3.7301 | 0 | 0 |
| 5.9178 | 6.2964 | 1.2734 | 0 |
| 9.3275 | 1.5065 | 4.9179 | 7.6162 |
| 4.4428 | 5.1334 | 8.7562 | 0.1652 |

</div>
</details>

```fortran
CALL GetTril(A=A, diagNo=2, lu=lu)
CALL Display(MdEncode(lu), "diagNo=2, = " // CHAR_LF // CHAR_LF )
```

<details>
<summary>See results</summary>
<div>

diagNo=2, =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 0.86636 | 3.7301 | 4.4509 | 0 |
| 5.9178 | 6.2964 | 1.2734 | 6.8327 |
| 9.3275 | 1.5065 | 4.9179 | 7.6162 |
| 4.4428 | 5.1334 | 8.7562 | 0.1652 |

</div>
</details>

```fortran
end program main
```
