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

ipType=GaussLegendreLobatto, layout=VEFC

```fortran
  xij = zeros(1,2, 0.0_DFP)
  xij(1,:) = [1.0, 10.0]
  ipType = GaussLegendreLobatto
  order=0
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto, layout=VEFC" // char_lf // char_lf)
  !!
  !!
  order=1
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto, layout=VEFC" // char_lf //char_lf)
  !!
  !!
  order=5
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto, layout=VEFC" // char_lf // char_lf)
```

<details>
<summary>See results</summary>
<div>

ipType=GaussLegendreLobatto, layout=VEFC

 |  |
 |  --- |
 | 5.5 |

ipType=GaussLegendreLobatto, layout=VEFC

 |  |  |
 |  --- |  --- |
 | 1 | 10 |

ipType=GaussLegendreLobatto, layout=VEFC

 |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |
 | 1 | 10 | 2.0573 | 4.2165 | 6.7835 | 8.9427 |

</div>
</details>

```fortran
END PROGRAM main
```
