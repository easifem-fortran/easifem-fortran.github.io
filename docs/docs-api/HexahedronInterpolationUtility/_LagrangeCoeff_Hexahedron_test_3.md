```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, order, basisType
REAL(dfp), ALLOCATABLE :: xij(:, :), coeff(:, :)
TYPE(string) :: astr
REAL( DFP ) :: alpha, beta, lambda
CHARACTER(*), parameter :: refHexahedron="BIUNIT"


order = 2
basisType = Legendre

xij = InterpolationPoint_Hexahedron(  &
  & order=order,  &
  & ipType=Equidistance,  &
  & layout="VEFC")

coeff = LagrangeCoeff_Hexahedron(&
  & order=order, &
  & xij=xij, &
  & basisType=basisType, &
  & refHexahedron=refHexahedron, &
  & alpha=alpha, &
  & beta=beta, &
  & lambda=lambda)

END PROGRAM main
```


