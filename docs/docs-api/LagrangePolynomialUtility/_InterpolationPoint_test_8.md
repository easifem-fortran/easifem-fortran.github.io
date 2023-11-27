This example shows the use of InterpolationPoint routine.

- In this example we test `BlythPozLegendre` type triangle nodes.

```fortran
PROGRAM main
use easifemBase
use easifemclasses
implicit none
real(dfp), allocatable :: ip(:,:), xij(:, :)
integer(i4b) :: order, ipType
integer(i4b), parameter :: elemType=Triangle
CHARACTER(*), PARAMETER :: layout = "VEFC", fname="./results/test3"
real(dfp), parameter :: tol=1.0E-10
type(csvfile_) :: afile
```

Setup

```fortran
  xij = zeros(2,3, 0.0_DFP)
  xij(1,:) = [0.0_DFP, 1.0_DFP, 0.0_DFP]
  xij(2,:) = [0.0_DFP, 0.0_DFP, 1.0_DFP]
```

ipType=Equidistance

```todo
  ipType = Equidistance
  !!
  order=5
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(TRANSPOSE(ip)), &
    & "ipType=Equidistance, layout=VEFC" // char_lf)
```

<details>
<summary>See results</summary>
<div>

ipType=Equidistance, layout=VEFC

|     |     |
|-----|-----|
| 0   | 0   |
| 1   | 0   |
| 0   | 1   |
| 0.2 | 0   |
| 0.4 | 0   |
| 0.6 | 0   |
| 0.8 | 0   |
| 0.8 | 0.2 |
| 0.6 | 0.4 |
| 0.4 | 0.6 |
| 0.2 | 0.8 |
| 0   | 0.8 |
| 0   | 0.6 |
| 0   | 0.4 |
| 0   | 0.2 |
| 0.2 | 0.2 |
| 0.6 | 0.2 |
| 0.2 | 0.6 |
| 0.4 | 0.2 |
| 0.4 | 0.4 |
| 0.2 | 0.4 |

</div>
</details>

ipType=BlythPozLegendre, layout=VEFC

```fortran
  ipType = BlythPozLegendre
  !!
  order=4
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(TRANSPOSE(ip)), &
    & "ipType=Equidistance, layout=VEFC" // char_lf)
  !!
  call afile%initiate( &
    & filename=fname//"_BlythPozLegendre_m="//tostring(order)//".csv", &
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

|              |              |
|--------------|--------------|
| -3.70074E-17 | -3.70074E-17 |
| 1            | -3.70074E-17 |
| -3.70074E-17 | 1            |
| 0.17267      | -7.40149E-17 |
| 0.5          | -7.40149E-17 |
| 0.82733      | -9.25186E-17 |
| 0.82733      | 0.17267      |
| 0.5          | 0.5          |
| 0.17267      | 0.82733      |
| -9.25186E-17 | 0.82733      |
| -7.40149E-17 | 0.5          |
| -7.40149E-17 | 0.17267      |
| 0.22422      | 0.22422      |
| 0.55155      | 0.22422      |
| 0.22422      | 0.55155      |

</div>
</details>

ipType=BlythPozLegendre, layout=VEFC

```fortran
  ipType = BlythPozLegendre
  !!
  order=6
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  !!
  call afile%initiate( &
    & filename=fname//"_BlythPozLegendre_m="//tostring(order)//".csv", &
    & status="NEW", &
    & action="WRITE")
  call afile%open()
  call afile%write("x, y")
  call afile%write(ip, orient="TRANSPOSE")
  call afile%deallocate()
```

ipType=BlythPozLegendre, layout=VEFC

```fortran
  ipType = BlythPozLegendre
  !!
  order=9
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  !!
  call afile%initiate( &
    & filename=fname//"_BlythPozLegendre_m="//tostring(order)//".csv", &
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
