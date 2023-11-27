```fortran
program main
use easifemBase
implicit none
REAL( Real32 ) :: A( 4, 4 )
CALL RANDOM_NUMBER(A); A = A*10

CALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)
CALL Display(MdEncode(Tril(A, flate=.TRUE., diagNo=0)), "diagNo=0, = " // CHAR_LF // CHAR_LF )
CALL Display(MdEncode(Tril(A, flate=.TRUE., diagNo=1)), "diagNo=1, = " // CHAR_LF  // CHAR_LF)
CALL Display(MdEncode(Tril(A, flate=.TRUE., diagNo=2)), "diagNo=2, = " // CHAR_LF // CHAR_LF )

end program main
```

<details>
<summary>See results</summary>
<div>

A =

 |  |  |  |  |
 |  --- |  --- |  --- |  --- |
 | 1.4576 | 3.1887 | 4.4724 | 2.3238 |
 | 3.5987 | 4.2895 | 2.7841 | 3.4316 |
 | 2.7368 | 8.7299 | 5.3137 | 3.5759 |
 | 7.6728 | 0.5108 | 3.7975 | 1.3629 |

diagNo=0, =

 |  |  |  |  |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
 | 1.4576 | 4.2895 | 5.3137 | 1.3629 | 3.5987 | 8.7299 | 3.7975 | 2.7368 | 0.5108 | 7.6728 |

diagNo=1, =

 |  |  |  |  |  |  |  |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
 | 3.1887 | 2.7841 | 3.5759 | 1.4576 | 4.2895 | 5.3137 | 1.3629 | 3.5987 | 8.7299 | 3.7975 | 2.7368 | 0.5108 | 7.6728 |

diagNo=2, =

 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
 | 4.4724 | 3.4316 | 3.1887 | 2.7841 | 3.5759 | 1.4576 | 4.2895 | 5.3137 | 1.3629 | 3.5987 | 8.7299 | 3.7975 | 2.7368 | 0.5108 | 7.6728 |

</div>
</details>
