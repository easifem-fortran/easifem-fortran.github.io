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

ipType=GaussChebyshevLobatto, layout=INCREASING

```fortran
  xij = zeros(1,2, 0.0_DFP)
  xij(1,:) = [1.0, 10.0]
  ipType = GaussChebyshevLobatto
  order=0
  layout="INCREASING"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf // char_lf)
  !!
  !!
  order=1
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf // char_lf)
  !!
  !!
  order=5
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf // char_lf)
```

<details>
<summary>See results</summary>
<div>

result

ipType=GaussChebyshevLobatto, layout=VEFC

|     |
|-----|
| 5.5 |

ipType=GaussChebyshevLobatto, layout=VEFC

|   |    |
|---|----|
| 1 | 10 |

ipType=GaussChebyshevLobatto, layout=VEFC

|   |        |        |        |        |    |
|---|--------|--------|--------|--------|----|
| 1 | 1.8594 | 4.1094 | 6.8906 | 9.1406 | 10 |

</div>
</details>

```fortran
END PROGRAM main
```
