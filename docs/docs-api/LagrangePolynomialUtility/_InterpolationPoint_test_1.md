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

ipType=Equidistance, layout=VEFC

```fortran
  xij = zeros(1,2, 0.0_DFP)
  xij(1,:) = [1.0, 10.0]
  ipType = Equidistance
  order=0
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=VEFC" // char_lf)
  !!
  !!
  order=1
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=VEFC" // char_lf)
  !!
  !!
  order=2
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=VEFC" // char_lf)
  !!
  !!
  order=3
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=VEFC" // char_lf)
  !!
  !!
  order=5
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=VEFC" // char_lf)
```

<details>
<summary>See results</summary>
<div>

ipType=Equidistance, layout=VEFC

 |  |
 |  --- |
 | 5.5 |

ipType=Equidistance, layout=VEFC

 |  |  |
 |  --- |  --- |
 | 1 | 10 |

ipType=Equidistance, layout=VEFC

 |  |  |  |
 |  --- |  --- |  --- |
 | 1 | 10 | 5.5 |

ipType=Equidistance, layout=VEFC

 |  |  |  |  |
 |  --- |  --- |  --- |  --- |
 | 1 | 10 | 4 | 7 |

ipType=Equidistance, layout=VEFC

 |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |
 | 1 | 10 | 2.8 | 4.6 | 6.4 | 8.2 |

</div>
</details>

```fortran
END PROGRAM main
```
