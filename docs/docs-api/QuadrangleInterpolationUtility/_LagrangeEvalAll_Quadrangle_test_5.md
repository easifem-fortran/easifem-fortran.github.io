```fortran
program main
  use easifembase
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:)
  integer(i4b) :: ii, jj, cnt, n
  real(dfp), allocatable :: ans(:, :), coeff(:,:)
  integer(i4b) :: order, basisType
  real(dfp) :: alpha, beta

  order = 2
  basisType = Legendre
  xij = InterpolationPoint_Quadrangle( &
    & order=order, &
    & ipType=Equidistance, &
    & xij=RefQuadrangleCoord("BIUNIT"), &
    & layout="VEFC")

  call reallocate(coeff, size(xij, 2), size(xij,2))

  ans = LagrangeEvalAll_Quadrangle(&
    & order=order, &
    & x=xij, &
    & xij=xij, &
    & basisType=basisType, &
    & coeff=coeff)

  call display(mdencode(ans), "ans = " // char_lf // char_lf )

end program main
```

<details>
<summary>See results for order 2</summary>
<div>

ans =

 |  |  |  |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

</div>
</details>
