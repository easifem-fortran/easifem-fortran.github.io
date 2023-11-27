```fortran
program main
  use easifembase
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:)
  integer(i4b) :: ii, jj, cnt, n
  real(dfp), allocatable :: ans(:), coeff(:,:)
  integer(i4b) :: order, basisType


  order = 1
  basisType = Monomial
  xij = InterpolationPoint_Quadrangle( &
    & order=order, &
    & ipType=Equidistance, &
    & xij=RefQuadrangleCoord("BIUNIT"), &
    & layout="VEFC")

  call reallocate(coeff, size(xij, 2), size(xij,2))

  ans = LagrangeEvalAll_Quadrangle(&
    & order=order, &
    & x=[0.0_DFP, 0.0_DFP], &
    & xij=xij, &
    & basisType=basisType, &
    & coeff=coeff)

  call display(mdencode(ans), "ans = " // char_lf // char_lf )


  order = 2
  basisType = Monomial
  xij = InterpolationPoint_Quadrangle( &
    & order=order, &
    & ipType=Equidistance, &
    & xij=RefQuadrangleCoord("BIUNIT"), &
    & layout="VEFC")

  call reallocate(coeff, size(xij, 2), size(xij,2))

  ans = LagrangeEvalAll_Quadrangle(&
    & order=order, &
    & x=[0.0_DFP, 0.0_DFP], &
    & xij=xij, &
    & basisType=basisType, &
    & coeff=coeff)

  call display(mdencode(ans), "ans = " // char_lf // char_lf )

end program main
```

<details>
<summary>See results for order 1</summary>
<div>

ans =

| $l_1$ | $l_2$  | $l_3$  | $l_4$  |
|  --- |  --- |  --- |  --- |
| 0.25 | 0.25 | 0.25 | 0.25 |

</div>
</details>

<details>
<summary>See results for order 2</summary>
<div>

ans =

| $l_1$  | $l_2$  | $l_3$  | $l_4$  |  |  |  |  | $l_9$  |
|  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

</div>
</details>
