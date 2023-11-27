---
sidebar_position: 2
---

# Line

## Gauss-Legendre on biunit line

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order

refelem = ReferenceLine(nsd=1_I4B)
order = 4_I4B

CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)

CALL display(obj, "ans: ")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```bash title="results"

           # points :          
-------------------------------
-0.774597   0.000000   0.774597
 0.555556   0.888889   0.555556
# txi :1
```

</div>
</details>

## Gauss Legendre on unit line

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line("UNIT"))
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(obj, "ans: ")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```bash title="results"

         # points :         
----------------------------
0.112702  0.500000  0.887298
0.555556  0.888889  0.555556
# txi :1
```

</div>
</details>

## Gauss Legendre-Lobatto points on Biunit line

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceLine(nsd=1_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendreLobatto)
CALL display(obj, "ans: ")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```bash title="results"

              # points :              
--------------------------------------
-1.00000  -0.44721   0.44721   1.00000
 0.16667   0.83333   0.83333   0.16667
# txi :1

```

</div>
</details>

## Gauss-Legendre Radau-Left points on Biunit line

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceLine(nsd=1_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType="GaussLegendreLobatto")
CALL display(obj, "ans: ")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```bash title="results"

              # points :              
--------------------------------------
-1.00000  -0.57532   0.18107   0.82282
 0.12500   0.65769   0.77639   0.44092
```

</div>
</details>

## Gauss-Legendre Radau-Right points on Biunit line

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceLine(nsd=1_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendreRadauRight)
CALL display(obj, "ans: ")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
              # points :              
--------------------------------------
-0.82282  -0.18107   0.57532   1.00000
 0.44092   0.77639   0.65769   0.12500
# txi :1
```

</div>
</details>
