```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefTriangle_) :: obj
REAL(DFP) :: avar, xij(1, 2)
CALL obj%Initiate(nsd=1, baseInterpol="Lagrange", baseContinuity="H1")
CALL Display(obj%ReactEncode(), '')
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


|  |  |
|  ---  |  ---  |
| Element type | Triangle3 |
| Xidimension | 2 |
| NSD | 1 |
| tPoints | 3 |
| tLines | 3 |
| tSurfaces | 1 |
| tVolumes | 0 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |


Nodal Coordinates:

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| x | 0 | 1 | 0 | 
| y | 0 | 0 | 1 | 

<Tabs>

<TabItem value="1" label="PointTopology( 1 ) :" >

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 1 |


</TabItem>

<TabItem value="2" label="PointTopology( 2 ) :" >

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 2 |


</TabItem>

<TabItem value="3" label="PointTopology( 3 ) :" >

|  |  |
|  ---  |  ---  |
| Element type | Point1 |
| Xidimension | 0 |
| Nptrs | 3 |


</TabItem>

</Tabs>
<Tabs>

<TabItem value="1" label="EdgeTopology( 1 ) :" >

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 1 | 2 | 


</TabItem>

<TabItem value="2" label="EdgeTopology( 2 ) :" >

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 2 | 3 | 


</TabItem>

<TabItem value="3" label="EdgeTopology( 3 ) :" >

|  |   |   | 
|  ---  |  ---  |  ---  | 
| Element type | Line2 |  | 
| Xidimension | 1 |  | 
| Nptrs | 3 | 1 | 


</TabItem>

</Tabs>
<Tabs>

<TabItem value="1" label="FaceTopology( 1 ) :" >

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| Element type | Triangle3 |  |  | 
| Xidimension | 2 |  |  | 
| Nptrs | 1 | 2 | 3 | 


</TabItem>

</Tabs>



</div>
</details>

