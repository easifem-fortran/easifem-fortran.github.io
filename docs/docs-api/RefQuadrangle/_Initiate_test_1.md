```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefQuadrangle_) :: obj
CALL obj%Initiate(nsd=2, baseInterpol="Lagrange", baseContinuity="H1")
CALL obj%display('RefQuadrangle : ')
END PROGRAM main
```


<details>
<summary>See results</summary>
<div>

```bash
RefQuadrangle : 
element type : Quadrangle4
xidimension :: 2
nsd : 2
entityCounts(0) : 4
entityCounts(1) : 4
entityCounts(2) : 1
entityCounts(3) : 0
Node( 1 ) : 
------------
  -1.00000  
  -1.00000  
Node( 2 ) : 
------------
   1.00000  
  -1.00000  
Node( 3 ) : 
------------
  1.00000   
  1.00000   
Node( 4 ) : 
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
pointTopology( 3 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   3    
pointTopology( 4 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   4    
edgeTopology( 1 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  1  2  
edgeTopology( 2 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  2  3  
edgeTopology( 3 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  3  4  
edgeTopology( 4 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  4  1  
faceTopology( 1 ) : 
Element type : Quadrangle4
xidimension : 2
 nptrs :  
----------
1  2  3  4
baseContinuity: H1
baseInterpol: LagrangeInterpolation
```

</div>
</details>

