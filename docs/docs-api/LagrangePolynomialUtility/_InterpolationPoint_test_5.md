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

ipType=GaussChebyshevLobatto, layout=VEFC

```fortran
  xij = zeros(1,2, 0.0_DFP)
  xij(1,:) = [1.0, 10.0]
  ipType = GaussChebyshevLobatto
  order=0
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf // char_lf)
  !
  !
  order=1
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf // char_lf)
  !
  !
  order=5
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf // char_lf)
```

<details>
<summary>See results</summary>
<div>

ipType=GaussChebyshevLobatto, layout=VEFC

 |  |
 |  --- |
 | 0 |

ipType=GaussChebyshevLobatto, layout=VEFC

 |  |  |
 |  --- |  --- |
 | -1 | 1 |

ipType=GaussChebyshevLobatto, layout=VEFC

 |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |
 | -1 | 1 | -0.80902 | -0.30902 | 0.30902 | 0.80902 |

</div>
</details>

```fortran
END PROGRAM main
```
