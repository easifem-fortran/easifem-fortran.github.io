```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

REAL(dfp), ALLOCATABLE :: xij(:, :), ans(:, :)
INTEGER(I4B) :: order, quadType
TYPE(String) :: refTetrahedron

refTetrahedron = "UNIT"
order = 1
quadType = GaussLegendre

ans = QuadraturePoint_Tetrahedron(&
  & order=order, &
  & quadType=quadType, &
  & refTetrahedron=refTetrahedron%chars())

CALL Display(mdencode(ans) , "ans" // char_lf2 )

```

<details>
<summary>See results</summary>
<div>


Ans

|  | 
|  --- | 
| 0.25 | 
| 0.25 | 
| 0.25 | 
| 0.16667 | 

</div>
</details>

```fortran
refTetrahedron = "BIUNIT"
order = 1
quadType = GaussLegendre

ans = QuadraturePoint_Tetrahedron(&
  & order=order, &
  & quadType=quadType, &
  & refTetrahedron=refTetrahedron%chars())

CALL Display(mdencode(ans) , "ans" // char_lf2 )
```

Ans

|  | 
|  --- | 
| -0.5 | 
| -0.5 | 
| -0.5 | 
| 1.3333 | 

```fortran
refTetrahedron = "UNIT"
xij = 2.0_DFP + RefCoord_Tetrahedron(refTetrahedron%chars())
order = 1
quadType = GaussLegendre

ans = QuadraturePoint_Tetrahedron(&
  & order=order, &
  & quadType=quadType, &
  & refTetrahedron=refTetrahedron%chars())

CALL Display(mdencode(ans) , "ans" // char_lf2 )

END PROGRAM main

```

<details>
<summary>See results</summary>
<div>

Ans

|  | 
|  --- | 
| 0.25 | 
| 0.25 | 
| 0.25 | 
| 0.16667 | 

</div>
</details>


