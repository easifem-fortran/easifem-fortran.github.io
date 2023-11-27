```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(ElemShapeData_) :: elemsd
TYPE(QuadraturePoint_) :: quad
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: quadratureType, ipType, basisType, order

refelem = ReferenceLine(nsd=1_I4B)

order = 4_I4B
quadratureType = GaussLegendre

CALL Initiate( &
  & obj=quad, &
  & refElem=refElem, &
  & order=order, &
  & quadratureType=quadratureType)

order = 1
ipType = Equidistance
basisType = Monomial

CALL Initiate(  &
  & obj=elemsd,  &
  & quad=quad,  &
  & refelem=refelem, &
  & baseContinuity=TypeH1, &
  & baseInterpolation=TypeLagrangeInterpolation, &
  & ipType=ipType, &
  & basisType=basisType, &
  & order=order)

! CALL Display(elemsd%N, "elemsd: ")
! CALL Display(elemsd%dNdXi, "elemsd: ")

CALL Display(ElemshapeData_MdEncode(elemsd), "")

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>


|  |   |  |  | 
| --- |  --- |  --- |  --- | 
| x1 | -0.7746 | 1.59632E-16 | 0.7746 | 
| w | 0.55556 | 0.88889 | 0.55556 | 


**N**

|  | $ips_{1}$ | $ips_{2}$ | $ips_{3}$ | 
|  ---  |  ---  |  ---  |  ---  | 
| $N_{1}$ | 0.8873 | 0.5 | 0.1127 | 
| $N_{2}$ | 0.1127 | 0.5 | 0.8873 | 



**dNdXi(:, :, 1 )**

|  | $\frac{\partial N}{\partial \xi_{1}}$ |
|  ---  |  ---  |
| $\frac{\partial N^{1}}{\partial \xi}$ | -0.5 |
| $\frac{\partial N^{2}}{\partial \xi}$ | 0.5 |



**dNdXi(:, :, 2 )**

|  | $\frac{\partial N}{\partial \xi_{1}}$ |
|  ---  |  ---  |
| $\frac{\partial N^{1}}{\partial \xi}$ | -0.5 |
| $\frac{\partial N^{2}}{\partial \xi}$ | 0.5 |



**dNdXi(:, :, 3 )**

|  | $\frac{\partial N}{\partial \xi_{1}}$ |
|  ---  |  ---  |
| $\frac{\partial N^{1}}{\partial \xi}$ | -0.5 |
| $\frac{\partial N^{2}}{\partial \xi}$ | 0.5 |



**dNdXt(:, :, 1 )**

|  | $\frac{\partial N}{\partial {x}_{1}}$ |
|  ---  |  ---  |
| $\frac{\partial N^{1}}{\partial x}$ | 0 |
| $\frac{\partial N^{2}}{\partial x}$ | 0 |



**dNdXt(:, :, 2 )**

|  | $\frac{\partial N}{\partial {x}_{1}}$ |
|  ---  |  ---  |
| $\frac{\partial N^{1}}{\partial x}$ | 0 |
| $\frac{\partial N^{2}}{\partial x}$ | 0 |



**dNdXt(:, :, 3 )**

|  | $\frac{\partial N}{\partial {x}_{1}}$ |
|  ---  |  ---  |
| $\frac{\partial N^{1}}{\partial x}$ | 0 |
| $\frac{\partial N^{2}}{\partial x}$ | 0 |



**jacobian(:, :, 1 )**

|  | col-1 |
|  ---  |  ---  |
| row-1 | 0 |



**jacobian(:, :, 2 )**

|  | col-1 |
|  ---  |  ---  |
| row-1 | 0 |



**jacobian(:, :, 3 )**

|  | col-1 |
|  ---  |  ---  |
| row-1 | 0 |



**Js**

|  | $js_{1}$ |$js_{2}$ |$js_{3}$ |
|  ---  | ---  | ---  | ---  |
| js |0 |0 |0 |


**thickness**

|  | thickness${}_{1}$ |thickness${}_{2}$ |thickness${}_{3}$ |
|  ---  | ---  | ---  | ---  |
| thickness |1 |1 |1 |


**normal**

|  | $ips_{1}$ | $ips_{2}$ | $ips_{3}$ | 
|  ---  |  ---  |  ---  |  ---  | 
| $n_{1}$ | 0 | 0 | 0 | 
| $n_{2}$ | 0 | 0 | 0 | 
| $n_{3}$ | 0 | 0 | 0 | 


</div>
</details>


