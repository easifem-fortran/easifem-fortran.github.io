In this example we test `BlythPozChebyshev` type triangle nodes.

```fortran
PROGRAM main
use easifemBase
use easifemclasses
implicit none
real(dfp), allocatable :: ip(:,:), xij(:, :)
integer(i4b) :: order
integer(i4b), parameter :: elemType=Triangle
integer(i4b), parameter :: ipType=BlythPozChebyshev
CHARACTER(*), PARAMETER :: layout = "VEFC", fname="./results/test4"
real(dfp), parameter :: tol=1.0E-10
type(csvfile_) :: afile
```

Setup

```fortran
  xij = zeros(2,3, 0.0_DFP)
  xij(1,:) = [0.0_DFP, 1.0_DFP, 0.0_DFP]
  xij(2,:) = [0.0_DFP, 0.0_DFP, 1.0_DFP]
```

```fortran title "ipType=BlythPozChebyshev, layout=VEFC"
  order=4
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(TRANSPOSE(ip)), &
    & "ipType=BlythPozChebyshev, layout=VEFC" // char_lf)
  !!
  call afile%initiate( &
    & filename=fname//"_BlythPozChebyshev_m="//tostring(order)//".csv", &
    & status="NEW", &
    & action="WRITE")
  call afile%open()
  call afile%write("x, y")
  call afile%write(ip, orient="TRANSPOSE")
  call afile%deallocate()
```

<details>
<summary>See results</summary>
<div>

ipType=BlythPozChebyshev, layout=VEFC

|              |              |
|--------------|--------------|
| 0            | 0            |
| 1            | 0            |
| 0            | 1            |
| 0.14645      | -2.43879E-14 |
| 0.5          | -3.44909E-14 |
| 0.85355      | -2.43879E-14 |
| 0.85355      | 0.14645      |
| 0.5          | 0.5          |
| 0.14645      | 0.85355      |
| -2.43879E-14 | 0.85355      |
| -3.44909E-14 | 0.5          |
| -2.43879E-14 | 0.14645      |
| 0.21548      | 0.21548      |
| 0.56904      | 0.21548      |
| 0.21548      | 0.56904      |

</div>
</details>

```fortran title "ipType=BlythPozChebyshev, layout=VEFC"
  order=6
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  !!
  call afile%initiate( &
    & filename=fname//"_BlythPozChebyshev_m="//tostring(order)//".csv", &
    & status="NEW", &
    & action="WRITE")
  call afile%open()
  call afile%write("x, y")
  call afile%write(ip, orient="TRANSPOSE")
  call afile%deallocate()
```

```fortran title "ipType=BlythPozChebyshev, layout=VEFC"
  order=9
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  !!
  call afile%initiate( &
    & filename=fname//"_BlythPozChebyshev_m="//tostring(order)//".csv", &
    & status="NEW", &
    & action="WRITE")
  call afile%open()
  call afile%write("x, y")
  call afile%write(ip, orient="TRANSPOSE")
  call afile%deallocate()
```

```fortran
END PROGRAM main
```
