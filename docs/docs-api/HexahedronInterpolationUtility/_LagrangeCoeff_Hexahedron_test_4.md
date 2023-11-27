```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, p, q, r, basisType1, basisType2, basisType3
REAL(dfp), ALLOCATABLE :: xij(:, :), coeff(:, :)
TYPE(string) :: astr
REAL( DFP ) :: alpha1, beta1, lambda1
REAL( DFP ) :: alpha2, beta2, lambda2
REAL( DFP ) :: alpha3, beta3, lambda3
CHARACTER(*), parameter :: refHexahedron="BIUNIT"
INTEGER( I4B ), ALLOCATABLE :: deg(:, :)


p = 1
q = 1
r = 1
basisType1 = Monomial
basisType2 = Monomial
basisType3 = Monomial

deg = LagrangeDegree_Hexahedron(p, q, r)

xij = InterpolationPoint_Hexahedron(  &
  & p=p,  &
  & q=q,  &
  & r=r,  &
  & ipType1=Equidistance,  &
  & ipType2=Equidistance,  &
  & ipType3=Equidistance,  &
  & layout="VEFC")

coeff = LagrangeCoeff_Hexahedron(&
  & p=p, &
  & q=q, &
  & r=r, &
  & xij=xij, &
  & basisType1=basisType1, &
  & basisType2=basisType2, &
  & basisType3=basisType3, &
  & refHexahedron=refHexahedron, &
  & alpha1=alpha1, &
  & beta1=beta1, &
  & lambda1=lambda1, &
  & alpha2=alpha2, &
  & beta2=beta2, &
  & lambda2=lambda2, &
  & alpha3=alpha3, &
  & beta3=beta3, &
  & lambda3=lambda3 &
  & )


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
