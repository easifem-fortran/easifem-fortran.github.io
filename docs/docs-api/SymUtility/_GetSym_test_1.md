This example shows the usage of [GetSym](GetSym.md) method.

```fortran title="header"
program main
  use easifemBase
  implicit none
```

For `Real(DFP)`

```fortran title="GetSym from U"
  block
    real(dfp), allocatable :: b(:,:)
    call Reallocate(b, 5, 5)
    call RANDOM_NUMBER(b)
    b = b * 10.0
    call Display( MdEncode(b), "b = " // CHAR_LF )
    call GetSym(mat=b, from="U")
    call Display( MdEncode(b), "b = GetSym(b, 'U') = "// CHAR_LF )
  end block
```

b =

 |         |         |        |        |        |
 |---------|---------|--------|--------|--------|
 | 3.8354  | 5.6041  | 4.9296 | 7.7754 | 6.9113 |
 | 0.98851 | 8.6482  | 6.7796 | 1.1816 | 7.6655 |
 | 6.1543  | 6.7845  | 5.3833 | 3.0619 | 7.2087 |
 | 9.1698  | 0.78692 | 7.6604 | 7.0247 | 4.3874 |
 | 1.5751  | 2.3596  | 4.9529 | 7.1787 | 1.0189 |

b = GetSym(b, 'U') =

 |        |        |        |        |        |
 |--------|--------|--------|--------|--------|
 | 3.8354 | 5.6041 | 4.9296 | 7.7754 | 6.9113 |
 | 5.6041 | 8.6482 | 6.7796 | 1.1816 | 7.6655 |
 | 4.9296 | 6.7796 | 5.3833 | 3.0619 | 7.2087 |
 | 7.7754 | 1.1816 | 3.0619 | 7.0247 | 4.3874 |
 | 6.9113 | 7.6655 | 7.2087 | 4.3874 | 1.0189 |

```fortran title="GetSym from L"
  block
    real(dfp), allocatable :: b(:,:)
    call Reallocate(b, 5, 5)
    call RANDOM_NUMBER(b)
    b = b * 10.0
    call Display( MdEncode(b), "b = " // CHAR_LF )
    call GetSym(mat=b, from="L")
    call Display( MdEncode(b), "b = GetSym(b, 'L') = "// CHAR_LF )
  end block
```

b =

 |        |        |        |        |        |
 |--------|--------|--------|--------|--------|
 | 3.5542 | 9.9755 | 1.8319 | 5.38   | 8.4256 |
 | 1.7703 | 5.7418 | 7.052  | 7.0634 | 7.6882 |
 | 2.6623 | 2.679  | 9.219  | 2.7943 | 4.6874 |
 | 8.188  | 1.6199 | 5.7354 | 6.2719 | 7.074  |
 | 3.9515 | 6.714  | 2.5161 | 1.2291 | 9.916  |

b = GetSym(b, 'L') =

 |        |        |        |        |        |
 |--------|--------|--------|--------|--------|
 | 3.5542 | 1.7703 | 2.6623 | 8.188  | 3.9515 |
 | 1.7703 | 5.7418 | 2.679  | 1.6199 | 6.714  |
 | 2.6623 | 2.679  | 9.219  | 5.7354 | 2.5161 |
 | 8.188  | 1.6199 | 5.7354 | 6.2719 | 1.2291 |
 | 3.9515 | 6.714  | 2.5161 | 1.2291 | 9.916  |

```fortran title="cleanup"
end program main
```
