```fortran
PROGRAM main
use easifemBase
implicit none
real(dfp), allocatable :: ip(:,:), xij(:, :)
integer(i4b) :: order, ipType
integer(i4b), parameter :: elemType=Line
CHARACTER(len=20) :: layout
real(dfp), parameter :: tol=1.0E-10
```

ipType=Equidistance, layout=INCREASING

```fortran
  xij = zeros(1,2, 0.0_DFP)
  xij(1,:) = [1.0, 10.0]
  order=0
  ipType = Equidistance
  layout="INCREASING"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf // char_lf)

  order=1
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf // char_lf)

  order=2
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf // char_lf)

  order=3
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf // char_lf)
```

<details>
<summary>See results</summary>
<div>

ipType=Equidistance, layout=INCREASING

 |  |
 |  --- |
 | 5.5 |

ipType=Equidistance, layout=INCREASING

 |  |  |
 |  --- |  --- |
 | 1 | 10 |

ipType=Equidistance, layout=INCREASING

 |  |  |  |
 |  --- |  --- |  --- |
 | 1 | 5.5 | 10 |

ipType=Equidistance, layout=INCREASING

 |  |  |  |  |
 |  --- |  --- |  --- |  --- |
 | 1 | 4 | 7 | 10 |

</div>
</details>

```fortran
END PROGRAM main
```
