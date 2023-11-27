```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefLine_) :: obj
TYPE(AbstractRefElementPointer_), ALLOCATABLE :: faceElem(:)
INTEGER(I4B) :: ii
TYPE(String) :: astr

REAL(DFP) :: avar, xij(1, 2)
CALL obj%Initiate(nsd=1, baseInterpol="Lagrange", baseContinuity="H1")
CALL obj%GetFacetElements(faceElem)

DO ii = 1, SIZE(faceElem)
  astr = "**Facet Element "//tostring(ii)//"**"//char_lf//char_lf//  &
  & faceElem(ii)%ptr%MdEncode()
  CALL display(astr, "")
END DO
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

**Facet Element 1**

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| NSD | 1 |
| tPoints | 1 |
| tLines | 0 |
| tSurfaces | 0 |
| tVolumes | 0 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |


Nodal Coordinates:

|  |  |
|  ---  |  ---  |
| x | -1 |


PointTopology( 1 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 1 |


**Facet Element 2**

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| NSD | 1 |
| tPoints | 1 |
| tLines | 0 |
| tSurfaces | 0 |
| tVolumes | 0 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |


Nodal Coordinates:

|  |  |
|  ---  |  ---  |
| x | 1 |


PointTopology( 1 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 1 |

</div>
</details>
