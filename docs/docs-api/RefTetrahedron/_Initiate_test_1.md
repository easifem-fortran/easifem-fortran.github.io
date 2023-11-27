```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefTetrahedron_) :: obj
CALL obj%Initiate(nsd=3, baseInterpol="Lagrange", baseContinuity="H1")
CALL Display(obj%MdEncode(), "")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  |  |
|  ---  |  ---  |
| Element type | Tetrahedron4 |
| Xidimension | 3 |
| NSD | 3 |
| tPoints | 4 |
| tLines | 6 |
| tSurfaces | 4 |
| tVolumes | 1 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |


Nodal Coordinates:

|  |   |   |   |   | 
|  ---  |  ---  |  ---  |  ---  |  ---  | 
| x | 0 | 1 | 0 | 0 | 
| y | 0 | 0 | 1 | 0 | 
| z | 0 | 0 | 0 | 1 | 


PointTopology( 1 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 1 |


PointTopology( 2 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 2 |


PointTopology( 3 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 3 |


PointTopology( 4 ) : 

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 4 |


EdgeTopology( 1 ) : 

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 1 | 2 | 


EdgeTopology( 2 ) : 

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 1 | 3 | 


EdgeTopology( 3 ) : 

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 1 | 4 | 


EdgeTopology( 4 ) : 

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 2 | 3 | 


EdgeTopology( 5 ) : 

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 2 | 4 | 


EdgeTopology( 6 ) : 

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 3 | 4 | 


FaceTopology( 1 ) : 

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| Element type | Triangle3 |  |  | 
| Xidimension | 2 |  |  | 
| Nptrs | 1 | 3 | 2 | 


FaceTopology( 2 ) : 

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| Element type | Triangle3 |  |  | 
| Xidimension | 2 |  |  | 
| Nptrs | 1 | 2 | 4 | 


FaceTopology( 3 ) : 

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| Element type | Triangle3 |  |  | 
| Xidimension | 2 |  |  | 
| Nptrs | 1 | 4 | 3 | 


FaceTopology( 4 ) : 

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| Element type | Triangle3 |  |  | 
| Xidimension | 2 |  |  | 
| Nptrs | 2 | 3 | 4 | 


CellTopology( 1 ) : 

|  |   |   |   |   | 
|  ---  |  ---  |  ---  |  ---  |  ---  | 
| Element type | Tetrahedron4 |  |  |  | 
| Xidimension | 3 |  |  |  | 
| Nptrs | 1 | 2 | 3 | 4 | 

</div>
</details>
