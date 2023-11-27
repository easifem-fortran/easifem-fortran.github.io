Facet elements of reference quadrangle for Hierarchy basis functions.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefQuadrangle_) :: obj
TYPE(AbstractRefElementPointer_), ALLOCATABLE :: refelem(:)
INTEGER(I4B) :: ii

CALL obj%Initiate(nsd=2, baseInterpol="Hierarchy", baseContinuity="H1")
CALL obj%GetFacetElements(refelem)
DO ii = 1, SIZE(refelem)
  CALL refelem(ii)%ptr%Display("FacetElement("//tostring(ii)//"): ")
END DO

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>


```bash title="results"
FacetElement(1): 
element type : Line2
xidimension :: 1
nsd : 2
entityCounts(0) : 2
entityCounts(1) : 1
entityCounts(2) : 0
entityCounts(3) : 0
Node( 1 ) : 
------------
  -1.00000  
  -1.00000  
Node( 2 ) : 
------------
   1.00000  
  -1.00000  
pointTopology( 1 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   1    
pointTopology( 2 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   2    
edgeTopology( 1 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  1  2  
baseContinuity: H1
baseInterpol: HierarchyInterpolation

FacetElement(2): 
element type : Line2
xidimension :: 1
nsd : 2
entityCounts(0) : 2
entityCounts(1) : 1
entityCounts(2) : 0
entityCounts(3) : 0
Node( 1 ) : 
------------
  -1.00000  
   1.00000  
Node( 2 ) : 
------------
  1.00000   
  1.00000   
pointTopology( 1 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   1    
pointTopology( 2 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   2    
edgeTopology( 1 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  1  2  
baseContinuity: H1
baseInterpol: HierarchyInterpolation

FacetElement(3): 
element type : Line2
xidimension :: 1
nsd : 2
entityCounts(0) : 2
entityCounts(1) : 1
entityCounts(2) : 0
entityCounts(3) : 0
Node( 1 ) : 
------------
  -1.00000  
  -1.00000  
Node( 2 ) : 
------------
  -1.00000  
   1.00000  
pointTopology( 1 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   1    
pointTopology( 2 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   2    
edgeTopology( 1 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  1  2  
baseContinuity: H1
baseInterpol: HierarchyInterpolation

FacetElement(4): 
element type : Line2
xidimension :: 1
nsd : 2
entityCounts(0) : 2
entityCounts(1) : 1
entityCounts(2) : 0
entityCounts(3) : 0
Node( 1 ) : 
------------
   1.00000  
  -1.00000  
Node( 2 ) : 
------------
  1.00000   
  1.00000   
pointTopology( 1 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   1    
pointTopology( 2 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   2    
edgeTopology( 1 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  1  2  
baseContinuity: H1
baseInterpol: HierarchyInterpolation
```

</div>
</details>
