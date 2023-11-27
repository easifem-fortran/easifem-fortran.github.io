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

result

ip=

|     |
|-----|
| 5.5 |

ip=

|   |    |
|---|----|
| 1 | 10 |

ip=

|   |    |     |
|---|----|-----|
| 1 | 10 | 5.5 |

ip=

|   |    |   |   |
|---|----|---|---|
| 1 | 10 | 4 | 7 |

ip=

|   |    |     |     |     |     |
|---|----|-----|-----|-----|-----|
| 1 | 10 | 2.8 | 4.6 | 6.4 | 8.2 |

ipType=Equidistance, layout=INCREASING

```fortran
  order=0
  layout="INCREASING"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf)

  order=1
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf)

  order=2
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf)

  order=3
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=Equidistance, layout=INCREASING" // char_lf)
```

result

ip=

|     |
|-----|
| 5.5 |

ip=

|   |    |
|---|----|
| 1 | 10 |

ip=

|   |     |    |
|---|-----|----|
| 1 | 5.5 | 10 |

ip=

|   |   |   |    |
|---|---|---|----|
| 1 | 4 | 7 | 10 |

ipType=GaussLegendreLobatto, layout=VEFC

```fortran
  ipType = GaussLegendreLobatto
  order=0
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto, layout=VEFC" // char_lf)
  !!
  !!
  order=1
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto, layout=VEFC" // char_lf)
  !!
  !!
  order=5
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto, layout=VEFC" // char_lf)
```

result

ip=

|     |
|-----|
| 5.5 |

ip=

|   |    |
|---|----|
| 1 | 10 |

ip=

|   |    |        |        |        |        |
|---|----|--------|--------|--------|--------|
| 1 | 10 | 2.0573 | 4.2165 | 6.7835 | 8.9427 |

ipType=GaussLegendreLobatto layout=INCREASING

```fortran
  order=0
  layout="INCREASING"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto layout=INCREASING" // char_lf)
  !
  order=1
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto layout=INCREASING" // char_lf)
  !
  order=5
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussLegendreLobatto layout=INCREASING" // char_lf)
```

result

ip=

|     |
|-----|
| 5.5 |

ip=

|   |    |
|---|----|
| 1 | 10 |

ip=

|   |        |        |        |        |    |
|---|--------|--------|--------|--------|----|
| 1 | 2.0573 | 4.2165 | 6.7835 | 8.9427 | 10 |

ipType=GaussChebyshevLobatto, layout=VEFC

```fortran
  ipType = GaussChebyshevLobatto
  order=0
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf)
  !
  !
  order=1
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf)
  !
  !
  order=5
  layout="VEFC"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf)
```

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

    |   |    |        |        |        |        |
    |---|----|--------|--------|--------|--------|
    | 1 | 10 | 1.8594 | 4.1094 | 6.8906 | 9.1406 |

!!! note "ipType=GaussChebyshevLobatto, layout=INCREASING"

```fortran
  order=0
  layout="INCREASING"
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf)
  !!
  !!
  order=1
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf)
  !!
  !!
  order=5
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(ip), &
    & "ipType=GaussChebyshevLobatto, layout=VEFC" // char_lf)
```

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

```fortran
END PROGRAM main
```
