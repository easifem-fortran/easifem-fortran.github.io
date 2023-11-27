```fortran
program main
use easifemBase
implicit none
REAL( Real32 ) :: A( 4, 4 )
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
CALL Display(MdEncode(Triu(A, flate=.TRUE., diagNo=0)), "diagNo=0, = " // CHAR_LF // CHAR_LF )
CALL Display(MdEncode(Triu(A, flate=.TRUE., diagNo=1)), "diagNo=1, = " // CHAR_LF  // CHAR_LF)
CALL Display(MdEncode(Triu(A, flate=.TRUE., diagNo=2)), "diagNo=2, = " // CHAR_LF // CHAR_LF )

end program main
```

<details>
<summary>See results</summary>
<div>

A =

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| 0.99172 | 0.2666 | 4.3266 | 5.4603 |
| 2.5813 | 0.14775 | 1.7741 | 5.3106 |
| 1.9852 | 5.8142 | 4.8581 | 9.2279 |
| 1.4559 | 7.9147 | 7.84 | 9.2751 |

diagNo=0, =

|  |  |  |  |  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| 0.99172 | 0.14775 | 4.8581 | 9.2751 | 0.2666 | 1.7741 | 9.2279 | 4.3266 | 5.3106 | 5.4603 |

diagNo=1, =

|  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |
| 0.2666 | 1.7741 | 9.2279 | 4.3266 | 5.3106 | 5.4603 |

diagNo=2, =

|  |  |  |
|  --- |  --- |  --- |
| 4.3266 | 5.3106 | 5.4603 |

</div>
</details>
