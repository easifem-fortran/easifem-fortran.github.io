```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, order, basisType
REAL(dfp), ALLOCATABLE :: xij(:, :), coeff(:, :)
TYPE(string) :: astr
REAL( DFP ) :: alpha, beta, lambda
CHARACTER(*), parameter :: refHexahedron="BIUNIT"
INTEGER( I4B ), ALLOCATABLE :: deg(:, :)


order = 2
basisType = Monomial

deg = LagrangeDegree_Hexahedron(order)

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


CALL Display(Mdencode(deg), "monomial degrees: " )
CALL Display(Mdencode(coeff), "coeff : " )

END PROGRAM main
```


<details>
<summary>See results</summary>
<div>


degrees: 

| a   | b   | c   |
| --- | --- | --- |
| 0   | 0   | 0   |
| 1   | 0   | 0   | 
| 0   | 1   | 0   |
| 1   | 1   | 0   |
| 0   | 0   | 1   |
| 1   | 0   | 1   |
| 0   | 1   | 1   |
| 1   | 1   | 1   |

$$
1, x, y, xy, z, xz, yz, xyz 
$$


coeff 

| basis | $l_1$  | $l_2$  | $l_3$  | $l_4$  | $l_5$  | $l_6$  | $l_7$ | $l_8$  |
| ----- | ------ | ------ | ------ | ------ | ------ | ------ | ----- | ------ |
| 1     | 0.125  | 0.125  | 0.125  | 0.125  | 0.125  | 0.125  | 0.125 | 0.125  |
| x     | -0.125 | 0.125  | 0.125  | -0.125 | -0.125 | 0.125  | 0.125 | -0.125 |
| y     | -0.125 | -0.125 | 0.125  | 0.125  | -0.125 | -0.125 | 0.125 | 0.125  |
| xy    | 0.125  | -0.125 | 0.125  | -0.125 | 0.125  | -0.125 | 0.125 | -0.125 |
| z     | -0.125 | -0.125 | -0.125 | -0.125 | 0.125  | 0.125  | 0.125 | 0.125  |
| xz    | 0.125  | -0.125 | -0.125 | 0.125  | -0.125 | 0.125  | 0.125 | -0.125 |
| yz    | 0.125  | 0.125  | -0.125 | -0.125 | -0.125 | -0.125 | 0.125 | 0.125  |
| xyz   | -0.125 | 0.125  | -0.125 | 0.125  | 0.125  | -0.125 | 0.125 | -0.125 |


</div>
</details>
