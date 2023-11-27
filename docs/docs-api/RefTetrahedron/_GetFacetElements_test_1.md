```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefTetrahedron_) :: obj
TYPE(AbstractRefElementPointer_), ALLOCATABLE :: facelem(:)
INTEGER(I4B) :: ii
TYPE(String) :: astr

CALL obj%Initiate(nsd=3, baseInterpol="Lagrange", baseContinuity="H1")

CALL obj%GetFacetElements(facelem)

astr = React_StartTabs()//CHAR_LF
DO ii = 1, SIZE(facelem)
  astr = astr//React_StartTabItem(VALUE=tostring(ii), &
    & label="Facet element ("//tostring(ii)//")")//char_lf//  &
    & facelem(ii)%ptr%ReactEncode()//char_lf//React_EndTabItem()
END DO
astr = astr//React_EndTabs()//CHAR_LF

CALL display(astr, "")

END PROGRAM main
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<details>
<summary>See results</summary>
<div>


<Tabs>

<TabItem value="1" label="Facet element (1)" >

|  |  |
|  ---  |  ---  |
| Element type | Triangle3 |
| Xidimension | 2 |
| NSD | 3 |
| tPoints | 3 |
| tLines | 3 |
| tSurfaces | 1 |
| tVolumes | 0 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |


Nodal Coordinates:

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| x | 0 | 0 | 1 | 
| y | 0 | 1 | 0 | 
| z | 0 | 0 | 0 | 

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

</TabItem>
<TabItem value="2" label="Facet element (2)" >

|  |  |
|  ---  |  ---  |
| Element type | Triangle3 |
| Xidimension | 2 |
| NSD | 3 |
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
| y | 0 | 0 | 0 | 
| z | 0 | 0 | 1 | 

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

</TabItem>
<TabItem value="3" label="Facet element (3)" >

|  |  |
|  ---  |  ---  |
| Element type | Triangle3 |
| Xidimension | 2 |
| NSD | 3 |
| tPoints | 3 |
| tLines | 3 |
| tSurfaces | 1 |
| tVolumes | 0 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |


Nodal Coordinates:

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| x | 0 | 0 | 0 | 
| y | 0 | 0 | 1 | 
| z | 0 | 1 | 0 | 

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

</TabItem>
<TabItem value="4" label="Facet element (4)" >

|  |  |
|  ---  |  ---  |
| Element type | Triangle3 |
| Xidimension | 2 |
| NSD | 3 |
| tPoints | 3 |
| tLines | 3 |
| tSurfaces | 1 |
| tVolumes | 0 |
| BaseContinuity | H1 |
| BaseInterpolation | LagrangeInterpolation |


Nodal Coordinates:

|  |   |   |   | 
|  ---  |  ---  |  ---  |  ---  | 
| x | 1 | 0 | 0 | 
| y | 0 | 1 | 0 | 
| z | 0 | 0 | 1 | 

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

</TabItem>
</Tabs>

</div>
</details>
