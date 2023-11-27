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

ipType=GaussLegendreLobatto layout=INCREASING

```fortran
  xij = zeros(1,2, 0.0_DFP)
  xij(1,:) = [1.0, 10.0]
  order=0
  ipType = GaussLegendreLobatto
  layout="INCREASING"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto layout=INCREASING" // char_lf //char_lf)
  !
  order=1
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto layout=INCREASING" // char_lf //char_lf)
  !
  order=5
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto layout=INCREASING" // char_lf //char_lf)
```

<details>
<summary>See results</summary>
<div>

ipType=GaussLegendreLobatto layout=INCREASING

 |  |
 |  --- |
 | 5.5 |

ipType=GaussLegendreLobatto layout=INCREASING

 |  |  |
 |  --- |  --- |
 | 1 | 10 |

ipType=GaussLegendreLobatto layout=INCREASING

 |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |
 | 1 | 2.0573 | 4.2165 | 6.7835 | 8.9427 | 10 |

</div>
</details>

```fortran
END PROGRAM main
```
