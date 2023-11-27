In this example we test `IsaacLegendre` type triangle nodes.

```fortran
PROGRAM main
use easifemBase
use easifemclasses
implicit none
real(dfp), allocatable :: ip(:,:), xij(:, :)
integer(i4b) :: order
integer(i4b), parameter :: elemType=Triangle
integer(i4b), parameter :: ipType=IsaacLegendre
CHARACTER(*), PARAMETER :: layout = "VEFC", fname="./results/test5"
real(dfp), parameter :: tol=1.0E-10
type(csvfile_) :: afile
```

Setup

```fortran
  xij = zeros(2,3, 0.0_DFP)
  xij(1,:) = [0.0_DFP, 1.0_DFP, 0.0_DFP]
  xij(2,:) = [0.0_DFP, 0.0_DFP, 1.0_DFP]
```

```fortran title "ipType=IsaacLegendre, layout=VEFC"
  order=4
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  call display(MdEncode(TRANSPOSE(ip)), &
    & "ipType=IsaacLegendre, layout=VEFC" // char_lf)
  !!
  call afile%initiate( &
    & filename=fname//"_IsaacLegendre_m="//tostring(order)//".csv", &
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

ipType=IsaacLegendre, layout=VEFC

|              |              |
|--------------|--------------|
| -8.32667E-17 | -8.32667E-17 |
| 1            | -8.32667E-17 |
| -8.32667E-17 | 1            |
| 0.17267      | -4.59259E-17 |
| 0.5          | 5.55112E-17  |
| 0.82733      | -4.59259E-17 |
| 0.82733      | 0.17267      |
| 0.5          | 0.5          |
| 0.17267      | 0.82733      |
| -4.59259E-17 | 0.82733      |
| 5.55112E-17  | 0.5          |
| -4.59259E-17 | 0.17267      |
| 0.22216      | 0.22216      |
| 0.55569      | 0.22216      |
| 0.22216      | 0.55569      |

</div>
</details>

```fortran title "ipType=IsaacLegendre, layout=VEFC"
  !!
  order=6
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  !!
  call afile%initiate( &
    & filename=fname//"_IsaacLegendre_m="//tostring(order)//".csv", &
    & status="NEW", &
    & action="WRITE")
  !!
  call afile%open()
  call afile%write("x, y")
  call afile%write(ip, orient="TRANSPOSE")
  call afile%deallocate()
```

```fortran title "ipType=IsaacLegendre, layout=VEFC"
  !!
  order=9
  ip = InterpolationPoint(order=order, ipType=ipType, elemType=elemType, &
    & xij=xij, layout=layout)
  !!
  call afile%initiate( &
    & filename=fname//"_IsaacLegendre_m="//tostring(order)//".csv", &
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
