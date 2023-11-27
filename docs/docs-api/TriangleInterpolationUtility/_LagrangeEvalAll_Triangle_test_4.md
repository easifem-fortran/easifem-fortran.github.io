```fortran
program main
  use easifembase
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:)
  integer(i4b) :: ii, jj, cnt, n
  real(dfp), allocatable :: ans(:, :), coeff(:,:)
  integer(i4b) :: order, basisType


  order = 4
  basisType = Monomial
  xij = InterpolationPoint_Triangle( &
    & order=order, &
    & ipType=Equidistance, &
    & xij=RefTriangleCoord("UNIT"), &
    & layout="VEFC")

  call reallocate(coeff, size(xij, 2), size(xij,2))

  ans = LagrangeEvalAll_Triangle(&
    & order=order, &
    & x=xij, &
    & xij=xij, &
    & refTriangle="UNIT", &
    & basisType=basisType, &
    & coeff=coeff)

  call display(ans, "ans = ")
end program main
```
