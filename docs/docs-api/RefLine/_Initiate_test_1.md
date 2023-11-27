``` fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefLine_) :: obj
REAL(DFP) :: avar, xij(1, 2)
CALL obj%Initiate(nsd=1, baseInterpol="Lagrange", baseContinuity="H1")
CALL display(obj%MdEncode(), 'Line2 : '//char_lf//char_lf)
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

`Line2` : 

|  |  |
|  :---  |  ---:  |
| Element type | Line2 |
| Xidimension | 1 |
| NSD | 1 |
| tPoints | 2 |
| tLines | 1 |
| tSurfaces | 0 |
| tVolumes | 0 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |

Nodal Coordinates:

|  |   |  |
|  ---  | ---  | ---  |
| x |-1 |1 |

`PointTopology`( 1 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 1 |


`PointTopology`( 2 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 2 |



`EdgeTopology`( 1 ) : 

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 1 | 2 | 



</div>
</details>

